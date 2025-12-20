'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Ensure lucide-react is installed
import { motion } from 'framer-motion';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
      <nav className="container mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo Left */}
        <div>
          <Link href="/" className="shrink-0">
            <div className="relative w-50 h-7.5 -left-2.5">
              <Image
                src="/logo.png"
                alt="Jahid Mirza Logo"
                fill
                className="object-cover transition-opacity duration-300 hover:opacity-80"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Menu Right */}
        <div className="flex items-center gap-10">
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map(link => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-[11px] font-black uppercase tracking-[0.25em] text-zinc-500 hover:text-blue-600 transition-all"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-zinc-900 transition-transform active:scale-90"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-zinc-100 absolute w-full left-0 shadow-2xl"
        >
          <ul className="flex flex-col p-8 gap-6">
            {navLinks.map(link => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-xl font-black uppercase tracking-widest text-zinc-900"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
}
