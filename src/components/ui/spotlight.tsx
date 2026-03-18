'use client';
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useSpring, useTransform, type SpringOptions } from 'framer-motion';

type SpotlightProps = {
  size?: number;
  springOptions?: SpringOptions;
};

export function Spotlight({
  size = 500,
  springOptions = { bounce: 0, damping: 25, stiffness: 80 },
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [parentElement, setParentElement] = useState<HTMLElement | null>(null);

  const mouseX = useSpring(0, springOptions);
  const mouseY = useSpring(0, springOptions);

  const spotlightLeft = useTransform(mouseX, (x) => `${x - size / 2}px`);
  const spotlightTop = useTransform(mouseY, (y) => `${y - size / 2}px`);

  useEffect(() => {
    if (!containerRef.current) return;
    const parent = containerRef.current.parentElement;
    if (parent) {
      parent.style.position = 'relative';
      setParentElement(parent);
    }
  }, []);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!parentElement) return;
      const { left, top } = parentElement.getBoundingClientRect();
      mouseX.set(event.clientX - left);
      mouseY.set(event.clientY - top);
    },
    [mouseX, mouseY, parentElement]
  );

  useEffect(() => {
    if (!parentElement) return;
    const onEnter = () => setIsHovered(true);
    const onLeave = () => setIsHovered(false);
    parentElement.addEventListener('mousemove', handleMouseMove);
    parentElement.addEventListener('mouseenter', onEnter);
    parentElement.addEventListener('mouseleave', onLeave);
    return () => {
      parentElement.removeEventListener('mousemove', handleMouseMove);
      parentElement.removeEventListener('mouseenter', onEnter);
      parentElement.removeEventListener('mouseleave', onLeave);
    };
  }, [parentElement, handleMouseMove]);

  return (
    <motion.div
      ref={containerRef}
      style={{
        position: 'absolute',
        width: size,
        height: size,
        left: spotlightLeft,
        top: spotlightTop,
        borderRadius: '50%',
        background: 'radial-gradient(circle at center, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.6) 35%, rgba(255,255,255,0.1) 60%, transparent 75%)',
        filter: 'blur(8px)',
        pointerEvents: 'none',
        zIndex: 1,
        opacity: isHovered ? 1 : 0,
        transition: 'opacity 0.2s ease',
      }}
    />
  );
}
