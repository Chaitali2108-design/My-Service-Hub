
import { motion } from 'motion/react';

const benefits = [
  'Reach customers in your city',
  'Showcase the services you offer',
  'Connect with people who need your skills',
];

export default function ProviderCTA({ onRegister }) {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#173f38] px-6 py-12 sm:px-10 sm:py-16 lg:px-16"
      >
        {/* Decorative shapes */}
        <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-4 -top-8 h-56 w-56 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-32 left-[35%] h-72 w-72 rounded-full bg-[#2b8c78]/20 blur-3xl" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-[#c6e9d9]">
              <span className="h-2 w-2 rounded-full bg-[#8de0ba]" />
              FOR LOCAL PROFESSIONALS
            </span>

            <h2 className="mt-6 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Your skills deserve
              <br className="hidden sm:block" />
              more opportunities.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#c0d3ca] sm:text-lg">
              Turn your skills into new opportunities. Join My Service Hub
              and help people in your city find the services they need.
            </p>

            <ul className="mt-7 space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.25 + index * 0.12 }}
                  className="flex items-center gap-3 text-sm text-[#e2eee7] sm:text-base"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#c7efdb] text-sm font-bold text-[#173f38]">
                    ✓
                  </span>
                  {benefit}
                </motion.li>
              ))}
            </ul>

            <motion.button
              type="button"
              onClick={onRegister}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#d7f0e1] px-6 py-4 text-sm font-bold text-[#173f38] transition-colors duration-300 hover:bg-white"
            >
              Join as a Provider
              <span aria-hidden="true">↗</span>
            </motion.button>

            <p className="mt-4 text-xs leading-6 text-[#b1c8bc]">
              Start by creating your provider account.
            </p>
          </motion.div>

          {/* Right side: Decorative illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="rounded-[2rem] border border-white/15 bg-white/[0.07] p-5 backdrop-blur-sm sm:p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#b8d0c3]">Your next chapter</p>
                  <h3 className="mt-1 text-xl font-bold text-white">
                    Built around your skills
                  </h3>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d7f0e1] text-2xl">
                  🧰
                </div>
              </div>

              <div className="mt-7 space-y-3">
                {[
                  { icon: '🔧', label: 'Plumbing', status: 'Your expertise' },
                  { icon: '⚡', label: 'Electrical work', status: 'Your expertise' },
                  { icon: '🪚', label: 'Carpentry', status: 'Your expertise' },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    animate={{ x: [0, index % 2 === 0 ? 3 : -3, 0] }}
                    transition={{
                      duration: 4 + index,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.08] p-4"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-xl">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {item.label}
                      </p>
                      <p className="mt-1 text-xs text-[#b8d0c3]">
                        {item.status}
                      </p>
                    </div>
                    <span className="ml-auto text-[#a8e3c4]">✓</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl bg-[#d7f0e1] p-4">
                <p className="text-sm font-bold text-[#173f38]">
                  Every skill has value.
                </p>
                <p className="mt-1 text-xs leading-5 text-[#416a5b]">
                  Take the first step towards reaching local customers.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
