'use client';

import { useState } from 'react';
import Image from 'next/image';
import { projects } from '@/lib/data';
import { GithubIcon, GlobeIcon, ArrowRightIcon, CodeIcon, SparklesIcon } from './Icons';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const delay = (index % 3) * 100;

  return (
    <article
      className={cn(
        'group relative bg-zinc-900/50 backdrop-blur-xl border border-zinc-700/50 hover:border-amber-500/30 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 animate-fade-in-up',
        `delay-${delay}`
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900" />
        <Image
          src={project.image}
          alt={`${project.name} project screenshot`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-amber-500/20 hover:border-amber-500/50 text-white transition-all duration-300"
              aria-label={`View ${project.name} on GitHub`}
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-medium transition-all duration-300"
              aria-label={`View ${project.name} live demo`}
            >
              <GlobeIcon size={20} />
            </a>
          </div>
        </div>

        {/* Tech badge */}
        <div className="absolute top-4 left-4 flex gap-2">
          {project.technology.split(' / ').map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-medium text-amber-300 bg-zinc-900/80 backdrop-blur-sm border border-amber-500/30 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6 relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <CodeIcon size={16} className="text-amber-400" />
          <span className="text-sm text-zinc-400">{project.type}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
          {project.name}
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technology.split(' / ').map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-1 text-xs text-zinc-300 bg-zinc-800/50 border border-zinc-700 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 border-t border-zinc-700/50">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-zinc-300 bg-zinc-800/50 border border-zinc-700 hover:border-amber-500/50 hover:text-amber-300 hover:bg-amber-500/10 rounded-lg transition-all duration-300"
          >
            <GithubIcon size={16} />
            Code
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-black bg-amber-300 hover:bg-amber-400 rounded-lg transition-all duration-300"
          >
            <ArrowRightIcon size={16} />
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-labelledby="projects-heading"
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
            <span>My Work</span>
          </div>
          <h2 id="projects-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Real projects I've built while learning full-stack development. Each project
            represents hands-on practice with modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Add More Projects Note */}
        <div className="mt-16 text-center animate-fade-in-up delay-300">
          <p className="text-zinc-500 mb-4">
            More projects coming soon as I continue learning and building...
          </p>
          <a
            href="https://github.com/mantashanoor2762011-byte"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-400 font-medium transition-colors"
          >
            <GithubIcon size={18} />
            View All on GitHub
            <ArrowRightIcon size={18} />
          </a>
          <br />
            <a
            href="https://my-assignments-web-site-lnu247i1g-mantasha-noor.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-400 font-medium transition-colors"
          >
            View More Assignement
            <ArrowRightIcon size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}