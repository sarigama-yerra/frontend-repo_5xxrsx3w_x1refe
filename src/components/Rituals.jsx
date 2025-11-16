import { motion } from 'framer-motion'

const rituals = [
  {
    title: 'Aufnahme & Wiedergeburt',
    text: 'Härtebeweis vor dem Rat, anschließend symbolische Wiedergeburt am Meer und Blutschwur, der dich an die Familie bindet.'
  },
  {
    title: 'Smrt – Bloodout',
    text: 'Unehrenhaftes Verlassen führt zum Hinrichtungsritual – Symbolik des Meeres als Ursprung und Ende.'
  },
  {
    title: 'Heiliges Messer',
    text: 'Handgeschmiedete Militärmesser als Heiligtum: Zeichen von Stolz, Schutz und Konsequenz.'
  }
]

export default function Rituals() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {rituals.map((r, i) => (
        <motion.div
          key={r.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6"
        >
          <h3 className="text-xl font-semibold">{r.title}</h3>
          <p className="mt-2 text-zinc-300 text-sm leading-relaxed">{r.text}</p>
        </motion.div>
      ))}
    </div>
  )
}
