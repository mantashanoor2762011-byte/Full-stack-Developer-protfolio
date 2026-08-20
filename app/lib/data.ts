import { SocialLink, Skill, Project, Service, NavItem, FooterSection } from './types';

export const categoryColors = {
  frontend: 'from-amber-400 to-yellow-300',
  backend: 'from-orange-400 to-amber-300',
  tools: 'from-yellow-400 to-amber-200',
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: './About' },
  { label: 'Skills', href: './skills' },
  { label: 'Projects', href: './projects' },
  { label: 'Services', href: './services' },
  { label: 'Contact', href: './contact' },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/mantashanoor2762011-byte',
    icon: 'github',
    ariaLabel: 'Visit my GitHub profile',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: 'linkedin',
    ariaLabel: 'Connect on LinkedIn',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com',
    icon: 'instagram',
    ariaLabel: 'Follow on Instagram',
  },
  {
    name: 'Email',
    url: 'mantashanoor2762011@gmail.com',
    icon: 'email',
    ariaLabel: 'Send me an email',
  },
];

export const skills: Skill[] = [
  { name: 'HTML', icon: 'html', proficiency: 85, category: 'frontend' },
  { name: 'CSS', icon: 'css', proficiency: 80, category: 'frontend' },
  { name: 'JavaScript', icon: 'javascript', proficiency: 75, category: 'frontend' },
  { name: 'React', icon: 'react', proficiency: 70, category: 'frontend' },
  { name: 'Next.js', icon: 'nextjs', proficiency: 65, category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'tailwind', proficiency: 75, category: 'frontend' },
  { name: 'Node.js', icon: 'nodejs', proficiency: 60, category: 'backend' },
  { name: 'Express.js', icon: 'express', proficiency: 55, category: 'backend' },
  { name: 'MongoDB', icon: 'mongodb', proficiency: 50, category: 'backend' },
  { name: 'Git & GitHub', icon: 'git', proficiency: 80, category: 'tools' },
];

export const projects: Project[] = [
  {
    id: 'noor-e-qalam',
    name: 'Noor-e-Qalam',
    type: 'Calligraphy Website',
    technology: 'Next.js / React / CSS',
    description: 'A personal calligraphy website created to showcase calligraphy work and creative content.',
    image: '/images/calligraphy-web.png',
    githubUrl: 'https://github.com',
    liveUrl: 'https://calligraphy-website-dgp1wzwob-mantasha-noor.vercel.app/',
  },
  {
    id: 'salt-n-pepper',
    name: "Salt'n Pepper Website",
    type: 'Restaurant Website',
    technology: 'javascript / Vite / CSS',
    description: 'A restaurant website project created as a frontend development project.',
    image: '/images/2java.png',
    githubUrl: 'https://github.com',
    liveUrl: 'https://mantasha-salt-79wegid5s-mantasha-noor.vercel.app/',
  },
  {
    id: 'luxury-jewelry',
    name: 'Luxury Jewelry Website',
    type: 'E-commerce / Product Website',
    technology: 'React / Vite / CSS',
    description: 'A luxury jewelry website project created to practice responsive UI design and frontend development.',
    image: '/images/react1.png',
    githubUrl: 'https://github.com',
    liveUrl: 'https://react-jewerelly-ldmk7g1yv-mantasha-noor.vercel.app/',
  },
    
];

export const services: Service[] = [
  {
    title: 'Frontend Development',
    description: 'I can build modern, responsive user interfaces using React, Next.js, and modern CSS techniques.',
    icon: 'frontend',
  },
  {
    title: 'Responsive Websites',
    description: 'I work with mobile-first design principles to create websites that look great on all devices.',
    icon: 'responsive',
  },
  {
    title: 'React Development',
    description: 'I am learning to build component-based applications with React hooks, context, and modern patterns.',
    icon: 'react',
  },
  {
    title: 'Next.js Development',
    description: 'I can build full-stack applications using Next.js App Router, server components, and API routes.',
    icon: 'nextjs',
  },
  {
    title: 'Backend Learning / Development',
    description: 'I am learning backend development with Node.js, Express.js, and RESTful API design.',
    icon: 'backend',
  },
  {
    title: 'MongoDB Database Projects',
    description: 'I work with MongoDB for database design, queries, and integration with backend services.',
    icon: 'database',
  },
  {
    title: 'UI Implementation',
    description: 'I can implement pixel-perfect designs from Figma/design systems into production-ready code.',
    icon: 'ui',
  },
];

export const stats = [
  { label: 'Projects Built', value: '3+' },
  { label: 'Technologies Learning', value: '10+' },
  { label: 'Continuous Learning', value: 'Daily' },
  { label: 'Developer Intern', value: 'Current' },
];

export const footerSections: FooterSection[] = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: './About/page.tsx' },
      { label: 'Skills', href: './skills/page.tsx' },
      { label: 'Projects', href: './projects/page.tsx' },
      { label: 'Contact', href: './contact/page.tsx' },
    ],
  },
  {
    title: 'Skills',
    links: [
      { label: 'HTML & CSS', href: '#skills' },
      { label: 'JavaScript & React', href: '#skills' },
      { label: 'Next.js & Node.js', href: '#skills' },
      { label: 'MongoDB & Express', href: '#skills' },
      { label: 'Tailwind & Git', href: '#skills' },
    ],
  },
  {
    title: 'Projects',
    links: [
      { label: 'Noor-e-Qalam', href: '#projects' },
      { label: "Salt'n Pepper", href: '#projects' },
      { label: 'Luxury Jewelry', href: '#projects' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'GitHub', href: 'https://github.com/mantashanoor2762011-byte' },
      { label: 'LinkedIn', href: 'https://linkedin.com' },
      { label: 'Email', href: 'mantashanoor2762011@gmail.com' },
    ],
  },
];