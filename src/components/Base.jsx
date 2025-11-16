import { motion } from 'framer-motion'

export default function Base() {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-white/10 p-6 bg-white/5">
        <h3 className="text-xl font-semibold">Strategische Lage</h3>
        <p className="mt-3 text-sm text-zinc-300">Leerstehendes Hotel in Vespucci: Tarnung für Geschäfte, Strandnähe für Partys, Nähe zur Fahrschule für gefälschte Lizenzen.</p>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-white/10 p-6 bg-white/5">
        <h3 className="text-xl font-semibold">Räume</h3>
        <ul className="mt-3 text-sm text-zinc-300 list-disc pl-5 space-y-1">
          <li>Planungsraum – Strategische Besprechungen</li>
          <li>Waffenschrank – Handgeschmiedete Messer & mehr</li>
          <li>Klamottenschrank – Stilvolle Balkan-Kleidung & Masken</li>
          <li>Labor – Ecstasy-Produktion</li>
          <li>Ausparker + Punkte – Garage & Sammelpunkte</li>
        </ul>
      </motion.div>
    </div>
  )
}
