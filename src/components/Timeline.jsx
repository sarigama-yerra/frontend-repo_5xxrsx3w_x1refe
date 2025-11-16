import { motion } from 'framer-motion'

const items = [
  { year: '1980–1984', title: 'Ursprung & Gründung', text: 'Zerfall Jugoslawiens, Zusammenschluss krimineller Gruppen 1984 als Balkaneros.' },
  { year: '1992–1998', title: 'Umschwung', text: 'EU-Kontrollen erschweren Geschäfte, Verhaftungen an der Grenze.' },
  { year: '2012', title: 'Entlassung', text: 'Ermin Barovic wird entlassen, Familie in den USA.' },
  { year: '2019–2025', title: 'Neuanfang', text: 'Esko übernimmt, Verlagerung nach Los Santos.' },
]

export default function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-white/10" />
      <div className="space-y-12">
        {items.map((it, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative pl-12 sm:pl-0"
          >
            <div className="sm:grid sm:grid-cols-12 sm:gap-8 items-start">
              <div className="sm:col-span-5 text-zinc-400 text-sm sm:text-right sm:pr-6">
                {it.year}
              </div>
              <div className="sm:col-span-7 bg-white/5 rounded-xl p-5 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-red-500 shadow" />
                  <h3 className="text-lg font-semibold">{it.title}</h3>
                </div>
                <p className="mt-2 text-zinc-300 text-sm">{it.text}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
