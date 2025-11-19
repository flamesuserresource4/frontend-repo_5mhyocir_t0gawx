import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contacto" className="relative bg-zinc-950 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_90%,rgba(59,130,246,0.08),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-semibold tracking-tight">Reserva tu cita</h2>
          <p className="text-zinc-300">Escríbenos por WhatsApp, llámanos o visítanos. ¡Te esperamos!</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            href="tel:+34123456789"
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-zinc-300">Teléfono</p>
              <p className="font-semibold">+34 123 456 789</p>
            </div>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            href="mailto:citas@estiloazul.com"
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-zinc-300">Email</p>
              <p className="font-semibold">citas@estiloazul.com</p>
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-zinc-300">Dirección</p>
              <p className="font-semibold">Calle Principal 123, Madrid</p>
            </div>
          </motion.div>
        </div>

        <div id="ubicacion" className="mt-8 overflow-hidden rounded-3xl border border-white/10">
          <iframe
            title="Mapa"
            src="https://www.google.com/maps?q=Madrid&output=embed"
            className="h-72 w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
