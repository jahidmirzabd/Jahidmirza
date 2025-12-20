'use client';

import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Facebook,
  ArrowUpRight,
} from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      label: '+880 1775-286 056',
      icon: <Phone size={20} />,
      href: 'tel:+8801775286056',
    },
    {
      label: 'jahidmirzabd@gmail.com',
      icon: <Mail size={20} />,
      href: 'mailto:jahidmirzabd@gmail.com',
    },
  ];

  const socials = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      href: 'https://github.com/jahidmirzabd',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      href: 'https://bd.linkedin.com/in/jahidmirzabd',
    },
    {
      name: 'Facebook',
      icon: <Facebook size={20} />,
      href: 'https://www.facebook.com/Jahidmirxaa',
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-[#F8F9FA] border-t border-zinc-100"
    >
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tighter uppercase mb-4"
          >
            Let&apos;s Talk About <br /> The Next Big Thing
          </motion.h2>
        </div>

        {/* Contact Grid Container */}
        <div className="grid md:grid-cols-2 border border-zinc-200 rounded-3xl overflow-hidden shadow-sm bg-white">
          {/* Left Column: Direct Contact */}
          <div className="flex flex-col">
            {contactInfo.map((info, idx) => (
              <a
                key={idx}
                href={info.href}
                className={`flex items-center justify-center gap-4 py-12 px-8 group transition-colors hover:bg-zinc-50 ${
                  idx === 0 ? 'border-b border-zinc-200' : ''
                }`}
              >
                <span className="text-zinc-900 group-hover:text-blue-600 transition-colors">
                  {info.icon}
                </span>
                <span className="text-xl md:text-2xl font-bold text-zinc-900 tracking-tight">
                  {info.label}
                </span>
              </a>
            ))}
          </div>

          {/* Right Column: Socials */}
          <div className="flex flex-col border-l border-zinc-200 bg-white">
            {socials.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-4 py-8 px-8 group transition-colors hover:bg-zinc-50 ${
                  idx !== socials.length - 1 ? 'border-b border-zinc-200' : ''
                }`}
              >
                <span className="text-zinc-900 group-hover:text-blue-600 transition-colors">
                  {social.icon}
                </span>
                <span className="text-lg md:text-xl font-bold text-zinc-900 tracking-tight">
                  {social.name}
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-zinc-300 opacity-0 group-hover:opacity-100 group-hover:text-blue-600 transition-all -translate-y-1"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
