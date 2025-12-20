'use client';

import { motion } from 'framer-motion';
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiVercel,
} from 'react-icons/si'; // npm install react-icons

const techStack = [
  {
    name: 'React',
    icon: <SiReact className="text-[#61DAFB]" />,
    level: 'Advanced',
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs className="text-black" />,
    level: 'Advanced',
  },
  {
    name: 'Tailwind',
    icon: <SiTailwindcss className="text-[#06B6D4]" />,
    level: 'Expert',
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript className="text-[#3178C6]" />,
    level: 'Intermediate',
  },
  {
    name: 'Laravel',
    icon: <SiLaravel className="text-[#FF2D20]" />,
    level: 'Expert',
  },
  {
    name: 'PHP',
    icon: <SiPhp className="text-[#777BB4]" />,
    level: 'Advanced',
  },
  {
    name: 'MySQL',
    icon: <SiMysql className="text-[#4479A1]" />,
    level: 'Advanced',
  },
  {
    name: 'Vercel',
    icon: <SiVercel className="text-black" />,
    level: 'Deployment',
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-[#F8F9FA] border-y border-zinc-100"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] text-blue-600 uppercase mb-2">
            Technical Stack
          </h2>
          <h3 className="text-4xl font-black text-zinc-900 uppercase italic">
            Powering your vision with modern tech.
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, backgroundColor: '#ffffff' }}
              className="group relative p-8 rounded-3xl border border-zinc-200/50 bg-white/50 backdrop-blur-sm flex flex-col items-center justify-center transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-200"
            >
              <div className="text-5xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:rotate-12">
                {tech.icon}
              </div>
              <h4 className="text-lg font-bold text-zinc-900">{tech.name}</h4>
              <p className="text-xs font-medium text-zinc-400 uppercase tracking-widest mt-1">
                {tech.level}
              </p>

              {/* Subtle accent corner */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-zinc-200 group-hover:bg-blue-500 transition-colors"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom "Expertise" bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 p-8 rounded-3xl bg-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-zinc-900 bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
                API
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-zinc-900 bg-zinc-700 flex items-center justify-center text-white text-xs font-bold">
                UI
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-zinc-900 bg-zinc-500 flex items-center justify-center text-white text-xs font-bold">
                DB
              </div>
            </div>
            <p className="text-zinc-400 text-sm font-medium">
              Full-stack Proficiency from Database to Interface.
            </p>
          </div>
          <motion.a 
            href="https://github.com/jahidmirzabd" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block cursor-pointer" // cursor-pointer added here
          >
            <span className="text-white border border-zinc-700 px-6 py-2 rounded-full text-sm font-bold hover:bg-white hover:text-black transition-all inline-block">
              Explore My GitHub
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}