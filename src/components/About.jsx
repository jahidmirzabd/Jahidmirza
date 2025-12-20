'use client';

import { motion } from 'framer-motion';
import { Code2, Layout, Database, Server, Star } from 'lucide-react';

const skills = [
  {
    name: 'Frontend',
    icon: <Layout size={20} />,
    tools: 'React, Next.js, Tailwind',
  },
  { name: 'Backend', icon: <Server size={20} />, tools: 'Laravel, MySQL, PHP' },
  {
    name: 'Architecture',
    icon: <Database size={20} />,
    tools: 'MVC, API Design',
  },
  { name: 'Clean Code', icon: <Code2 size={20} />, tools: 'TypeScript, SOLID' },
];

export default function About() {
  const name = 'Jahid Mirza';

  return (
    <section id="about" className="overflow-hidden bg-white">
      {/* --- Scrolling Background Header --- */}
      <div className="relative w-full overflow-hidden border-t border-zinc-100">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            duration: 15, // Slightly slower for a more premium feel
            ease: 'linear',
          }}
          className="flex gap-8 flex-nowrap uppercase whitespace-nowrap text-8xl md:text-[10rem] font-black text-zinc-900/3 select-none"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="flex items-center gap-8">
              <span>{name}</span>
              <Star className="size-[0.5em] fill-current" />
            </span>
          ))}
        </motion.div>
      </div>

      {/* --- About Content --- */}
      <div className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Left Side: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <h2 className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase mb-4">
                About Me
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-zinc-900 leading-tight mb-8 uppercase italic">
                Solving problems with <br /> clean code & logic.
              </h3>

              <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
                <p>
                  I am a passionate{' '}
                  <span className="text-zinc-900 font-semibold">
                    Web Developer
                  </span>{' '}
                  with a deep appreciation for organized architecture. My
                  workflow is inspired by the structured nature of{' '}
                  <span className="text-blue-600 font-medium">Laravel</span>{' '}
                  combined with the speed and fluidity of{' '}
                  <span className="text-blue-600 font-medium">React</span>.
                </p>
                <p>
                  Whether it&apos;s vibe coding a beautiful interface with
                  Tailwind CSS or building a robust backend API, I strive for
                  accuracy and performance in every line of code.
                </p>
              </div>

              {/* Stats Row */}
              <div className="flex gap-12 mt-12 border-l-2 border-blue-600 pl-8">
                <div>
                  <h4 className="text-3xl font-black text-zinc-900">3+</h4>
                  <p className="text-sm text-zinc-500 uppercase tracking-widest font-bold">
                    Years Exp.
                  </p>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-zinc-900">50+</h4>
                  <p className="text-sm text-zinc-500 uppercase tracking-widest font-bold">
                    Projects
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Skills Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {skills.map(skill => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-zinc-50 border border-zinc-100 rounded-2xl hover:bg-white hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600 shadow-sm mb-4 border border-zinc-100">
                    {skill.icon}
                  </div>
                  <h4 className="text-lg font-bold text-zinc-900 mb-1">
                    {skill.name}
                  </h4>
                  <p className="text-sm text-zinc-500 leading-snug">
                    {skill.tools}
                  </p>
                </motion.div>
              ))}

              {/* Decorative Element / Current Focus */}
              <div className="sm:col-span-2 p-8 bg-zinc-900 rounded-3xl mt-4 relative overflow-hidden group">
                <div className="relative z-10">
                  <h4 className="text-white font-bold text-xl mb-2 italic">
                    Current Focus
                  </h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Perfecting full-stack integrations between Next.js 15 and
                    Laravel 12, focusing on real-time data and server-side
                    performance.
                  </p>
                </div>
                {/* Subtle blue glow in the dark box */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-[80px] group-hover:bg-blue-600/40 transition-all"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
