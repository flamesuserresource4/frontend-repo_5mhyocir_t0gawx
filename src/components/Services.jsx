import { motion } from 'framer-motion'
import { Sparkles, Scissors, Brush, Droplets, Wand2 } from 'lucide-react'

const servicios = [
  {
    icon: Scissors,
    titulo: 'Corte y peinado',
    descripcion: 'Fades, clásicos, tijera, máquina, brushing y peinados para eventos.',
    precio: 'desde 15€',
  },
  {
    icon: Brush,
    titulo: 'Color y mechas',
    descripcion: 'Balayage, reflejos, color global y técnicas de coloración de tendencia.',
    precio: 'desde 35€',
  },
  {
    icon: Droplets,
    titulo: 'Tratamientos',
    descripcion: 'Keratina, hidratación profunda y detox capilar para un cabello saludable.',
    precio: 'desde 25€',
  },
  {
    icon: Wand2,
    titulo: 'Barba y afeitado',
    descripcion: 'Perfilado, toalla caliente y cuidado de barba con productos premium.',
    precio: 'desde 12€',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="relative bg-zinc-950 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.08),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(236,72,153,0.07),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-center gap-3">
          <Sparkles className="h-5 w-5 text-fuchsia-400" />
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Nuestros servicios</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {servicios.map((s, i) => (
            <motion.div
              key={s.titulo}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{s.titulo}</h3>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-zinc-200 ring-1 ring-white/15">{s.precio}</span>
              </div>
              <p className="text-sm text-zinc-300">{s.descripcion}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
