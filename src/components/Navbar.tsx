"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#testimonios", label: "Clientes" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-black/[0.06] shadow-[0_1px_20px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex items-center group">
          <Image
            src="/logo.png"
            alt="Feis Digital"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#contacto"
            className="bg-[#1d1d1f] text-white text-[13px] font-semibold px-5 py-2.5 rounded-full hover:bg-black active:scale-95 transition-all duration-150 shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
          >
            Empezar proyecto
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-[#1d1d1f]"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-black/[0.06] px-5 pb-5 pt-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-[#1d1d1f] border-b border-black/[0.05] last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="mt-4 flex items-center justify-center bg-black text-white text-sm font-semibold px-5 py-3 rounded-full w-full"
          >
            Empezar proyecto
          </a>
        </div>
      )}
    </header>
  );
}
