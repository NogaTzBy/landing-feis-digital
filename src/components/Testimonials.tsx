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

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-28 lg:py-36 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#6e6e73] mb-4">
            Clientes
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] leading-[1.1]">
            Lo dicen
            <br />
            nuestros clientes.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-3xl p-7 border border-black/[0.07] shadow-[0_2px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_60px_rgba(0,0,0,0.07)] hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Quote */}
              <p className="text-[15px] text-[#1d1d1f] leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-black/[0.06]">
                <div className="w-9 h-9 rounded-full bg-[#1d1d1f] flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {t.initial}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1d1d1f]">{t.name}</p>
                  <p className="text-xs text-[#6e6e73]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
