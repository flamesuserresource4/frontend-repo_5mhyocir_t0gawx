import { Scissors, Instagram, Facebook, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-300">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="mb-3 flex items-center gap-3 text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
              <Scissors className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold">Estilo Azul</span>
          </div>
          <p className="text-sm text-zinc-400">
            Peluquería y barbería moderna en el corazón de la ciudad. Cuidamos tu imagen con técnicas de vanguardia y productos profesionales.
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-white">Horario</h4>
          <ul className="space-y-1 text-sm">
            <li>Lun - Vie: 10:00 - 20:00</li>
            <li>Sábado: 10:00 - 14:00</li>
            <li>Domingo: Cerrado</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-white">Contacto</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +34 123 456 789</li>
            <li>Calle Principal 123, Madrid</li>
            <li className="flex items-center gap-3 pt-1">
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"><Instagram className="h-4 w-4" /></a>
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"><Facebook className="h-4 w-4" /></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Estilo Azul · Todos los derechos reservados
      </div>
    </footer>
  )
}
