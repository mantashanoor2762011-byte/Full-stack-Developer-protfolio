'use client';

import { ArrowRightIcon, SparklesIcon, CodeIcon, HeartIcon, GlobeIcon } from './Icons';
import { cn } from '@/lib/utils';

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background Effects */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-yellow-400/5" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#374151_1px,transparent_1px),linear-gradient(to_bottom,#374151_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-amber-500/15 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-yellow-400/15 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        {/* Border glow */}
        <div className="absolute inset-0 border-2 border-amber-500/20 rounded-3xl pointer-events-none" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Decorative top element */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in-up">
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
          <div className="flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full">
            <SparklesIcon size={16} className="text-amber-400" />
            <span className="text-amber-300 text-sm font-medium">Let's Collaborate</span>
            <SparklesIcon size={16} className="text-amber-400" />
          </div>
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        </div>

        {/* Main Heading */}
        <h2
          id="cta-heading"
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 animate-fade-in-up delay-100 leading-tight"
        >
          Let{'s '}
          <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
            Build Something Amazing
          </span>
          <br />
          <span className="text-zinc-300 font-normal">Together!</span>
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
          I'm actively looking for opportunities to learn, contribute, collaborate, and grow as a
          developer. Whether it's an internship, a learning opportunity, or a project to collaborate
          on — I'm eager to apply my skills and continue building real-world applications.
        </p>

        {/* Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 animate-fade-in-up delay-300">
          <div className="p-4 bg-zinc-900/50 backdrop-blur-xl border border-zinc-700/50 rounded-xl">
            <CodeIcon size={24} className="text-amber-400 mx-auto mb-2" />
            <p className="text-sm text-zinc-300 font-medium">Code Collaboration</p>
          </div>
          <div className="p-4 bg-zinc-900/50 backdrop-blur-xl border border-zinc-700/50 rounded-xl">
            <HeartIcon size={24} className="text-amber-400 mx-auto mb-2" />
            <p className="text-sm text-zinc-300 font-medium">Open to Learn</p>
          </div>
          <div className="p-4 bg-zinc-900/50 backdrop-blur-xl border border-zinc-700/50 rounded-xl">
            <GlobeIcon size={24} className="text-amber-400 mx-auto mb-2" />
            <p className="text-sm text-zinc-300 font-medium">Remote Friendly</p>
          </div>
          <div className="p-4 bg-zinc-900/50 backdrop-blur-xl border border-zinc-700/50 rounded-xl">
            <SparklesIcon size={24} className="text-amber-400 mx-auto mb-2" />
            <p className="text-sm text-zinc-300 font-medium">Growth Mindset</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-400">
          <a
            href="#contact"
            className="group flex items-center gap-2 px-8 py-4 text-base font-semibold text-black bg-amber-300 hover:bg-amber-400 rounded-full transition-all duration-300 shadow-xl shadow-amber-300/30 hover:shadow-amber-400/40"
          >
            Let's Talk
            <ArrowRightIcon size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#projects"
            className="group flex items-center gap-2 px-8 py-4 text-base font-semibold text-amber-300 bg-transparent border-2 border-amber-500/30 hover:border-amber-400 hover:bg-amber-500/10 rounded-full transition-all duration-300"
          >
            View My Work
            <ArrowRightIcon size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Bottom note */}
        <p className="mt-8 text-zinc-500 text-sm animate-fade-in-up delay-500">
          Currently available for internships, junior positions, and collaboration opportunities
        </p>
      </div>
    </section>
  );
}