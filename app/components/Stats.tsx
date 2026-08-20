'use client';

import { stats } from '@/lib/data';
import { CodeIcon, SparklesIcon, HeartIcon, GlobeIcon } from './Icons';
import { cn } from '@/lib/utils';

interface StatCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  delay?: number;
}

function StatCard({ label, value, icon, delay = 0 }: StatCardProps) {
  return (
    <div
      className={cn(
        'relative p-6 sm:p-8 text-center bg-zinc-900/50 backdrop-blur-xl border border-zinc-700/50 hover:border-amber-500/30 rounded-2xl transition-all duration-500 animate-fade-in-up',
        `delay-${delay}`
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 mb-4">
          {icon}
        </div>
        <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
          {value}
        </div>
        <p className="text-zinc-400 text-sm font-medium uppercase tracking-wider">{label}</p>
      </div>
    </div>
  );
}

export default function Stats() {
  const statIcons = [CodeIcon, SparklesIcon, HeartIcon, GlobeIcon];

  return (
    <section
      id="stats"
      className="relative py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-labelledby="stats-heading"
    >
      {/* Background Effects */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-yellow-400/5 rounded-full blur-3xl" />
        {/* Decorative lines */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-300 text-sm font-medium">
            <SparklesIcon size={16} />
            <span>My Journey</span>
          </div>
          <h2 id="stats-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Learning Progress
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Honest metrics representing my current development journey as an intern
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {stats.map((stat, index) => {
            const Icon = statIcons[index % statIcons.length];
            return (
              <StatCard
                key={stat.label}
                label={stat.label}
                value={stat.value}
                icon={<Icon size={32} />}
                delay={index * 100}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}