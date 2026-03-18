'use client'

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';

export function ContainerScroll({
  children,
  titleComponent,
}: {
  children: React.ReactNode;
  titleComponent?: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scaleDimensions = () => {
    return typeof window !== 'undefined' && window.innerWidth <= 768
      ? [0.7, 0.9]
      : [0.7, 1];
  };

  const rotate = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [20, 0]),
    { stiffness: 100, damping: 30 }
  );
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.5], scaleDimensions()),
    { stiffness: 100, damping: 30 }
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [80, 0]),
    { stiffness: 100, damping: 30 }
  );

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center py-24"
      style={{ perspective: '1000px' }}
    >
      {titleComponent && (
        <div className="mb-10 text-center">{titleComponent}</div>
      )}
      <motion.div
        style={{
          rotateX: rotate,
          scale,
          y: translateY,
          transformOrigin: 'top center',
        }}
        className="w-full max-w-5xl"
      >
        {children}
      </motion.div>
    </div>
  );
}
