import { Project } from '../types';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link to={`/projects/${project.slug}`}>
      <div className="group relative overflow-hidden rounded-lg bg-gray-900 border border-gray-800 hover:border-gray-700 transition cursor-pointer h-full">
        <div className="relative overflow-hidden bg-black h-48 sm:h-56">
          {project.images[0] ? (
            <img src={project.images[0].url} alt={project.images[0].alt} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
              <div className="text-gray-600 text-center"><div className="text-4xl mb-2">◉</div><p className="text-xs">No Image</p></div>
            </div>
          )}
        </div>
        <div className="p-4 sm:p-6">
          <div className="flex justify-between items-start gap-2 mb-2">
            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-gray-300 transition line-clamp-2">{project.title}</h3>
            <span className="text-xs text-gray-500 whitespace-nowrap">{project.year}</span>
          </div>
          <div className="mb-3">
            <span className={`inline-block px-2 py-1 text-xs font-semibold rounded uppercase ${project.status === 'completed' ? 'bg-green-900/30 text-green-300' : project.status === 'in-progress' ? 'bg-blue-900/30 text-blue-300' : project.status === 'prototype' ? 'bg-yellow-900/30 text-yellow-300' : project.status === 'experiment' ? 'bg-purple-900/30 text-purple-300' : project.status === 'academic' ? 'bg-cyan-900/30 text-cyan-300' : 'bg-gray-900/30 text-gray-300'}`}>
              {project.status}
            </span>
          </div>
          <p className="text-sm text-gray-400 mb-4 line-clamp-2">{project.shortDescription}</p>
          <div className="flex flex-wrap gap-1 mb-4">
            {project.category.slice(0, 3).map((cat) => <span key={cat} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">{cat}</span>)}
            {project.category.length > 3 && <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">+{project.category.length - 3}</span>}
          </div>
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 3).map((tech) => <span key={tech} className="text-xs text-gray-500 bg-gray-950 px-2 py-1 rounded">{tech}</span>)}
            {project.technologies.length > 3 && <span className="text-xs text-gray-500 bg-gray-950 px-2 py-1 rounded">+{project.technologies.length - 3}</span>}
          </div>
        </div>
      </div>
    </Link>
  );
};
