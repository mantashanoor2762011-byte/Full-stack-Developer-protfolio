'use client';

import { forwardRef, SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const createIcon = (content: React.ReactNode) =>
  forwardRef<SVGSVGElement, IconProps>(({ size = 24, className, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {content}
    </svg>
  ));

export const GithubIcon = createIcon((
  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
));

export const LinkedinIcon = createIcon((
  <>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </>
));

export const InstagramIcon = createIcon((
  <>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </>
));

export const EmailIcon = createIcon((
  <>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </>
));

export const SunIcon = createIcon((
  <>
    <circle cx="12" cy="12" r="5" />
    <line x1="12" x2="12" y1="1" y2="3" />
    <line x1="12" x2="12" y1="21" y2="23" />
    <line x1="4.22" x2="5.64" y1="4.22" y2="5.64" />
    <line x1="18.36" x2="19.78" y1="18.36" y2="19.78" />
    <line x1="1" x2="3" y1="12" y2="12" />
    <line x1="21" x2="23" y1="12" y2="12" />
    <line x1="4.22" x2="5.64" y1="19.78" y2="18.36" />
    <line x1="18.36" x2="19.78" y1="5.64" y2="4.22" />
  </>
));

export const MoonIcon = createIcon((
  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
));

export const MenuIcon = createIcon((
  <>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </>
));

export const XIcon = createIcon((
  <>
    <line x1="18" x2="6" y1="6" y2="18" />
    <line x1="6" x2="18" y1="6" y2="18" />
  </>
));

export const ArrowRightIcon = createIcon((
  <>
    <line x1="5" x2="19" y1="12" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </>
));

export const DownloadIcon = createIcon((
  <>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </>
));

export const CodeIcon = createIcon((
  <>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </>
));

export const GlobeIcon = createIcon((
  <>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" x2="22" y1="12" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </>
));

export const CheckIcon = createIcon((
  <polyline points="20 6 9 17 4 12" />
));

export const StarIcon = createIcon((
  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
));

export const HeartIcon = createIcon((
  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
));

export const SparklesIcon = createIcon((
  <>
    <path d="M12 3v1m0 16v1m9-9h-1m-16 0h-1m15.07-13.07l-.7.7m-10.61 10.61l-.7.7m14.14 0l.7.7M5.65 17.35l.7.7" />
  </>
));

// Skill icons
export const HtmlIcon = createIcon((
  <>
    <path d="M22 4L12 20 2 4h20z" />
    <path d="M6 12h12" />
    <path d="M12 6v12" />
  </>
));

export const CssIcon = createIcon((
  <>
    <path d="M22 4L12 20 2 4h20z" />
    <path d="M6 12h12" />
    <path d="M12 6v12" />
  </>
));

export const JavascriptIcon = createIcon((
  <>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M10 17H8a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2z" />
    <path d="M16 17h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2z" />
  </>
));

export const ReactIcon = createIcon((
  <>
    <path d="M12 2a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1z" />
    <path d="M22 12a1 1 0 0 1-1 1h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1z" />
    <path d="M12 20a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1z" />
    <path d="M2 12a1 1 0 0 1 1-1h3a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1z" />
    <path d="M4.93 4.93a1 1 0 0 1 1.41 0l1.06 1.06a1 1 0 0 1 0 1.41l-1.06 1.06a1 1 0 0 1-1.41 0l-1.06-1.06a1 1 0 0 1 0-1.41l1.06-1.06z" />
    <path d="M17.66 17.66a1 1 0 0 1 0 1.41l-1.06 1.06a1 1 0 0 1-1.41 0l-1.06-1.06a1 1 0 0 1 0-1.41l1.06-1.06a1 1 0 0 1 1.41 0z" />
    <path d="M4.93 19.07a1 1 0 0 1 0-1.41l1.06-1.06a1 1 0 0 1 1.41 0l1.06 1.06a1 1 0 0 1 0 1.41l-1.06 1.06a1 1 0 0 1-1.41 0z" />
    <path d="M17.66 6.34a1 1 0 0 1 1.41 0l1.06 1.06a1 1 0 0 1 0 1.41l-1.06 1.06a1 1 0 0 1-1.41 0l-1.06-1.06a1 1 0 0 1 0-1.41z" />
  </>
));

export const NextjsIcon = createIcon((
  <>
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </>
));

export const TailwindIcon = createIcon((
  <>
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </>
));

export const NodejsIcon = createIcon((
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v8M8 12h8" />
  </>
));

export const ExpressIcon = createIcon((
  <>
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </>
));

export const MongodbIcon = createIcon((
  <>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M12 6v12" />
    <path d="M6 12h12" />
  </>
));

export const GitIcon = createIcon((
  <>
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <path d="M13 6h-2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
    <path d="M18 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2" />
  </>
));

// Service icons
export const FrontendIcon = createIcon((
  <>
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <path d="M8 21h8" />
    <path d="M12 17v4" />
  </>
));

export const ResponsiveIcon = createIcon((
  <>
    <rect x="5" y="2" width="7" height="16" rx="1" />
    <rect x="16" y="6" width="5" height="12" rx="1" />
    <line x1="2" x2="4" y1="12" y2="12" />
  </>
));

export const BackendIcon = createIcon((
  <>
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8" />
    <path d="M12 17v4" />
  </>
));

export const DatabaseIcon = createIcon((
  <>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 5.33 3 12 3s12-1.34 12-3V5" />
    <path d="M3 12c0 1.66 5.33 3 12 3s12-1.34 12-3" />
  </>
));

export const UIIcon = createIcon((
  <>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </>
));

// Category colors for skills
export const categoryColors = {
  frontend: 'from-amber-400 to-yellow-300',
  backend: 'from-orange-400 to-amber-300',
  tools: 'from-yellow-400 to-amber-200',
};

export function getSkillIcon(name: string) {
  const icons: Record<string, React.FC<IconProps>> = {
    HTML: HtmlIcon,
    CSS: CssIcon,
    JavaScript: JavascriptIcon,
    React: ReactIcon,
    'Next.js': NextjsIcon,
    'Tailwind CSS': TailwindIcon,
    'Node.js': NodejsIcon,
    'Express.js': ExpressIcon,
    MongoDB: MongodbIcon,
    'Git & GitHub': GitIcon,
  };
  return icons[name] || CodeIcon;
}

export function getServiceIcon(name: string) {
  const icons: Record<string, React.FC<IconProps>> = {
    'Frontend Development': FrontendIcon,
    'Responsive Websites': ResponsiveIcon,
    'React Development': ReactIcon,
    'Next.js Development': NextjsIcon,
    'Backend Learning / Development': BackendIcon,
    'MongoDB Database Projects': DatabaseIcon,
    'UI Implementation': UIIcon,
  };
  return icons[name] || CodeIcon;
}

export function getSocialIcon(name: string) {
  const icons: Record<string, React.FC<IconProps>> = {
    GitHub: GithubIcon,
    LinkedIn: LinkedinIcon,
    Instagram: InstagramIcon,
    Email: EmailIcon,
  };
  return icons[name] || GlobeIcon;
}