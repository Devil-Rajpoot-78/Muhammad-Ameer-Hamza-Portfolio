import { Link } from 'react-router-dom';
import { HeroScene3D } from '@components/three';

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <HeroScene3D autoRotate={true} />
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            MUHAMMAD AMEER HAMZA
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in-delay">
            Creative Technologist building at the intersection of 3D, software, engineering, robotics and AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="px-8 py-3 bg-white text-black font-bold rounded hover:bg-gray-200 transition transform hover:scale-105"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 bg-gray-900 text-white font-bold rounded border border-gray-700 hover:border-white transition transform hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Preview cards */}
          <Link to="/projects" className="group">
            <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition cursor-pointer h-full">
              <div className="aspect-video bg-gradient-to-br from-purple-600 to-black flex items-center justify-center text-3xl text-gray-400">
                3D Lab
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-gray-300 transition">3D Visualization</h3>
                <p className="text-gray-400 text-sm">Explore interactive 3D models and visualizations</p>
              </div>
            </div>
          </Link>
          <Link to="/projects" className="group">
            <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition cursor-pointer h-full">
              <div className="aspect-video bg-gradient-to-br from-blue-600 to-black flex items-center justify-center text-3xl text-gray-400">
                Code
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-gray-300 transition">Software Projects</h3>
                <p className="text-gray-400 text-sm">Web, mobile, and systems programming</p>
              </div>
            </div>
          </Link>
          <Link to="/projects" className="group">
            <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition cursor-pointer h-full">
              <div className="aspect-video bg-gradient-to-br from-cyan-600 to-black flex items-center justify-center text-3xl text-gray-400">
                Hardware
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-gray-300 transition">Robotics & IoT</h3>
                <p className="text-gray-400 text-sm">Embedded systems and autonomous systems</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 border-y border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="font-bold text-lg mb-2">3D & Design</h3>
              <p className="text-gray-400 text-sm">Blender, modeling, animation, rendering</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💻</div>
              <h3 className="font-bold text-lg mb-2">Software</h3>
              <p className="text-gray-400 text-sm">Web, mobile, backend development</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🤖</div>
              <h3 className="font-bold text-lg mb-2">Robotics</h3>
              <p className="text-gray-400 text-sm">Embedded systems, IoT, automation</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎮</div>
              <h3 className="font-bold text-lg mb-2">Interactive</h3>
              <p className="text-gray-400 text-sm">WebGL, Three.js, game development</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Create Something Amazing?</h2>
          <p className="text-gray-400 mb-8 text-lg">
            Whether you need 3D visualization, software development, robotics expertise, or a unique hybrid solution, let's talk.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded hover:bg-gray-200 transition transform hover:scale-105 text-lg"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  );
};
