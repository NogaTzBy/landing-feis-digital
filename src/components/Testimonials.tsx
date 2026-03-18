'use client'

import { motion } from 'framer-motion';
import { TestimonialCard, TestimonialAuthor } from '@/components/ui/testimonial-card';

const testimonials: Array<{ author: TestimonialAuthor; text: string }> = [
  {
    author: {
      name: "Valentina R.",
      handle: "Dueña de tienda de ropa",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
      initial: "V",
    },
    text: "Antes mi negocio era invisible en internet. Con Feis Digital empezamos a recibir consultas nuevas cada semana. Una inversión que se nota.",
  },
  {
    author: {
      name: "Marcos T.",
      handle: "Psicólogo clínico",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      initial: "M",
    },
    text: "Claridad total desde el primer día. El resultado superó lo que esperaba. La web carga rápido, se ve increíble y genera confianza al instante.",
  },
  {
    author: {
      name: "Luciana P.",
      handle: "Dueña de restaurante",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face",
      initial: "L",
    },
    text: "Desde que lanzamos la landing, las reservas de mi restaurante aumentaron un 40%. Trabajan en serio y con criterio.",
  },
  {
    author: {
      name: "Diego M.",
      handle: "Consultor financiero",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      initial: "D",
    },
    text: "No es una plantilla genérica, es una web que me representa. Y eso se nota en los resultados desde el primer mes.",
  },
  {
    author: {
      name: "Carolina F.",
      handle: "Arquitecta independiente",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      initial: "C",
    },
    text: "Rápidos, profesionales y con muy buen gusto. Entregaron en tiempo y con más calidad de la esperada. Volvería a contratar sin dudarlo.",
  },
  {
    author: {
      name: "Andrés L.",
      handle: "Instructor de yoga",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
      initial: "A",
    },
    text: "Con ellos fue todo lo contrario a lo que esperaba: simple, ordenado y el resultado fue espectacular. Mis clientes siempre me comentan lo linda que está.",
  },
];

// Duplicate for infinite loop
const doubled = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-28 lg:py-36 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 mb-14">
        <motion.div
          className="text-center max-w-xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#6e6e73] mb-4">
            Clientes
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] leading-[1.1]">
            Lo dicen
            <br />
            nuestros clientes.
          </h2>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative w-full">
        {/* Row 1 — left to right */}
        <div
          className="group flex overflow-hidden mb-4"
          style={{ gap: '1rem' }}
        >
          <div
            className="flex shrink-0 group-hover:[animation-play-state:paused]"
            style={{
              gap: '1rem',
              animation: 'marquee-ltr 35s linear infinite',
            }}
          >
            {doubled.map((t, i) => (
              <TestimonialCard key={`row1-${i}`} {...t} />
            ))}
          </div>
        </div>

        {/* Row 2 — right to left */}
        <div
          className="group flex overflow-hidden"
          style={{ gap: '1rem' }}
        >
          <div
            className="flex shrink-0 group-hover:[animation-play-state:paused]"
            style={{
              gap: '1rem',
              animation: 'marquee-rtl 40s linear infinite',
            }}
          >
            {[...doubled].reverse().map((t, i) => (
              <TestimonialCard key={`row2-${i}`} {...t} />
            ))}
          </div>
        </div>

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}
