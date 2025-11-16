import { motion } from 'framer-motion'

const vocab = [
  ['Dobar Dan', 'Guten Tag'],
  ['Dobro Veče', 'Guten Abend'],
  ['Kako si?', 'Wie geht es dir?'],
  ['Dobro a ti?', 'Gut, danke und dir?'],
  ['Razumem / Ne Razumem', 'Ich verstehe / Ich verstehe nicht'],
  ['Hvala', 'Vielen Dank'],
  ['Izvini / Izvinite', 'Entschuldigung / Entschuldigen Sie bitte'],
]

const cars = [
  { name: 'Schafter4', tag: 'Aktionsfahrzeug' },
  { name: 'Schafter6', tag: 'Leaderfahrzeug' },
  { name: 'Baller3', tag: 'Freizeit' },
  { name: 'Dubsta2', tag: 'Alltag' },
]

export default function Culture() {
  return (
    <div className="space-y-10">
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-white/10 p-6 bg-white/5">
          <h3 className="text-xl font-semibold">Vokabular</h3>
          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            {vocab.map(([sr, de]) => (
              <li key={sr} className="flex items-center justify-between border-b border-white/5 py-2">
                <span className="font-medium">{sr}</span>
                <span className="text-zinc-400">{de}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-white/10 p-6 bg-white/5">
          <h3 className="text-xl font-semibold">Events & Lifestyle</h3>
          <p className="mt-3 text-sm text-zinc-300">Beachpartys, Grillen, Clubs – bei uns wird die Nacht zum Tag. Lieblingskombi: Eiskalter Slivovic & gegrillte Ćevapčići.</p>
          <p className="mt-3 text-sm text-zinc-400">Fraktionsdroge: Ecstasy (Herstellung & regulierter Verkauf im RP).</p>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-white/10 p-6 bg-white/5">
        <h3 className="text-xl font-semibold">Fahrzeuge</h3>
        <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {cars.map((c, i) => (
            <div key={i} className="rounded-lg bg-gradient-to-br from-white/10 to-transparent p-4 border border-white/10">
              <div className="text-2xl font-bold">{c.name}</div>
              <div className="text-xs mt-1 text-zinc-400">{c.tag}</div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-white/10 p-6 bg-white/5">
        <h3 className="text-xl font-semibold">Kleidung & Markenzeichen</h3>
        <p className="mt-3 text-sm text-zinc-300">Schlicht, elegant, rustikal. Tattoos sichtbar, oft oberkörperfrei. Markenzeichen: Schiebermütze und Ketten.</p>
        <p className="mt-2 text-sm text-zinc-400">Farben: Blau, Rot, Weiß (Balkan-Flaggen).</p>
      </motion.div>
    </div>
  )
}
