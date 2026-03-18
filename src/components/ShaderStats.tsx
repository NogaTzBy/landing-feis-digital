'use client'

import { motion } from 'framer-motion';
import { useShaderBackground } from '@/components/ui/animated-shader-hero';

const stats = [
  { value: '3+', label: 'Años de trayectoria' },
  { value: '120+', label: 'Clientes satisfechos' },
  { value: '60+', label: 'Landings entregadas' },
  { value: '100%', label: 'Satisfacción garantizada' },
];

export default function ShaderStats() {
  const canvasRef = useShaderBackground();

  return (
    <section className="relative w-full overflow-hidden bg-black" style={{ height: '480px' }}>
      {/* WebGL canvas — dark monochrome smoke */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ display: 'block' }}
      />

      {/* Overlay: darkens the shader so it reads as near-black with subtle smoke */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Top/bottom edge fades to blend with adjacent sections */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-5 text-center">
        <motion.p
          className="text-white/30 text-[10px] font-bold uppercase tracking-[0.25em] mb-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Nuestra trayectoria
        </motion.p>
        <motion.h2
          className="text-[clamp(1.6rem,3.5vw,2.8rem)] font-bold text-white leading-tight tracking-tight mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Resultados que hablan
          <br />
          por sí solos.
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 max-w-3xl w-full">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
            >
              <span className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-white tracking-tight leading-none">
                {s.value}
              </span>
              <span className="text-white/35 text-[11px] mt-2 font-medium uppercase tracking-widest text-center">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
