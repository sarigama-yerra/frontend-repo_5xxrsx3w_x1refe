import { motion } from 'framer-motion'

export default function Goals() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {[
        { title: 'Nachtleben erwecken', text: 'Clubs öffnen, Partys hosten, Stadt beleben.' },
        { title: 'Friedliches RP fördern', text: 'Interaktion vor Schießereien. Zivilisten einbinden.' },
        { title: 'Vespucci stärken', text: 'Präsenz aufbauen und als Zentrum etablieren.' }
      ].map((g, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="rounded-xl border border-white/10 p-6 bg-white/5">
          <h3 className="text-xl font-semibold">{g.title}</h3>
          <p className="mt-2 text-sm text-zinc-300">{g.text}</p>
        </motion.div>
      ))}
    </div>
  )
}
