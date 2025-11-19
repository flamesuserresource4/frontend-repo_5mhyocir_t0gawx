import { motion } from 'framer-motion'
import { Scissors, Phone, CalendarCheck, MapPin } from 'lucide-react'

export default function NavbarHero() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-zinc-900 to-zinc-950 text-white">
      {/* Aurora background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-pink-500/20 via-fuchsia-500/20 to-blue-500/20 blur-3xl" />
      </div>

      {/* Topbar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
            <Scissors className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-zinc-300">Peluquería</p>
            <p className="-mt-1 text-lg font-semibold">Estilo Azul</p>
          </div>
        </div>
        <div className="hidden items-center gap-6 md:flex">
          <a href="#servicios" className="text-sm text-zinc-300 hover:text-white">Servicios</a>
          <a href="#precios" className="text-sm text-zinc-300 hover:text-white">Precios</a>
          <a href="#contacto" className="text-sm text-zinc-300 hover:text-white">Contacto</a>
          <a href="#contacto" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow/30 transition hover:shadow-lg">
            <CalendarCheck className="h-4 w-4" />
            Reserva ahora
          </a>
        </div>
        <a href="tel:+34123456789" className="md:hidden inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm ring-1 ring-white/15">
          <Phone className="h-4 w-4" /> Llamar
        </a>
      </div>

      {/* Hero */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-24 pt-10 md:grid-cols-2 md:pb-28 md:pt-16">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl"
          >
            Corte, color y estilo profesional en un ambiente moderno
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-8 text-zinc-300"
          >
            Somos especialistas en tendencias actuales: fades, balayage, keratina y más. Atención personalizada para que salgas con tu mejor versión.
          </motion.p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#contacto" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-zinc-900 shadow transition hover:shadow-lg">
              <CalendarCheck className="h-4 w-4" />
              Reserva tu cita
            </a>
            <a href="#ubicacion" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 font-medium text-white ring-1 ring-white/15 hover:bg-white/15">
              <MapPin className="h-4 w-4" />
              ¿Cómo llegar?
            </a>
          </div>
        </div>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1600&auto=format&fit=crop"
              alt="Peluquería moderna"
              className="h-full w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-zinc-950/10" />
          </motion.div>
        </div>
      </div>

      {/* Quick badges */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-6 pb-16 sm:grid-cols-3">
        {[
          { icon: <Scissors className="h-5 w-5" />, title: 'Barbería y estilismo' },
          { icon: <CalendarCheck className="h-5 w-5" />, title: 'Citas fáciles y rápidas' },
          { icon: <Phone className="h-5 w-5" />, title: 'Atención por WhatsApp' },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200"
          >
            <span className="text-white/90">{item.icon}</span>
            {item.title}
          </motion.div>
        ))}
      </div>
    </header>
  )
}
