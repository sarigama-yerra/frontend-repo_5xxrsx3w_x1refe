import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-black to-zinc-900">
      {/* Glow effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 w-[40rem] h-[40rem] bg-blue-600/30 rounded-full blur-[120px]" />
        <div className="absolute -bottom-24 -right-24 w-[40rem] h-[40rem] bg-red-600/20 rounded-full blur-[120px]" />
      </div>

      {/* 3D-ish logo ring */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vmin] h-[80vmin] rounded-full border border-white/10" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vmin] h-[60vmin] rounded-full border border-white/10"
          style={{ boxShadow: 'inset 0 0 60px rgba(255,255,255,0.06)' }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-zinc-300"
        >
          BALKANEROS
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="mt-4 text-zinc-300 max-w-2xl mx-auto"
        >
          Eine Familie. Eine Tradition. Ein Vermächtnis.
        </motion.p>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-2 text-zinc-400"
        >
          "Brat za Brata - Bruder für Bruder"
        </motion.p>

        <div className="mt-10 flex items-center justify-center gap-3">
          <a href="#geschichte" className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-zinc-200 transition">Geschichte</a>
          <a href="#hierarchie" className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition">Hierarchie</a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent"/>
    </section>
  )
}
