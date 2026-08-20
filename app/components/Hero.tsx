'use client';

import { socialLinks } from '@/lib/data';
import {
  ArrowRightIcon,
  DownloadIcon,
  CodeIcon,
  SparklesIcon,
} from './Icons';
import { getSocialIcon } from './Icons';
import { cn } from '@/lib/utils';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      aria-labelledby="hero-heading"
    >
      {/* Background Effects */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-yellow-400/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl animate-pulse-slow delay-2000" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#374151_1px,transparent_1px),linear-gradient(to_bottom,#374151_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />

        {/* Floating code elements */}
        <div className="absolute top-20 left-10 text-amber-400/20 text-2xl animate-float-slow">&#60;/&#62;</div>
        <div className="absolute top-40 right-20 text-amber-400/15 text-3xl animate-float-slow delay-500">const</div>
        <div className="absolute bottom-30 left-20 text-yellow-400/15 text-2xl animate-float-slow delay-1000">function</div>
        <div className="absolute bottom-20 right-10 text-amber-400/20 text-2xl animate-float-slow delay-1500">return</div>
      </div>

      {/* Developer Visual - Center illustration */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Animated Code Window */}
        <div className="relative mb-12 w-full max-w-2xl">
          <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-amber-500/20 shadow-2xl shadow-black/50 overflow-hidden animate-slide-up">
            {/* Window header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-700 bg-zinc-800/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="ml-4 px-3 py-1 text-xs text-zinc-400 bg-zinc-700 rounded font-mono">
                portfolio.ts
              </div>
            </div>

            {/* Code content */}
            <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
              <pre className="text-zinc-300">
{`const developer = {
  name: "Mantasha Noor",
  role: "Full Stack Developer (Intern)",
  education: "BS Information Technology",
  location: "Pakistan",
  status: "Learning & Building",
  skills: [
    "HTML", "CSS", "JavaScript",
    "React", "Next.js", "Tailwind",
    "Node.js", "Express", "MongoDB"
  ],
  currentFocus: "Building real projects",
  mindset: "Continuous improvement"
};

console.log("Welcome to my portfolio!");`}
              </pre>
            </div>
          </div>

          {/* Floating particles around the window */}
          <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-amber-400/30 rounded-full animate-spin-slow" />
          <div className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-yellow-400/30 rounded-full animate-spin-slow reverse" />
          <div className="absolute top-1/2 -right-8 w-2 h-2 bg-amber-400/50 rounded-full animate-pulse" />
          <div className="absolute top-1/4 -left-8 w-1 h-1 bg-yellow-400/50 rounded-full animate-pulse delay-500" />
        </div>

        {/* Hero Content */}
        <div className="text-center max-w-4xl px-4 animate-fade-in-up">
          {/* Greeting */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-300 text-sm font-medium animate-fade-in-up delay-200">
            <SparklesIcon size={16} />
            <span>Full Stack Developer Intern</span>
          </div>

          {/* Main Heading */}
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-in-up delay-300"
          >
            Hi, I{'m '}
            <span className="text-amber-300">Mantasha Noor</span>
          </h1>

          {/* Sub Heading */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-zinc-300 font-medium mb-8 animate-fade-in-up delay-400">
            Full Stack Developer <span className="text-amber-400">(Intern)</span>
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-500">
            I{'m'} currently learning and improving my full-stack development skills
            through hands-on projects. Building responsive web applications with modern
            technologies while growing as a developer every day.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up delay-600">
            <button
              onClick={() => scrollToSection('#projects')}
              className="group flex items-center gap-2 px-8 py-4 text-base font-semibold text-black bg-amber-300 hover:bg-amber-400 rounded-full transition-all duration-300 shadow-xl shadow-amber-300/30 hover:shadow-amber-400/40"
            >
              View My Work
              <ArrowRightIcon size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              className="group flex items-center gap-2 px-8 py-4 text-base font-semibold text-amber-300 bg-transparent border-2 border-amber-500/30 hover:border-amber-400 hover:bg-amber-500/10 rounded-full transition-all duration-300"
            >
              <DownloadIcon size={20} />
              Download CV
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 animate-fade-in-up delay-700" role="list" aria-label="Social links">
            {socialLinks.map((social) => {
              const Icon = getSocialIcon(social.name);
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-800/50 border border-zinc-700 hover:border-amber-500/50 hover:bg-amber-500/10 transition-all duration-300"
                  aria-label={social.ariaLabel}
                >
                  <Icon size={22} className="text-zinc-400 group-hover:text-amber-300 transition-colors" />
                </a>
              );
            })}
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow" aria-hidden="true">
            <div className="w-6 h-10 border-2 border-zinc-600 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}