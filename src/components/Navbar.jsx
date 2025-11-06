import { useMemo } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar({ route }) {
  const [open, setOpen] = useState(false);

  const items = useMemo(() => links.map(l => ({ ...l, active: route?.startsWith(l.href.replace('#','')) })), [route]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-white text-lg">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-orange-300">AI Architect</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {items.map(({ href, label, active }) => (
            <a
              key={href}
              href={href}
              className={`hover:text-white/90 transition-colors ${active ? 'text-white' : 'text-white/70'}`}
            >
              {label}
            </a>
          ))}
          <a href="#contact" className="ml-2 inline-flex items-center rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition-colors">
            Let’s Talk
          </a>
        </nav>
        <button onClick={() => setOpen(v => !v)} className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md bg-white/10 hover:bg-white/20">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {links.map(l => (
                <a key={l.href} onClick={() => setOpen(false)} href={l.href} className="text-white/80 hover:text-white">
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-1 inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 text-white px-4 py-2">
                Let’s Talk
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
