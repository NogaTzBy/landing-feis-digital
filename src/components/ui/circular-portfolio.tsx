'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export interface PortfolioItem {
  name: string;
  category: string;
  description: string;
  tags: string[];
  url: string;
  image: string;
}

interface CircularPortfolioProps {
  items: PortfolioItem[];
  autoplay?: boolean;
}

// Returns styles for each image slot — contained within the parent div
function getItemStyle(
  index: number,
  activeIndex: number,
  total: number,
): React.CSSProperties {
  const isActive = index === activeIndex;
  const isLeft = (activeIndex - 1 + total) % total === index;
  const isRight = (activeIndex + 1) % total === index;

  if (isActive) {
    return {
      zIndex: 3,
      opacity: 1,
      pointerEvents: 'auto',
      transform: 'translateX(0%) scale(1)',
      filter: 'brightness(1)',
      transition: 'all 0.65s cubic-bezier(0.4, 0, 0.2, 1)',
    };
  }
  if (isLeft) {
    return {
      zIndex: 2,
      opacity: 1,
      pointerEvents: 'auto',
      // Peek from left: offset left but clip keeps it inside
      transform: 'translateX(-55%) scale(0.78)',
      filter: 'brightness(0.55)',
      transition: 'all 0.65s cubic-bezier(0.4, 0, 0.2, 1)',
    };
  }
  if (isRight) {
    return {
      zIndex: 2,
      opacity: 1,
      pointerEvents: 'auto',
      transform: 'translateX(55%) scale(0.78)',
      filter: 'brightness(0.55)',
      transition: 'all 0.65s cubic-bezier(0.4, 0, 0.2, 1)',
    };
  }
  return {
    zIndex: 1,
    opacity: 0,
    pointerEvents: 'none',
    transition: 'all 0.65s cubic-bezier(0.4, 0, 0.2, 1)',
  };
}

export function CircularPortfolio({ items, autoplay = true }: CircularPortfolioProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (autoplay) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % items.length);
      }, 4000);
    }
    return stopAutoplay;
  }, [autoplay, items.length, stopAutoplay]);

  const handlePrev = useCallback(() => {
    stopAutoplay();
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length, stopAutoplay]);

  const handleNext = useCallback(() => {
    stopAutoplay();
    setActiveIndex((prev) => (prev + 1) % items.length);
  }, [items.length, stopAutoplay]);

  const active = items[activeIndex];

  return (
    <div className="w-full grid md:grid-cols-2 gap-10 items-center">

      {/* Image carousel — overflow hidden so side images don't leak */}
      <div className="relative w-full overflow-hidden rounded-2xl" style={{ height: '320px' }}>
        {/* Images */}
        {items.map((item, i) => (
          <img
            key={item.image + i}
            src={item.image}
            alt={item.name}
            onClick={() => { stopAutoplay(); setActiveIndex(i); }}
            className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.2)] cursor-pointer"
            style={getItemStyle(i, activeIndex, items.length)}
          />
        ))}

        {/* Arrow buttons — overlaid on image edges */}
        <button
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm border border-black/10 text-[#1d1d1f] flex items-center justify-center hover:bg-white hover:scale-105 active:scale-95 transition-all duration-150 shadow-[0_2px_12px_rgba(0,0,0,0.12)]"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm border border-black/10 text-[#1d1d1f] flex items-center justify-center hover:bg-white hover:scale-105 active:scale-95 transition-all duration-150 shadow-[0_2px_12px_rgba(0,0,0,0.12)]"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Dot indicators on image */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => { stopAutoplay(); setActiveIndex(i); }}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Ir a ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content — fixed min-height so page never jumps */}
      <div className="flex flex-col" style={{ minHeight: '300px' }}>
        <div className="relative flex-1">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="w-full"
            >
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#6e6e73] mb-3">
                {active.category}
              </p>
              <h3 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] tracking-tight mb-4">
                {active.name}
              </h3>
              <p className="text-[#6e6e73] text-[15px] leading-relaxed mb-5 max-w-sm">
                {active.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {active.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-medium bg-[#f5f5f7] text-[#6e6e73] px-3 py-1 rounded-full border border-black/[0.06]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={active.url}
                target={active.url.startsWith('http') ? '_blank' : undefined}
                rel={active.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 bg-[#1d1d1f] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-black transition-colors shadow-[0_2px_12px_rgba(0,0,0,0.1)]"
              >
                Ver proyecto
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Counter */}
        <div className="flex items-center gap-3 pt-5 border-t border-black/[0.06] mt-4">
          <span className="text-[12px] text-[#6e6e73] font-medium tabular-nums">
            {String(activeIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  );
}
