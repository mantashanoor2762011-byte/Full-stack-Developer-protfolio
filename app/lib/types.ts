export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

export interface Skill {
  name: string;
  icon: string;
  proficiency: number; // 0-100, represents learning level
  category: 'frontend' | 'backend' | 'tools';
}

export interface Project {
  id: string;
  name: string;
  type: string;
  technology: string;
  description: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}