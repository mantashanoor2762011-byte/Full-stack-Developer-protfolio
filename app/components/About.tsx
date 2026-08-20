'use client';

import { CodeIcon, GlobeIcon, HeartIcon, SparklesIcon } from '../components/Icons';
import { cn } from '@/lib/utils';

interface InfoCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  delay?: number;
}

function InfoCard({ icon, label, value, delay = 0 }: InfoCardProps) {
  return (
    <div
      className={cn(
        'group relative p-6 bg-zinc-900/50 backdrop-blur-xl border border-zinc-700/50 hover:border-amber-500/30 rounded-2xl transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/10 animate-fade-in-up',
        delay > 0 && `delay-${delay}`
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 mb-4 group-hover:bg-amber-500/20 group-hover:border-amber-500/40 transition-all duration-300">
          {icon}
        </div>
        <p className="text-zinc-400 text-sm font-medium uppercase tracking-wider mb-1">{label}</p>
        <p className="text-white text-xl font-semibold">{value}</p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background Effects */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-yellow-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-300 text-sm font-medium">
            <SparklesIcon size={16} />
            <span>About Me</span>
          </div>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Get to Know Me
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            A passionate developer learning and building real projects every day
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* About Text */}
          <div className="animate-fade-in-up delay-200">
            <div className="space-y-6">
              <p className="text-zinc-300 text-lg leading-relaxed">
                I'm <span className="text-amber-300 font-medium">Mantasha Noor</span>, a BS Information Technology student
                and Full Stack Developer Intern from Pakistan. I'm currently focused on
                learning and improving my full-stack development skills through hands-on
                project experience.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                My journey in development started with curiosity about how websites work,
                and it has grown into a passion for building responsive, user-friendly web
                applications. I believe in learning by doing, which is why I continuously
                work on real projects to strengthen my understanding of modern web technologies.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Currently, I'm expanding my expertise in the full stack — from crafting
                pixel-perfect frontends with React and Next.js to building robust backends
                with Node.js and Express, and managing data with MongoDB. Every project I
                build teaches me something new, and I'm committed to continuous growth as
                a developer.
              </p>

              {/* Highlight tags */}
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-full text-zinc-300 text-sm">
                  <CodeIcon size={14} className="inline mr-1" /> Clean Code
                </span>
                <span className="px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-full text-zinc-300 text-sm">
                  <GlobeIcon size={14} className="inline mr-1" /> Responsive Design
                </span>
                <span className="px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-full text-zinc-300 text-sm">
                  <HeartIcon size={14} className="inline mr-1" /> Continuous Learning
                </span>
                <span className="px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-full text-zinc-300 text-sm">
                  <SparklesIcon size={14} className="inline mr-1" /> Problem Solving
                </span>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in-up delay-300">
            <InfoCard
              icon={<CodeIcon size={24} />}
              label="Education"
              value="BS Information Technology"
              delay={100}
            />
            <InfoCard
              icon={<SparklesIcon size={24} />}
              label="Status"
              value="Full Stack Developer Intern"
              delay={200}
            />
            <InfoCard
              icon={<GlobeIcon size={24} />}
              label="Location"
              value="Pakistan"
              delay={300}
            />
            <InfoCard
              icon={<HeartIcon size={24} />}
              label="Focus"
              value="Learning & Building Projects"
              delay={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}