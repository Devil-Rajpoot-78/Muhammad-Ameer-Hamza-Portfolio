import { useProjectStore } from '@hooks/index';
import { ProjectCard, ProjectFilters, ProjectSearch } from '@components/projects';

export const ProjectsPage = () => {
  const { filteredProjects } = useProjectStore();

  return (
    <div className="min-h-screen bg-black text-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Projects</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            A showcase of my work across 3D visualization, software development, robotics, and interactive experiences.
          </p>
        </div>

        {/* Search */}
        <ProjectSearch />

        {/* Filters */}
        <ProjectFilters />

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-400">
            Showing <span className="text-white font-bold">{filteredProjects.length}</span> project{filteredProjects.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Project Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg mb-4">No projects found matching your criteria.</p>
            <button
              onClick={() => window.location.href = '/projects'}
              className="text-white hover:text-gray-300 transition"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
