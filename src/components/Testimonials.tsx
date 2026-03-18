'use client'

import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "Antes mi negocio era invisible en internet. Con Feis Digital no solo tenemos una web hermosa, sino que empezamos a recibir consultas nuevas cada semana. Una inversión que se nota.",
    name: "Valentina R.",
    role: "Dueña de tienda de ropa",
    initial: "V",
  },
  {
    text: "Claridad total desde el primer día. Me explicaron cada decisión de diseño y el resultado superó lo que esperaba. La web carga rápido, se ve increíble y genera confianza al instante.",
    name: "Marcos T.",
    role: "Psicólogo clínico",
    initial: "M",
  },
  {
    text: "Tenía miedo de invertir en algo que no funcionara. Pero desde que lanzamos la landing, las reservas de mi restaurante aumentaron un 40%. Trabajan en serio y con criterio.",
    name: "Luciana P.",
    role: "Dueña de restaurante",
    initial: "L",
  },
  {
    text: "Lo mejor fue sentir que entendieron mi negocio desde el principio. No es una plantilla genérica, es una web que me representa. Y eso se nota en los resultados.",
    name: "Diego M.",
    role: "Consultor financiero",
    initial: "D",
  },
  {
    text: "Rápidos, profesionales y con muy buen gusto. Entregaron en el tiempo prometido y con más calidad de la esperada. Volvería a contratar sin dudarlo.",
    name: "Carolina F.",
    role: "Arquitecta independiente",
    initial: "C",
  },
  {
    text: "Pensé que hacer una web era complicado. Con ellos fue todo lo contrario: simple, ordenado y el resultado fue espectacular. Mis clientes siempre me comentan lo linda que está.",
    name: "Andrés L.",
    role: "Instructor de yoga",
    initial: "A",
  },
];

const Stars = () => (
  <div className="flex gap-0.5 mb-5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-4 h-4 fill-[#1d1d1f]" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-28 lg:py-36 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-xl mx-auto mb-16"
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

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-[#f5f5f7] rounded-3xl p-7 border border-black/[0.05] hover:bg-white hover:shadow-[0_8px_60px_rgba(0,0,0,0.07)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <Stars />
              <p className="text-[15px] text-[#1d1d1f] leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-black/[0.06]">
                <div className="w-9 h-9 rounded-full bg-[#1d1d1f] flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {t.initial}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1d1d1f]">{t.name}</p>
                  <p className="text-xs text-[#6e6e73]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
