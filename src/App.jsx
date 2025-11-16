import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Timeline from './components/Timeline'
import Hierarchy from './components/Hierarchy'
import Rituals from './components/Rituals'
import Culture from './components/Culture'
import Base from './components/Base'
import Goals from './components/Goals'

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main className="">
        <Hero />
        <Section id="geschichte" title="Unsere Geschichte" subtitle="Von den Straßen Jugoslawiens bis nach Los Santos – Macht, Verrat und Wiedergeburt.">
          <Timeline />
        </Section>

        <Section id="hierarchie" title="Hierarchie" subtitle="Rangfolge und Struktur unserer Familie">
          <Hierarchy />
        </Section>

        <Section id="rituale" title="Rituale" subtitle="Aufnahme, Blutschwur und das Smrt-Ritual">
          <Rituals />
        </Section>

        <Section id="kultur" title="Kultur" subtitle="Sprache, Events, Fahrzeuge und Traditionen">
          <Culture />
        </Section>

        <Section id="base" title="Base / Hauptquartier" subtitle="Das leerstehende Hotel in Vespucci – unsere Festung">
          <Base />
        </Section>

        <Section id="ziele" title="Ziele auf dem Server" subtitle="Unser RP – Das Nachtleben erwecken">
          <Goals />
        </Section>
      </main>

      <footer className="border-t border-white/10 py-10 text-center text-zinc-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm">© 2025 Balkaneros. Alle Rechte vorbehalten.</div>
          <div className="text-xs mt-2">Put života – Der Weg des Lebens | Smrt onima koji nas izdaju</div>
        </div>
      </footer>
    </div>
  )
}

export default App
