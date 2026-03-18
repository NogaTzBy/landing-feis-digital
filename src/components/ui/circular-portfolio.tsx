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

function getItemStyle(
  index: number,
  activeIndex: number,
  total: number,
  containerWidth: number
): React.CSSProperties {
  const gap = Math.min(Math.max(containerWidth * 0.18, 60), 120);
  const stickUp = gap * 0.65;
  const isActive = index === activeIndex;
  const isLeft = (activeIndex - 1 + total) % total === index;
  const isRight = (activeIndex + 1) % total === index;

  if (isActive) {
    return {
      zIndex: 3, opacity: 1, pointerEvents: 'auto',
      transform: 'translateX(0) translateY(0) scale(1) rotateY(0deg)',
      transition: 'all 0.7s cubic-bezier(.4,2,.3,1)',
    };
  }
  if (isLeft) {
    return {
      zIndex: 2, opacity: 1, pointerEvents: 'auto',
      transform: `translateX(-${gap}px) translateY(-${stickUp}px) scale(0.82) rotateY(18deg)`,
      transition: 'all 0.7s cubic-bezier(.4,2,.3,1)',
    };
  }
  if (isRight) {
    return {
      zIndex: 2, opacity: 1, pointerEvents: 'auto',
      transform: `translateX(${gap}px) translateY(-${stickUp}px) scale(0.82) rotateY(-18deg)`,
      transition: 'all 0.7s cubic-bezier(.4,2,.3,1)',
    };
  }
  return {
    zIndex: 1, opacity: 0, pointerEvents: 'none',
    transition: 'all 0.7s cubic-bezier(.4,2,.3,1)',
  };
}

export function CircularPortfolio({ items, autoplay = true }: CircularPortfolioProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(600);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const observe = () => {
      if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
    };
    observe();
    window.addEventListener('resize', observe);
    return () => window.removeEventListener('resize', observe);
  }, []);

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
    <div className="w-full grid md:grid-cols-2 gap-12 items-center">
      {/* Image carousel — fixed height */}
      <div
        ref={containerRef}
        className="relative h-72 sm:h-80 w-full"
        style={{ perspective: '1000px' }}
      >
        {items.map((item, i) => (
          <img
            key={item.image + i}
            src={item.image}
            alt={item.name}
            className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.18)]"
            style={getItemStyle(i, activeIndex, items.length, containerWidth)}
          />
        ))}
      </div>

      {/* Content — fixed height so page doesn't jump */}
      <div className="flex flex-col" style={{ minHeight: '320px' }}>
        {/* Text area: fixed height, overflow hidden, content absolutely positioned */}
        <div className="relative flex-1" style={{ minHeight: '240px' }}>
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16, position: 'absolute', top: 0, left: 0, right: 0 }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
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
                className="inline-flex items-center gap-2 bg-[#1d1d1f] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-black transition-colors shadow-[0_2px_12px_rgba(0,0,0,0.12)]"
              >
                Ver proyecto
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation — subtle arrows + dots */}
        <div className="flex items-center gap-2 pt-6 border-t border-black/[0.06] mt-4">
          <button
            onClick={handlePrev}
            className="w-9 h-9 rounded-full border border-black/[0.12] text-[#6e6e73] flex items-center justify-center hover:border-black/30 hover:text-[#1d1d1f] transition-all duration-150"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="w-9 h-9 rounded-full border border-black/[0.12] text-[#6e6e73] flex items-center justify-center hover:border-black/30 hover:text-[#1d1d1f] transition-all duration-150"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Progress dots */}
          <div className="flex gap-1.5 ml-3">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => { stopAutoplay(); setActiveIndex(i); }}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'w-6 bg-[#1d1d1f]' : 'w-2 bg-black/15 hover:bg-black/30'
                }`}
                aria-label={`Ir a ${i + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <span className="ml-auto text-[12px] text-[#6e6e73] font-medium tabular-nums">
            {String(activeIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  );
}
