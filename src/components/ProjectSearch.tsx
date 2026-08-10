import { useProjectStore } from '@hooks/index';
import { useState } from 'react';

export const ProjectSearch = () => {
  const { searchQuery, setSearchQuery } = useProjectStore();
  const [input, setInput] = useState(searchQuery);

  const handleChange = (value: string) => {
    setInput(value);
    setSearchQuery(value);
  };

  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search projects by title, technology, or skill..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-white transition"
      />
    </div>
  );
};
