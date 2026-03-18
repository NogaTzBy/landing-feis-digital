import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section id="contacto" className="py-28 lg:py-36 bg-[#1d1d1f]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/70 text-xs font-medium px-4 py-2 rounded-full mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Espacios disponibles este mes
        </div>

        <h2 className="text-[clamp(2.5rem,7vw,5rem)] font-bold tracking-tight text-white leading-[1.05] mb-6">
          ¿Listo para tener
          <br />
          una web que vende?
        </h2>

        <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto mb-12 font-light">
          Escribinos y en menos de 24hs te enviamos una propuesta personalizada
          para tu negocio. Sin compromiso.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/5491100000000?text=Hola%20Feis%20Digital!%20Quiero%20una%20web%20para%20mi%20negocio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-white text-[#1d1d1f] font-semibold text-[15px] px-8 py-4 rounded-full hover:bg-[#f5f5f7] active:scale-95 transition-all duration-150 shadow-[0_4px_40px_rgba(255,255,255,0.1)] w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-4 h-4" />
            Escribirnos por WhatsApp
          </a>
          <a
            href="mailto:hola@feisdigital.com"
            className="flex items-center gap-2.5 border border-white/20 text-white font-semibold text-[15px] px-8 py-4 rounded-full hover:bg-white/10 active:scale-95 transition-all duration-150 w-full sm:w-auto justify-center"
          >
            Enviar un mail
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Trust */}
        <p className="text-white/25 text-sm mt-12">
          3 años · 40+ clientes · 60+ webs entregadas
        </p>
      </div>
    </section>
  );
}
