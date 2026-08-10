import { create } from 'zustand';
import { Project, ProjectCategory } from '../types';
import { projects } from '../data/projects';

interface ProjectStore {
  projects: Project[];
  filteredProjects: Project[];
  selectedCategory: ProjectCategory;
  searchQuery: string;
  setCategory: (category: ProjectCategory) => void;
  setSearchQuery: (query: string) => void;
  getFilteredProjects: () => Project[];
}

export const useProjectStore = create<ProjectStore>((set, get) => ({
  projects,
  filteredProjects: projects,
  selectedCategory: 'all',
  searchQuery: '',
  setCategory: (category) => {
    set({ selectedCategory: category });
    set({ filteredProjects: get().getFilteredProjects() });
  },
  setSearchQuery: (query) => {
    set({ searchQuery: query });
    set({ filteredProjects: get().getFilteredProjects() });
  },
  getFilteredProjects: () => {
    const { selectedCategory, searchQuery, projects } = get();
    const query = searchQuery.toLowerCase();
    return projects.filter((project) => {
      const matchesCategory = selectedCategory === 'all' || project.category.includes(selectedCategory);
      const matchesSearch = query === '' || project.title.toLowerCase().includes(query) || project.shortDescription.toLowerCase().includes(query) || project.technologies.some((t) => t.toLowerCase().includes(query)) || project.skills.some((s) => s.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  },
}));
