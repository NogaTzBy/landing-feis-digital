export default function Footer() {
  return (
    <footer className="bg-[#1d1d1f] border-t border-white/[0.06] py-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
            <span className="text-black text-[10px] font-bold">F</span>
          </div>
          <span className="text-white font-semibold text-sm tracking-tight">Feis Digital</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          {["Servicios", "Proceso", "Trabajos", "Contacto"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white/40 text-xs font-medium hover:text-white/70 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <p className="text-white/25 text-xs">
          © {new Date().getFullYear()} Feis Digital
        </p>
      </div>
    </footer>
  );
}
