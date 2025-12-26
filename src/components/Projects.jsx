'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

// Define your projects data here so it's available to the component
const projects = [
  {
    title: 'Advanced E-Commerce Suite',
    description:
      'A full-scale online retail platform built with Next.js 15 and Laravel 12. Features a robust cart system, secure payments, and an automated inventory engine.',
    tech: ['Next.js', 'Laravel', 'MySQL', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop', // E-commerce themed
    demo: 'https://huss25.com',
    github: 'https://github.com/jahidmirzabd',
  },
  {
    title: 'Headless CMS Engine',
    description:
      'A powerful Content Management System with a decoupled architecture. Built with a Laravel backend API and a dynamic React-based admin dashboard.',
    tech: ['React', 'Laravel API', 'Sanity', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1000&auto=format&fit=crop', // CMS/Dashboard themed
    demo: 'https://tnr-global.com',
    github: 'https://github.com/jahidmirzabd',
  },
  {
    title: 'SaaS Task Management',
    description:
      'Multi-tenant project management tool allowing teams to collaborate in real-time. Features Kanban boards, file sharing, and automated reports.',
    tech: ['Next.js', 'Laravel Echo', 'Pusher', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop', // SaaS/Code themed
    demo: 'https://glidecart.co.uk',
    github: 'https://github.com/jahidmirzabd',
  },
  {
    title: 'Real-time Analytics Dashboard',
    description:
      'A high-performance dashboard for social media tracking. Processes large datasets with Laravel and visualizes them using React and Recharts.',
    tech: ['React', 'Laravel', 'Redis', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop', // Analytics themed
    demo: 'https://rechocleaning.co.uk',
    github: 'https://github.com/jahidmirzabd',
  },
];


export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-sm font-bold tracking-[0.3em] text-blue-600 uppercase mb-2">
              Featured Work
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-zinc-900 uppercase italic">
              Selected Projects
            </h3>
          </div>
          <p className="text-zinc-500 max-w-sm text-sm font-medium">
            Focused on building robust backends with Laravel and fluid
            interfaces with React.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col bg-zinc-50 rounded-3xl overflow-hidden border border-zinc-100 hover:border-blue-200 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-75 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay Tech Stack */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-zinc-800 rounded-full border border-white/20 shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col grow">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-black text-zinc-900 uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h4>
                  <ArrowUpRight
                    className="text-zinc-300 group-hover:text-blue-600 transition-all"
                    size={24}
                  />
                </div>

                <p className="text-zinc-600 mb-8 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Footer Buttons */}
                <div className="mt-auto flex items-center gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    className="flex-1 bg-zinc-900 text-white text-center py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-600 transition-all active:scale-95"
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="p-3 bg-white border border-zinc-200 text-zinc-600 rounded-xl hover:text-black hover:border-black transition-all"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More CTA - Linked to your GitHub */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/jahidmirzabd"
            target="_blank"
            className="group inline-block text-zinc-400 font-bold uppercase tracking-widest text-xs hover:text-zinc-900 transition-colors"
          >
            View All Repositories{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
