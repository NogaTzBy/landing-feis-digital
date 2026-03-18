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
  const offset = (index - activeIndex + total) % total;
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
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
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
      {/* Image carousel */}
      <div
        ref={containerRef}
        className="relative h-72 sm:h-80 w-full"
        style={{ perspective: '1000px' }}
      >
        {items.map((item, i) => (
          <img
            key={item.name + i}
            src={item.image}
            alt={item.name}
            className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.18)]"
            style={getItemStyle(i, activeIndex, items.length, containerWidth)}
          />
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between min-h-[260px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#6e6e73] mb-3">
              {active.category}
            </p>
            <h3 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] tracking-tight mb-4">
              {active.name}
            </h3>
            <p className="text-[#6e6e73] text-[15px] leading-relaxed mb-6 max-w-sm">
              {active.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
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
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <div className="flex items-center gap-3 mt-8">
          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-full bg-[#1d1d1f] text-white flex items-center justify-center hover:bg-black transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-full bg-[#1d1d1f] text-white flex items-center justify-center hover:bg-black transition-colors"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="flex gap-1.5 ml-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => { stopAutoplay(); setActiveIndex(i); }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'w-6 bg-[#1d1d1f]' : 'w-1.5 bg-black/20'
                }`}
                aria-label={`Ir a ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
