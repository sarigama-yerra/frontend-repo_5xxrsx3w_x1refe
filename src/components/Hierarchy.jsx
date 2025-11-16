import { motion } from 'framer-motion'

const ranks = [
  { level: 12, name: 'Gazda', sr: 'газда', role: 'Der Chef' },
  { level: 11, name: 'Desna ruka', sr: 'десна рука', role: 'Rechte Hand' },
  { level: 10, name: 'Veliki Brat | Starija sestra', sr: 'Велики Брат | Старија сестра', role: 'Großer Bruder | Große Schwester' },
  { level: 9, name: 'Ministar', sr: 'Министар', role: 'Minister' },
  { level: 8, name: 'Mentor', sr: 'ментор', role: 'Mentor | Ausbilder' },
  { level: 7, name: 'Učitelj', sr: 'Учитељиц', role: 'Lehrer | Co-Ausbilder' },
  { level: 6, name: 'Organizator', sr: 'Организер', role: 'Organisator | Leiter von Aktionen' },
  { level: 5, name: 'Reket', sr: 'Рекет', role: 'Schläger - Sammelt Wocheneinzahlungen ein' },
  { level: 4, name: 'Vojnik', sr: 'војник', role: 'Soldat - Vollwertiges Mitglied' },
  { level: 3, name: 'Brat | Sestra', sr: 'Брат | Сестра', role: 'Bruder / Schwester - Enges Mitglied' },
  { level: 2, name: 'Kolega', sr: 'колега', role: 'Gefährte - Seit längerem dabei' },
  { level: 1, name: 'Prijatelj', sr: 'пријатељy', role: 'Freund der Familie' },
  { level: 0, name: 'Početnik', sr: 'Почетник', role: 'Neuling, frisches Mitglied' },
]

export default function Hierarchy() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {ranks.map((r, i) => (
        <motion.div
          key={r.level}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.4, delay: i * 0.03 }}
          className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
        >
          <div className="absolute right-3 top-3 text-5xl font-black text-white/10">{r.level}</div>
          <div className="p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{r.name}</h3>
              <span className="text-xs text-zinc-400">Rank #{r.level}</span>
            </div>
            <p className="text-sm text-zinc-400">{r.sr}</p>
            <p className="mt-3 text-zinc-300 text-sm">{r.role}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
