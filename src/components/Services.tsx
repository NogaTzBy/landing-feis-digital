'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, RefreshCw, Check } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Landing Pages',
    tag: 'Más popular',
    description:
      'Páginas diseñadas con un solo objetivo: convertir. Cada sección, cada palabra y cada botón están pensados para que tu visitante tome acción.',
    points: ['Diseño 100% personalizado', 'Optimizado para conversión', 'Mobile-first', 'Entrega en 7 días'],
    visual: 'landing',
  },
  {
    icon: RefreshCw,
    title: 'Rediseño Web',
    tag: null,
    description:
      '¿Tenés una web que no convierte? La transformamos. Analizamos qué falla y la rediseñamos desde cero con foco en resultados.',
    points: ['Auditoría completa incluida', 'Rediseño desde cero', 'Migración sin downtime', 'Mejora de conversión'],
    visual: 'redesign',
  },
];

/* ─── Visual panels ─── */

function LandingVisual() {
  return (
    <div className="w-full h-full flex flex-col gap-3 p-2">
      {/* browser chrome */}
      <div className="rounded-2xl overflow-hidden border border-black/10 shadow-xl bg-white flex-1 flex flex-col">
        <div className="bg-[#f5f5f7] px-4 py-2.5 flex items-center gap-2 border-b border-black/[0.06]">
          <div className="flex gap-1.5">
            {['#ff5f57','#febc2e','#28c840'].map(c => (
              <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
            ))}
          </div>
          <div className="flex-1 mx-4 bg-white rounded-md h-5 text-[9px] text-[#999] flex items-center px-2 border border-black/[0.06]">
            feisdigital.com/tu-negocio
          </div>
        </div>
        <div className="flex-1 p-4 flex flex-col gap-3">
          <motion.div
            className="h-6 rounded bg-black w-3/5"
            initial={{ width: 0 }} animate={{ width: '60%' }} transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
          />
          <motion.div
            className="h-3 rounded bg-[#e5e5e7] w-4/5"
            initial={{ width: 0 }} animate={{ width: '80%' }} transition={{ delay: 0.4, duration: 0.5 }}
          />
          <motion.div
            className="h-3 rounded bg-[#e5e5e7] w-3/5"
            initial={{ width: 0 }} animate={{ width: '60%' }} transition={{ delay: 0.5, duration: 0.5 }}
          />
          <motion.div
            className="mt-2 h-9 rounded-xl bg-black w-32"
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.4 }}
          />
          <div className="mt-auto grid grid-cols-3 gap-2">
            {[0.9, 0.7, 0.8].map((delay, i) => (
              <motion.div
                key={i}
                className="h-20 rounded-xl bg-[#f5f5f7] border border-black/[0.05]"
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: delay, duration: 0.4 }}
              />
            ))}
          </div>
        </div>
      </div>
      {/* badge */}
      <motion.div
        className="self-end bg-black text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1, duration: 0.4 }}
      >
        Lista en 7 días
      </motion.div>
    </div>
  );
}

function RedesignVisual() {
  return (
    <div className="w-full h-full flex items-center gap-3 p-2">
      {/* before */}
      <motion.div
        className="flex-1 h-full rounded-2xl bg-[#f5f5f7] border border-black/[0.06] overflow-hidden relative"
        initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
      >
        <div className="absolute top-3 left-3 text-[9px] font-bold uppercase tracking-widest text-[#999]">Antes</div>
        <div className="mt-10 px-4 flex flex-col gap-2">
          {[70, 55, 80, 45, 60].map((w, i) => (
            <div key={i} className="h-2 rounded-full bg-[#d1d1d6]" style={{ width: `${w}%` }} />
          ))}
          <div className="mt-3 h-16 rounded-lg bg-[#e5e5e7]" />
          <div className="mt-2 h-7 rounded bg-[#ccc] w-24" />
        </div>
      </motion.div>

      {/* arrow */}
      <motion.div
        className="text-xl text-[#1d1d1f] font-bold shrink-0"
        initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.3 }}
      >
        →
      </motion.div>

      {/* after */}
      <motion.div
        className="flex-1 h-full rounded-2xl bg-black overflow-hidden relative"
        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="absolute top-3 left-3 text-[9px] font-bold uppercase tracking-widest text-white/50">Después</div>
        <div className="mt-10 px-4 flex flex-col gap-2">
          {[65, 50, 75].map((w, i) => (
            <motion.div
              key={i} className="h-2 rounded-full bg-white/20"
              style={{ width: `${w}%` }}
              initial={{ width: 0 }} animate={{ width: `${w}%` }} transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
            />
          ))}
          <motion.div
            className="mt-3 h-16 rounded-xl bg-white/10 border border-white/10"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
          />
          <motion.div
            className="mt-2 h-7 rounded-lg bg-white w-24"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          />
        </div>
      </motion.div>
    </div>
  );
}


const visuals: Record<string, React.FC> = {
  landing: LandingVisual,
  redesign: RedesignVisual,
};

export default function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];
  const Visual = visuals[current.visual];

  return (
    <section id="servicios" className="py-28 lg:py-36 bg-[#f5f5f7]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#6e6e73] mb-4">
            Servicios
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] leading-[1.1] mb-4">
            Todo lo que tu negocio
            <br />
            necesita online.
          </h2>
          <p className="text-[#6e6e73] text-lg leading-relaxed font-light">
            No vendemos plantillas. Cada proyecto es pensado, diseñado y construido
            específicamente para tu negocio y tus objetivos.
          </p>
        </motion.div>

        {/* Interactive layout */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* LEFT: tab list */}
          <div className="md:w-[42%] flex flex-col gap-2">
            {services.map((s, i) => {
              const Icon = s.icon;
              const isActive = active === i;
              return (
                <motion.button
                  key={s.title}
                  onClick={() => setActive(i)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`relative text-left rounded-2xl p-5 border transition-all duration-300 cursor-pointer
                    ${isActive
                      ? 'bg-white border-black/[0.12] shadow-[0_4px_40px_rgba(0,0,0,0.08)]'
                      : 'bg-white/50 border-transparent hover:bg-white hover:border-black/[0.06]'
                    }`}
                >
                  {/* active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute left-0 top-4 bottom-4 w-0.5 bg-black rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}

                  <div className="flex items-start gap-4 pl-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300
                      ${isActive ? 'bg-black' : 'bg-[#f5f5f7]'}`}
                    >
                      <Icon className={`w-4 h-4 transition-colors duration-300 ${isActive ? 'text-white' : 'text-[#6e6e73]'}`} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className={`text-[15px] font-bold tracking-tight transition-colors duration-300
                          ${isActive ? 'text-[#1d1d1f]' : 'text-[#6e6e73]'}`}>
                          {s.title}
                        </h3>
                        {s.tag && (
                          <span className="text-[9px] font-bold uppercase tracking-widest bg-black text-white px-2 py-0.5 rounded-full">
                            {s.tag}
                          </span>
                        )}
                      </div>

                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className="text-[#6e6e73] text-sm leading-relaxed mb-3">
                              {s.description}
                            </p>
                            <ul className="flex flex-col gap-1.5">
                              {s.points.map((p, j) => (
                                <motion.li
                                  key={p}
                                  className="flex items-center gap-2 text-[13px] text-[#1d1d1f] font-medium"
                                  initial={{ opacity: 0, x: -8 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: j * 0.06 }}
                                >
                                  <Check className="w-3.5 h-3.5 text-[#1d1d1f] shrink-0" />
                                  {p}
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* RIGHT: visual panel */}
          <motion.div
            className="md:flex-1 rounded-3xl bg-white border border-black/[0.06] shadow-[0_4px_60px_rgba(0,0,0,0.06)] overflow-hidden"
            style={{ minHeight: 420 }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="w-full h-full"
                style={{ minHeight: 420 }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Visual />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
