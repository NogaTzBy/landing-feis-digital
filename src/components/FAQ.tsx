"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "¿Cuánto tarda en estar lista mi web?",
    a: "Una landing page estándar está lista en 7 a 14 días hábiles desde que confirmamos el proyecto. Para webs más complejas con múltiples secciones o funcionalidades, puede extenderse un poco más. Siempre te damos un plazo claro antes de empezar.",
  },
  {
    q: "¿Necesito saber de tecnología para trabajar con ustedes?",
    a: "Para nada. Nos encargamos de todo: diseño, código, publicación y configuración técnica. Vos solo nos contás tu negocio y tus objetivos. El resto lo manejamos nosotros.",
  },
  {
    q: "¿Qué incluye el precio?",
    a: "Diseño personalizado, desarrollo, publicación, optimización de velocidad, configuración básica de SEO y 30 días de soporte post-lanzamiento. Sin costos ocultos.",
  },
  {
    q: "¿Puedo pedir cambios después de que esté lista?",
    a: "Sí. Incluimos rondas de revisión durante el desarrollo. Una vez lanzada, los primeros 30 días de ajustes menores están incluidos. Para cambios mayores o continuos, tenemos planes de mantenimiento.",
  },
  {
    q: "¿Trabajamos con contrato?",
    a: "Sí. Formalizamos todo por escrito antes de empezar: alcance del proyecto, plazos, precios y condiciones. La claridad desde el principio evita problemas después.",
  },
  {
    q: "¿Hacen webs para cualquier tipo de negocio?",
    a: "Trabajamos con negocios locales, profesionales independientes, emprendimientos y PyMEs. Si tenés clientes, necesitás una web que los convenza. Eso es exactamente lo que hacemos.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-28 lg:py-36 bg-[#f5f5f7]">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#6e6e73] mb-4">
            FAQ
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] leading-[1.1]">
            Preguntas frecuentes.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-black/[0.07] shadow-[0_1px_20px_rgba(0,0,0,0.03)] overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left"
              >
                <span className="font-semibold text-[15px] text-[#1d1d1f]">{faq.q}</span>
                <span className="shrink-0 w-7 h-7 rounded-full bg-[#f5f5f7] border border-black/[0.07] flex items-center justify-center">
                  {open === i ? (
                    <Minus className="w-3.5 h-3.5 text-[#1d1d1f]" />
                  ) : (
                    <Plus className="w-3.5 h-3.5 text-[#1d1d1f]" />
                  )}
                </span>
              </button>
              {open === i && (
                <div className="px-7 pb-6 text-[#6e6e73] text-[15px] leading-relaxed border-t border-black/[0.05] pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
