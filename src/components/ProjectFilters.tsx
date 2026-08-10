import { useProjectStore } from '@hooks/index';
import { ProjectCategory } from '@types/index';

const categories: { value: ProjectCategory; label: string }[] = [
  { value: 'all', label: 'All Projects' },
  { value: '3d', label: '3D' },
  { value: 'blender', label: 'Blender' },
  { value: 'animation', label: 'Animation' },
  { value: 'automotive', label: 'Automotive' },
  { value: 'product-viz', label: 'Product Viz' },
  { value: 'game-dev', label: 'Game Dev' },
  { value: 'software', label: 'Software' },
  { value: 'android', label: 'Android' },
  { value: 'web', label: 'Web' },
  { value: 'robotics', label: 'Robotics' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'ai', label: 'AI' },
  { value: 'experiments', label: 'Experiments' },
];

export const ProjectFilters = () => {
  const { selectedCategory, setCategory } = useProjectStore();

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => setCategory(cat.value)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            selectedCategory === cat.value
              ? 'bg-white text-black'
              : 'bg-gray-900 text-gray-300 hover:bg-gray-800 hover:text-white border border-gray-700'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};
