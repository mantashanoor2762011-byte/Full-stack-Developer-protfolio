'use client';

import { skills, categoryColors } from '@/lib/data';
import { getSkillIcon } from './Icons';
import { cn, formatProficiency } from '@/lib/utils';

interface SkillCardProps {
  skill: typeof skills[0];
  index: number;
}

function SkillCard({ skill, index }: SkillCardProps) {
  const Icon = getSkillIcon(skill.name);
  const delay = (index % 5) * 100;

  return (
    <div
      className={cn(
        'group relative p-6  bg-zinc-900/50 backdrop-blur-xl border border-zinc-700/50 hover:border-amber-500/30 rounded-2xl transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/10 animate-fade-in-up',
        `delay-${delay}`
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 space-y-4">
        {/* Icon & Name */}
        <div className="flex items-center gap-4">
          <div
            className={cn(
              'flex items-center justify-center w-14 h-14 rounded-xl border-2 transition-all duration-300 group-hover:scale-110',
              categoryColors[skill.category]
            )}
          >
            <Icon size={28} className="text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
            <p className="text-zinc-500 text-sm capitalize">{skill.category}</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-zinc-400">Learning Level</span>
            <span className="text-amber-300 font-semibold">{formatProficiency(skill.proficiency)}</span>
          </div>
          <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
            <div
              className={cn(
                'h-full rounded-full transition-all duration-1000 ease-out',
                categoryColors[skill.category]
              )}
              style={{ width: '0%' }}
              data-width={`${skill.proficiency}%`}
            />
          </div>
        </div>

        {/* Proficiency indicator dots */}
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((level) => (
            <div
              key={level}
              className={cn(
                'w-2 h-2 rounded-full transition-all duration-300',
                level * 20 <= skill.proficiency
                  ? categoryColors[skill.category].replace('from-', 'bg-').replace(' to-', '')
                  : 'bg-zinc-700'
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const frontendSkills = skills.filter((s) => s.category === 'frontend');
  const backendSkills = skills.filter((s) => s.category === 'backend');
  const toolsSkills = skills.filter((s) => s.category === 'tools');

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 lg:py-1 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-labelledby="skills-heading"
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
            <span>Technologies</span>
          </div>
          <h2 id="skills-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Technologies I'm currently learning and working with. Proficiency levels
            represent my current learning progress, not official certifications.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {/* Frontend Skills */}
          <div className="animate-fade-in-up delay-100">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-yellow-300 flex items-center justify-center">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
              </span>
              Frontend Development
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {frontendSkills.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="animate-fade-in-up delay-200">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 to-amber-300 flex items-center justify-center">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v8M8 12h8" />
                </svg>
              </span>
              Backend Learning
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {backendSkills.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} index={i + 10} />
              ))}
            </div>
          </div>

          {/* Tools Skills */}
          <div className="animate-fade-in-up delay-300">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-200 flex items-center justify-center">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="18" cy="18" r="3" />
                  <circle cx="6" cy="6" r="3" />
                  <path d="M13 6h-2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
                  <path d="M18 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2" />
                </svg>
              </span>
              Tools & Version Control
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {toolsSkills.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} index={i + 20} />
              ))}
            </div>
          </div>
        </div>

        {/* Learning Note */}
        <div className="mt-16 p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-2xl animate-fade-in-up delay-400">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Honest Assessment</h4>
              <p className="text-zinc-400">
                These proficiency levels reflect my current learning journey as an intern.
                I'm actively building projects to strengthen each area. The percentages
                represent my comfort level, not years of professional experience or
                official certifications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}