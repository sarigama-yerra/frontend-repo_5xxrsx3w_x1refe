import { motion } from 'framer-motion'

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="relative py-24 sm:py-28 bg-black text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
          {subtitle && <p className="mt-2 text-zinc-400 max-w-2xl">{subtitle}</p>}
          <div className="mt-10">
            {children}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
