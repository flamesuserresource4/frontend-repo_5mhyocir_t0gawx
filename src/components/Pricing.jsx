import { motion } from 'framer-motion'

const planes = [
  {
    nombre: 'Look Express',
    precio: '25€',
    incluye: ['Corte + lavado', 'Peinado básico', 'Producto de acabado'],
    destacado: false,
  },
  {
    nombre: 'Color & Care',
    precio: '59€',
    incluye: ['Color o mechas', 'Tratamiento hidratante', 'Secado y peinado'],
    destacado: true,
  },
  {
    nombre: 'Barber Premium',
    precio: '35€',
    incluye: ['Corte', 'Perfilado de barba', 'Toalla caliente + aceites'],
    destacado: false,
  },
]

export default function Pricing() {
  return (
    <section id="precios" className="relative bg-zinc-950 py-20 text-white">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-semibold tracking-tight">Planes pensados para ti</h2>
          <p className="text-zinc-300">Transparencia total. El precio final puede variar según longitud y técnica.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {planes.map((p, i) => (
            <motion.div
              key={p.nombre}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative rounded-3xl border border-white/10 p-6 ${p.destacado ? 'bg-gradient-to-b from-fuchsia-600/20 to-blue-600/20 ring-1 ring-white/20' : 'bg-white/5'}`}
            >
              {p.destacado && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-zinc-900 shadow">Popular</span>
              )}
              <h3 className="mb-2 text-xl font-semibold">{p.nombre}</h3>
              <p className="mb-4 text-3xl font-bold">{p.precio}</p>
              <ul className="mb-6 space-y-2 text-sm text-zinc-300">
                {p.incluye.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/70"></span>
                    {b}
                  </li>
                ))}
              </ul>
              <button className="w-full rounded-xl bg-white px-4 py-2 font-medium text-zinc-900 transition hover:brightness-95">Reservar este</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
