'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Download, Github, Linkedin, Facebook } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-white bg-grid flex items-center overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <p className="text-zinc-500 text-lg mb-2 font-medium">
            Hello! I&apos;m
          </p>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] text-zinc-900 uppercase">
            Jahid
            <br />
            Mirza
          </h1>

          <p className="mt-8 text-zinc-600 max-w-md text-lg leading-relaxed">
            Dedicated to crafting exceptional digital experiences through
            <span className="text-blue-600 font-semibold">
              {' '}
              (Full-Stack Web Development)
            </span>
            , turning your ideas into lasting online success using React and
            Laravel.
          </p>

          {/* Action Buttons & Socials */}
          <div className="mt-10 flex flex-wrap items-center gap-6">
            {/* Resume Button */}
            <motion.a
              href="/resume.pdf" // Ensure your resume is in the public folder
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0052CC] hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium flex items-center gap-2 transition-all shadow-lg shadow-blue-200 cursor-pointer"
            >
              Resume <Download size={18} />
            </motion.a>

            {/* Social Icons */}
            <div className="flex gap-5 text-zinc-400 items-center">
              <motion.a
                href="https://github.com/jahidmirzabd"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: '#000000' }}
                className="cursor-pointer transition-colors"
              >
                <Github size={24} />
              </motion.a>

              <motion.a
                href="https://bd.linkedin.com/in/jahidmirzabd" // Update with your link
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: '#0077B5' }}
                className="cursor-pointer transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>

              <motion.a
                href="https://www.facebook.com/Jahidmirxaa" // Update with your link
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: '#1877F2' }}
                className="cursor-pointer transition-colors"
              >
                <Facebook size={24} />
              </motion.a>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-10 flex items-center gap-8 border-t border-zinc-100 pt-5">
            <div className="flex items-center gap-2 font-bold text-zinc-800">
              <span className="text-xl">4.8</span>
              <span className="text-sm font-normal text-zinc-500 uppercase tracking-widest italic">
                Rating
              </span>
            </div>
            <div className="w-px h-6 bg-zinc-200"></div>
            <div className="text-zinc-800 font-bold text-xl">
              19.5H{' '}
              <span className="text-sm font-normal text-zinc-500 italic">
                Exp.
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative h-125 lg:h-187.5 w-full self-end flex justify-end"
        >
          {/* Bottom Fade Gradient to match the image in your screenshot */}
          <div className="absolute inset-0 z-10 bg-linear-to-t from-white via-transparent to-transparent"></div>

          <div className="relative h-125 lg:h-187.5 w-full self-end flex justify-end overflow-hidden rounded-lg">
            <Image
              src="/hero/jahid-profile.png" // Ensure this is a transparent PNG in your /public folder
              alt="Jahid Mirza"
              fill
              priority
              className="object-contain object-center select-none"
              style={{
                maskImage:
                  'linear-gradient(to bottom, black 80%, transparent 100%)',
                WebkitMaskImage:
                  'linear-gradient(to bottom, black 80%, transparent 100%)',
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
