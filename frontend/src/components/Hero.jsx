
import { motion } from 'motion/react';

const services = [
  { icon: '🔧', name: 'Plumbing', detail: 'Repairs & installations', color: 'bg-[#e4f1eb]', top: '12%' },
  { icon: '⚡', name: 'Electrical', detail: 'Safe & reliable work', color: 'bg-[#fff0d8]', top: '36%' },
  { icon: '🧹', name: 'Home Cleaning', detail: 'A fresher, cleaner home', color: 'bg-[#e8e9fb]', top: '60%' },
];

export default function Hero({ onLogin, onRegister }) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#faf9f6] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#dceee5]/60 blur-3xl" />
      <div className="pointer-events-none absolute -left-28 bottom-0 h-64 w-64 rounded-full bg-[#f5e8d7]/60 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-10">
        {/* Left side: Main message */}
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#dce8df] bg-white/80 px-4 py-2 text-sm font-medium text-[#42685b] shadow-sm"
          >
            <span className="h-2 w-2 rounded-full bg-[#2b9a7f]" />
            Your neighbourhood, your trusted services
          </motion.div>

          <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-[#203b35] sm:text-5xl lg:text-6xl">
            Everyday help,
            <br />
            <span className="text-[#168477]">right around</span>
            <br />
            the corner.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-[#68766f] sm:text-lg">
            From home repairs to everyday essentials, discover local
            service professionals and find the help you need, all in one place.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <motion.a
              href="#services"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 rounded-full bg-[#176b60] px-6 py-4 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(23,107,96,0.18)] transition-colors duration-300 hover:bg-[#10584e]"
            >
              Find a Service
              <span aria-hidden="true">↗</span>
            </motion.a>

            <motion.button
              type="button"
              onClick={onRegister}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#d8e2da] bg-white/80 px-6 py-4 text-sm font-semibold text-[#31534a] transition-all duration-300 hover:border-[#168477] hover:bg-[#edf5ef]"
            >
              Become a Provider
              <span aria-hidden="true">→</span>
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#68766f]"
          >
            <span className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e2f0e7] text-xs text-[#176b60]">✓</span>
              Local professionals
            </span>
            <span className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e2f0e7] text-xs text-[#176b60]">✓</span>
              Easy service discovery
            </span>
          </motion.div>
        </motion.div>

        {/* Right side: Animated service cards */}
        <motion.div
          initial={{ opacity: 0, x: 45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-[#e8e6dc] bg-[#f1f1e9] p-5 shadow-[0_24px_70px_rgba(41,66,54,0.09)] sm:min-h-[470px] sm:p-8">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-[#d6e2d6]" />
            <div className="absolute -right-5 -top-5 h-40 w-40 rounded-full border border-[#d6e2d6]" />

            <div className="relative z-10 flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-[#718078]">MY SERVICE HUB</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#203b35] sm:text-3xl">
                  Help is closer
                  <br />
                  than you think.
                </h2>
              </div>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                🏡
              </div>
            </div>

            <div className="relative z-10 mt-8 space-y-3">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, x: 35 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.45 + index * 0.17,
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ x: 5, scale: 1.015 }}
                  className="flex items-center gap-4 rounded-2xl border border-white/80 bg-white/90 p-4 shadow-[0_6px_20px_rgba(41,66,54,0.04)] sm:p-5"
                >
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl ${service.color}`}>
                    {service.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-[#29443b]">
                      {service.name}
                    </h3>
                    <p className="mt-1 text-sm text-[#7a857e]">
                      {service.detail}
                    </p>
                  </div>
                  <span className="text-xl text-[#168477]" aria-hidden="true">↗</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-5 right-5 z-20 rounded-2xl border border-[#e2e9df] bg-white px-4 py-3 shadow-lg sm:bottom-7 sm:right-7"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e2f0e7] text-lg">
                  ✓
                </div>
                <div>
                  <p className="text-sm font-bold text-[#29443b]">Simple. Local. Convenient.</p>
                  <p className="mt-1 text-xs text-[#7a857e]">Your everyday service hub</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            animate={{ rotate: [0, 5, 0], y: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-4 top-28 z-20 hidden rounded-2xl border border-[#e8e6dc] bg-white p-4 shadow-lg sm:block"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">📍</span>
              <div>
                <p className="text-sm font-bold text-[#29443b]">Near your home</p>
                <p className="mt-1 text-xs text-[#7a857e]">Discover local help</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
