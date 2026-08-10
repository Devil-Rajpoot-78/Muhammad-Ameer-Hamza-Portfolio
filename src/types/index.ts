export type ProjectStatus = 'completed' | 'in-progress' | 'prototype' | 'experiment' | 'academic' | 'archived';

export type ProjectCategory = 
  | 'all'
  | '3d'
  | 'blender'
  | 'animation'
  | 'automotive'
  | 'product-viz'
  | 'game-dev'
  | 'software'
  | 'android'
  | 'web'
  | 'robotics'
  | 'engineering'
  | 'ai'
  | 'experiments';

export type Proficiency = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export type SkillCategory = '3D' | 'Graphics' | 'Web' | 'Animation' | 'Game Dev' | 'Software' | 'Mobile' | 'Robotics' | 'AI' | 'Tools';

export type ExperienceType = 'project' | 'education' | 'work' | 'certification';

export interface ProjectImage {
  url: string;
  alt: string;
}

export interface ProjectLink {
  label: string;
  url: string;
  type: 'github' | 'live' | 'dribbble' | 'behance' | 'youtube' | 'other';
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory[];
  year: number;
  status: ProjectStatus;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  skills: string[];
  featured?: boolean;
  images: ProjectImage[];
  links?: ProjectLink[];
  highlights?: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface Skill {
  name: string;
  category: SkillCategory;
  proficiency: Proficiency;
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  startDate: string;
  endDate?: string;
  description: string;
  skills: string[];
  type: ExperienceType;
  highlights?: string[];
  link?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget?: string;
  deadline?: string;
  message: string;
}
