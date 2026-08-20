'use client';

import { services } from '@/lib/data';
import { getServiceIcon } from './Icons';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = getServiceIcon(service.title);
  const delay = (index % 4) * 100;

  return (
    <div
      className={cn(
        'group relative p-6 bg-zinc-900/50 backdrop-blur-xl border border-zinc-700/50 hover:border-amber-500/30 rounded-2xl transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1 animate-fade-in-up',
        `delay-${delay}`
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 space-y-4">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 group-hover:bg-amber-500/20 group-hover:border-amber-500/40 group-hover:text-amber-300 transition-all duration-300">
          <Icon size={28} />
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-white group-hover:text-amber-300 transition-colors">
          {service.title}
        </h3>
        <p className="text-zinc-400 leading-relaxed">
          {service.description}
        </p>

        {/* Arrow indicator */}
        <div className="inline-flex items-center gap-1 text-amber-400 text-sm font-medium opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
          <span>Learn more</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 lg:py-1 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Background Effects */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-yellow-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-300 text-sm font-medium">
            <span>What I Can Build</span>
          </div>
          <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            What I Can Build
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            As a developer intern, I'm continuously expanding what I can create.
            These are the types of projects I'm currently working on and learning to build.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Learning Note */}
        <div className="mt-16 p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-2xl animate-fade-in-up delay-300">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Always Learning</h4>
              <p className="text-zinc-400">
                I'm actively learning backend development, database design, and advanced
                frontend patterns. The services above represent what I can currently build
                and what I'm working toward mastering through hands-on projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}