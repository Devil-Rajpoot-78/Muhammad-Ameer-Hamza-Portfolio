export const PlaygroundPage = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8">Playground</h1>
        <p className="text-gray-400 text-lg mb-12">
          Experimental projects, demos, and interactive experiences. This section showcases cutting-edge technology and creative explorations.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">🎨 Shader Art</h3>
            <p className="text-gray-400 mb-4">Interactive shader-based generative art using GLSL and WebGL.</p>
            <button className="px-4 py-2 bg-white text-black font-bold rounded hover:bg-gray-200 transition">
              View Demos
            </button>
          </div>
          
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">⚙️ Physics Simulation</h3>
            <p className="text-gray-400 mb-4">Real-time 3D physics simulations with Cannon-es and Three.js.</p>
            <button className="px-4 py-2 bg-white text-black font-bold rounded hover:bg-gray-200 transition">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
