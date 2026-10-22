
import { motion } from 'motion/react';

const services = [
  {
    icon: '🔧',
    title: 'Plumbing',
    description: 'Fix leaks, repair taps and handle everyday plumbing needs.',
    color: 'bg-[#e5f1e9]',
  },
  {
    icon: '⚡',
    title: 'Electrical Work',
    description: 'Find help with wiring, lights and electrical repairs.',
    color: 'bg-[#fff0d9]',
  },
  {
    icon: '🧹',
    title: 'Home Cleaning',
    description: 'Keep your home neat, fresh and comfortable.',
    color: 'bg-[#eceafb]',
  },
  {
    icon: '🎨',
    title: 'Painting',
    description: 'Refresh your walls with painting and finishing services.',
    color: 'bg-[#f9e8e4]',
  },
  {
    icon: '🪚',
    title: 'Carpentry',
    description: 'Get help with furniture repairs, doors and fittings.',
    color: 'bg-[#f3e9dc]',
  },
  {
    icon: '❄️',
    title: 'Appliance Repair',
    description: 'Get assistance with common household appliance issues.',
    color: 'bg-[#e2f0f5]',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex rounded-full bg-[#eaf3ed] px-4 py-2 text-sm font-semibold text-[#176b60]">
            WHAT YOU NEED, ALL IN ONE PLACE
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#203b35] sm:text-4xl lg:text-5xl">
            Services for your
            <span className="text-[#168477]"> everyday life.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-[#758078] sm:text-lg">
            From small fixes to home improvements, discover services that
            make everyday tasks a little easier.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.09,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -7 }}
              className="group rounded-3xl border border-[#eceee8] bg-[#fdfdfa] p-6 transition-shadow duration-300 hover:border-[#d9e9df] hover:shadow-[0_18px_45px_rgba(35,76,61,0.09)] sm:p-7"
            >
              <div className="flex items-start justify-between">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl text-3xl transition-transform duration-300 group-hover:rotate-[-5deg] group-hover:scale-110 ${service.color}`}
                >
                  {service.icon}
                </div>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e8ece5] text-xl text-[#688077] transition-all duration-300 group-hover:border-[#176b60] group-hover:bg-[#176b60] group-hover:text-white">
                  ↗
                </span>
              </div>

              <h3 className="mt-7 text-xl font-bold text-[#29443b]">
                {service.title}
              </h3>

              <p className="mt-3 min-h-[3.5rem] text-sm leading-7 text-[#758078] sm:text-base">
                {service.description}
              </p>

              <div className="mt-6 h-px w-full bg-[#e9ece5]" />

              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#176b60]">
                Explore service
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 text-center text-sm text-[#758078]"
        >
          More local services can be added as the platform grows.
        </motion.p>
      </div>
    </section>
  );
}
