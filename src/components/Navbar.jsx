import { useState } from 'react'
import { Menu, X, Swords, Shield, History as HistoryIcon, Layers } from 'lucide-react'

const navItems = [
  { id: 'geschichte', label: 'Geschichte', icon: HistoryIcon },
  { id: 'hierarchie', label: 'Hierarchie', icon: Layers },
  { id: 'rituale', label: 'Rituale', icon: Swords },
  { id: 'kultur', label: 'Kultur', icon: Shield },
  { id: 'base', label: 'Base', icon: Shield },
  { id: 'ziele', label: 'Ziele', icon: Shield },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-600 to-red-600 ring-2 ring-white/20 flex items-center justify-center">
              <span className="text-white text-xs font-bold">BK</span>
            </div>
            <span className="text-white font-semibold tracking-widest">BALKANEROS</span>
          </div>

          <nav className="hidden md:flex items-center gap-2">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-sm text-white/80 hover:text-white px-3 py-2 rounded-md hover:bg-white/10 transition flex items-center gap-2">
                <Icon size={16} /> {label}
              </button>
            ))}
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60">
          <div className="px-4 py-3 space-y-1">
            {navItems.map(({ id, label }) => (
              <button key={id} onClick={() => scrollTo(id)} className="block w-full text-left text-white/90 hover:text-white px-3 py-2 rounded hover:bg-white/10">
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
