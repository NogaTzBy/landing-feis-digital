'use client'

import { useShaderBackground } from '@/components/ui/animated-shader-hero';

const stats = [
  { value: '3+', label: 'años de trayectoria' },
  { value: '120+', label: 'clientes satisfechos' },
  { value: '60+', label: 'landings entregadas' },
  { value: '100%', label: 'satisfacción garantizada' },
];

export default function ShaderStats() {
  const canvasRef = useShaderBackground();

  return (
    <section className="relative w-full overflow-hidden" style={{ height: '480px' }}>
      {/* WebGL canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ display: 'block' }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-5 text-center">
        <p className="text-white/50 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
          Nuestra trayectoria
        </p>
        <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold text-white leading-tight tracking-tight mb-16">
          Resultados que hablan
          <br />
          por sí solos.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-3xl w-full">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <span className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-white tracking-tight leading-none">
                {s.value}
              </span>
              <span className="text-white/50 text-xs mt-2 font-medium uppercase tracking-widest text-center">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
