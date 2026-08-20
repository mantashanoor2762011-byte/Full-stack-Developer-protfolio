'use client';

import { footerSections, socialLinks } from '@/lib/data';
import { GithubIcon, LinkedinIcon, InstagramIcon, EmailIcon, ArrowRightIcon, SparklesIcon, CodeIcon } from './Icons';
import { getSocialIcon } from './Icons';
import { cn } from '@/lib/utils';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      role="contentinfo"
    >
      {/* Background Effects */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-yellow-400/5 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 animate-fade-in-up">
            <div className="space-y-6">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-300 flex items-center justify-center">
                  <CodeIcon size={20} className="text-black" />
                </div>
                <span className="text-xl font-bold text-white">Mantasha Noor</span>
              </div>

              {/* Tagline */}
              <p className="text-zinc-400 max-w-xs">
                Full Stack Developer Intern — BS Information Technology student
                from Pakistan. Currently learning and building real projects to
                grow as a developer.
              </p>

              {/* Social Links */}
              <div className="flex gap-3 pt-2" role="list" aria-label="Social links">
                {socialLinks.map((social) => {
                  const Icon = getSocialIcon(social.name);
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-800/50 border border-zinc-700 hover:border-amber-500/50 hover:bg-amber-500/10 transition-all duration-300"
                      aria-label={social.ariaLabel}
                    >
                      <Icon size={20} className="text-zinc-400 group-hover:text-amber-300 transition-colors" />
                    </a>
                  );
                })}
              </div>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-sm font-medium text-amber-300">Open to Opportunities</span>
              </div>
            </div>
          </div>

          {/* Footer Links Columns */}
          {footerSections.map((section) => (
            <div key={section.title} className="animate-fade-in-up delay-100">
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3" role="list">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-zinc-400 hover:text-amber-300 transition-colors text-sm"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="relative mb-8 animate-fade-in-up delay-200">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 animate-fade-in-up delay-300">
          {/* Copyright */}
          <p className="text-zinc-500 text-sm">
            &copy; {currentYear} Mantasha Noor. All rights reserved.
          </p>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-zinc-500 text-sm">
            <SparklesIcon size={14} className="text-amber-400" />
            <span>Built with Next.js, React & Tailwind CSS</span>
            <CodeIcon size={14} className="text-amber-400" />
          </div>

          {/* Back to Top */}
          <a
            href="#home"
            className="group flex items-center gap-1 px-4 py-2 text-sm font-medium text-zinc-400 hover:text-amber-300 bg-zinc-800/50 border border-zinc-700 hover:border-amber-500/50 rounded-lg transition-all duration-300"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
}