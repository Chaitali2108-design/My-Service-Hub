
import { motion } from 'motion/react';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'How it works', href: '#how-it-works' },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="border-t border-[#e8e9e1] bg-[#faf9f6] px-5 py-8 sm:px-8 lg:px-12"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <a href="#home" className="group flex w-fit items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#176b60] text-lg font-bold text-white transition-transform duration-300 group-hover:rotate-[-6deg]">
            M
          </span>
          <span className="text-lg font-bold tracking-tight text-[#203b35]">
            My Service <span className="text-[#168477]">Hub</span>
          </span>
        </a>

        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap gap-x-6 gap-y-3"
        >
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#758078] transition-colors duration-200 hover:text-[#176b60]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-sm text-[#89928b]">
          © {new Date().getFullYear()} My Service Hub
        </p>
      </div>

      <div className="mx-auto mt-7 max-w-7xl border-t border-[#e8e9e1] pt-5">
        <p className="text-center text-xs leading-6 text-[#89928b]">
          Connecting people with local services, one task at a time.
        </p>
      </div>
    </motion.footer>
  );
}
