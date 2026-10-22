
import { motion } from 'motion/react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'How it works', href: '#how-it-works' },
];

export default function Navbar({ onLogin, onRegister }) {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-[#e9e9e1]/80 bg-[#faf9f6]/90 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <a href="#home" className="group flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#176b60] text-xl font-bold text-white shadow-sm transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-105">
            M
          </span>
          <span className="text-lg font-bold tracking-tight text-[#203b35] sm:text-xl">
            My Service <span className="text-[#168477]">Hub</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 + index * 0.1, duration: 0.4 }}
              className="group relative py-2 text-sm font-medium text-[#66746d] transition-colors duration-200 hover:text-[#176b60]"
            >
              {link.label}
              <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 rounded-full bg-[#168477] transition-transform duration-300 group-hover:scale-x-100" />
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onLogin}
            className="hidden rounded-full px-4 py-2.5 text-sm font-semibold text-[#31534a] transition-colors duration-200 hover:bg-[#e9f1eb] sm:inline-flex"
          >
            Log in
          </button>

          <motion.button
            type="button"
            onClick={onRegister}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-[#176b60] px-5 py-3 text-sm font-semibold text-white shadow-[0_5px_16px_rgba(23,107,96,0.16)] transition-colors duration-300 hover:bg-[#10584e] sm:px-6"
          >
            Get started <span className="ml-1" aria-hidden="true">↗</span>
          </motion.button>
        </div>
      </nav>
    </motion.header>
  );
}
