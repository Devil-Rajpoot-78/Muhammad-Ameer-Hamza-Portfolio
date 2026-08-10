// Core profile types
export interface Profile {
  name: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  whatsapp: string;
  github: string;
  location?: string;
  avatar?: string;
}

// Project types
export type ProjectStatus = 'completed' | 'in-progress' | 'prototype' | 'concept' | 'experiment' | 'open-source' | 'academic';
export type ProjectCategory = 'all' | '3d' | 'blender' | 'animation' | 'automotive' | 'product-viz' | 'game-dev' | 'software' | 'android' | 'web' | 'robotics' | 'engineering' | 'ai' | 'experiments';

export interface ProjectImage {
  url: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory[];
  year: number;
  status: ProjectStatus;
  shortDescription: string;
  fullDescription?: string;
  technologies: string[];
  skills: string[];
  featured: boolean;
  images: ProjectImage[];
  video?: string;
  model3d?: string;
  githubUrl?: string;
  demoUrl?: string;
  caseStudy?: string;
  credits?: string;
  license?: string;
}

// Experience types
export interface Experience {
  id: string;
  title: string;
  organization: string;
  startDate: string;
  endDate?: string;
  description: string;
  skills: string[];
  type: 'education' | 'work' | 'project';
}

// Skill types
export interface Skill {
  name: string;
  category: string;
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget?: string;
  deadline?: string;
  message: string;
}

export type ProjectType = 'modeling' | 'animation' | 'product-viz' | 'automotive-viz' | 'interactive-3d' | 'game-dev' | 'software' | 'android' | 'web' | 'robotics' | 'engineering-viz' | 'ai-creative' | 'other';