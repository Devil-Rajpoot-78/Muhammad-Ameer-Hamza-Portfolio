import { create } from 'zustand';
import { Project, ProjectCategory } from '@types/index';
import { projects } from '@data/projects';

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
  
  setCategory: (category: ProjectCategory) => {
    set({ selectedCategory: category });
    set({ filteredProjects: get().getFilteredProjects() });
  },
  
  setSearchQuery: (query: string) => {
    set({ searchQuery: query });
    set({ filteredProjects: get().getFilteredProjects() });
  },
  
  getFilteredProjects: () => {
    const { selectedCategory, searchQuery, projects } = get();
    
    return projects.filter(project => {
      const matchesCategory = selectedCategory === 'all' || project.category.includes(selectedCategory);
      const matchesSearch = searchQuery === '' || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        project.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  },
}));
