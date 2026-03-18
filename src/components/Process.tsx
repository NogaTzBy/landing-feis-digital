'use client'

import { motion } from 'framer-motion';

const steps = [
  {
    n: "01",
    title: "Llamada de descubrimiento",
    description:
      "Primero te escuchamos. Entendemos tu negocio, tu audiencia y qué resultados esperás. Sin formularios, sin burocracia.",
  },
  {
    n: "02",
    title: "Propuesta y diseño",
    description:
      "En 48hs te enviamos una propuesta con la estrategia de diseño y contenido. Trabajamos en conjunto hasta que el diseño te represente.",
  },
  {
    n: "03",
    title: "Desarrollo y revisiones",
    description:
      "Construimos la web con tecnología moderna, rápida y escalable. Incluye rondas de revisión hasta que quedes 100% conforme.",
  },
  {
    n: "04",
    title: "Lanzamiento y soporte",
    description:
      "Publicamos tu web y te acompañamos post-lanzamiento. Ajustes, métricas y soporte técnico en los primeros 30 días incluidos.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="py-28 lg:py-36 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          className="max-w-2xl mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#6e6e73] mb-4">
            Proceso
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] leading-[1.1]">
            Simple, claro
            <br />
            y sin sorpresas.
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line (desktop) */}
          <div className="hidden md:block absolute left-[calc(50%-0.5px)] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-black/10 to-transparent" />

          <div className="grid md:grid-cols-2 gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="group relative flex gap-6 p-8 rounded-3xl bg-[#f5f5f7] border border-black/[0.05] hover:bg-white hover:border-black/[0.10] hover:shadow-[0_4px_40px_rgba(0,0,0,0.06)] transition-all duration-300"
              >
                <div className="shrink-0 w-10 h-10 rounded-2xl bg-white border border-black/[0.08] flex items-center justify-center shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                  <span className="text-[11px] font-bold text-[#1d1d1f] tracking-widest">
                    {step.n}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1d1d1f] mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-[#6e6e73] text-[15px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
