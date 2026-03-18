'use client'

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const steps = [
  {
    n: '01',
    title: 'Llamada de descubrimiento',
    description:
      'Primero te escuchamos. Entendemos tu negocio, tu audiencia y qué resultados esperás. Sin formularios, sin burocracia.',
    detail: '30 minutos · Sin costo',
    emoji: '🎙️',
  },
  {
    n: '02',
    title: 'Propuesta y diseño',
    description:
      'En 48hs te enviamos una propuesta con la estrategia de diseño y contenido. Trabajamos en conjunto hasta que el diseño te represente.',
    detail: '48 horas · 2 revisiones incluidas',
    emoji: '✏️',
  },
  {
    n: '03',
    title: 'Desarrollo y revisiones',
    description:
      'Construimos la web con tecnología moderna, rápida y escalable. Incluye rondas de revisión hasta que quedes 100% conforme.',
    detail: '5–10 días · Revisiones ilimitadas',
    emoji: '⚡',
  },
  {
    n: '04',
    title: 'Lanzamiento y soporte',
    description:
      'Publicamos tu web y te acompañamos post-lanzamiento. Ajustes, métricas y soporte técnico en los primeros 30 días incluidos.',
    detail: '30 días de soporte · Sin costo extra',
    emoji: '🚀',
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative grid md:grid-cols-2 gap-4 md:gap-12 items-center">
      {/* number + connector dot (absolute, centered in the timeline) */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-2 border-black/[0.08] items-center justify-center z-10 shadow-[0_2px_20px_rgba(0,0,0,0.08)]">
        <motion.span
          className="text-[11px] font-bold text-[#1d1d1f] tracking-widest"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.4, type: 'spring' }}
        >
          {step.n}
        </motion.span>
      </div>

      {/* Card — alternates left/right */}
      <motion.div
        className={`md:col-span-1 ${isLeft ? 'md:col-start-1' : 'md:col-start-2'}`}
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="group relative rounded-3xl bg-white border border-black/[0.06] p-7 shadow-[0_2px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_60px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300">
          {/* mobile step number */}
          <div className="md:hidden flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-xl bg-[#f5f5f7] border border-black/[0.06] flex items-center justify-center">
              <span className="text-[10px] font-bold text-[#1d1d1f] tracking-widest">{step.n}</span>
            </div>
          </div>

          <div className="text-2xl mb-4">{step.emoji}</div>

          <h3 className="text-xl font-bold text-[#1d1d1f] mb-2 tracking-tight">{step.title}</h3>
          <p className="text-[#6e6e73] text-[15px] leading-relaxed mb-4">{step.description}</p>

          <div className="inline-flex items-center gap-2 bg-[#f5f5f7] rounded-full px-3 py-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#28c840]" />
            <span className="text-[11px] font-semibold text-[#6e6e73]">{step.detail}</span>
          </div>
        </div>
      </motion.div>

      {/* spacer for the other column */}
      <div className={`hidden md:block md:col-span-1 ${isLeft ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1'}`} />
    </div>
  );
}

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.4'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="proceso" className="py-28 lg:py-36 bg-white">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
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
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] leading-[1.1] mb-4">
            Simple, claro
            <br />
            y sin sorpresas.
          </h2>
          <p className="text-[#6e6e73] text-lg leading-relaxed font-light">
            Cuatro pasos. Sin vueltas. Sin burocracia.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* vertical line (desktop only) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[#e5e5e7]" />
          {/* animated fill */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px overflow-hidden">
            <motion.div
              className="w-full bg-black origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {/* steps */}
          <div className="flex flex-col gap-10 md:gap-14">
            {steps.map((step, i) => (
              <StepCard key={step.n} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
