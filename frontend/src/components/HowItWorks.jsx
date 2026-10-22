
import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    icon: '🔎',
    title: 'Find your service',
    description:
      'Choose the service you need and discover professionals available in your city.',
  },
  {
    number: '02',
    icon: '📋',
    title: 'Choose a provider',
    description:
      'Explore available service providers and select the one that suits your needs.',
  },
  {
    number: '03',
    icon: '🏡',
    title: 'Get things done',
    description:
      'Connect with your chosen professional and get help with your everyday tasks.',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="overflow-hidden bg-[#f5f6f0] px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32"
          >
            <span className="inline-flex rounded-full border border-[#dce6d9] bg-white/80 px-4 py-2 text-sm font-semibold text-[#176b60]">
              SIMPLE FROM THE START
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-[#203b35] sm:text-4xl lg:text-5xl">
              The help you need,
              <span className="text-[#168477]"> made simple.</span>
            </h2>

            <p className="mt-5 max-w-md text-base leading-8 text-[#718078] sm:text-lg">
              Finding help for everyday tasks shouldn't be complicated.
              My Service Hub brings local services closer to you through
              a simple, easy-to-follow process.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-[#e1e7dc] bg-white px-5 py-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e5f1e9] text-xl">
                📍
              </span>
              <div>
                <p className="font-semibold text-[#29443b]">
                  Focused on your city
                </p>
                <p className="mt-1 text-sm text-[#7b877f]">
                  Discover services closer to home
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right side: Steps */}
          <div className="relative">
            <div className="absolute bottom-16 left-[2.1rem] top-16 hidden w-px bg-[#d5e2d7] sm:block" />

            <div className="space-y-5">
              {steps.map((step, index) => (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, x: 35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative rounded-3xl border border-[#e6e9df] bg-white p-6 shadow-[0_8px_28px_rgba(41,66,54,0.035)] transition-shadow duration-300 hover:shadow-[0_14px_35px_rgba(41,66,54,0.08)] sm:p-7"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#dce9df] bg-[#edf5ef] text-2xl">
                      {step.icon}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-lg font-bold text-[#29443b] sm:text-xl">
                          {step.title}
                        </h3>
                        <span className="text-sm font-bold tracking-widest text-[#9aada1]">
                          {step.number}
                        </span>
                      </div>

                      <p className="mt-3 text-sm leading-7 text-[#758078] sm:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
