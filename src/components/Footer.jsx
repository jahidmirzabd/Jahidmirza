'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, ArrowUp, Facebook } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-zinc-100 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link href="/" className="px-2 shrink-0">
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
            <p className="text-zinc-500 max-w-sm leading-relaxed font-medium">
              Building high-performance web applications with a focus on clean
              architecture and exceptional user experiences using Laravel and
              Next.js.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6">
              Navigation
            </h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-wider">
              <li>
                <Link
                  href="#home"
                  className="text-zinc-600 hover:text-blue-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-zinc-600 hover:text-blue-600 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-zinc-600 hover:text-blue-600 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="text-zinc-600 hover:text-blue-600 transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-zinc-600 hover:text-blue-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/jahidmirzabd"
                target="_blank"
                className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all"
              >
                <Github size={18} />
              </a>
              <a
                href="https://bd.linkedin.com/in/jahidmirzabd"
                className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.facebook.com/Jahidmirxaa"
                className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-zinc-400 text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Jahid Mirza. All Rights Reserved.
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-900 hover:text-blue-600 transition-colors cursor-pointer"
          >
            Back to top
            <span className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center group-hover:border-blue-600 transition-colors">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
