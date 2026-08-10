export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20 pb-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8">About Me</h1>
        
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            I'm Muhammad Ameer Hamza, a creative technologist passionate about building innovative solutions at the intersection of 3D visualization, software development, robotics, and AI.
          </p>
          
          <p>
            My journey spans across multiple disciplines:
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 my-8">
            <h3 className="text-white font-bold text-xl mb-4">3D & Visualization</h3>
            <p>
              Expertise in Blender, hard-surface modeling, photorealistic rendering, and procedural generation. I create stunning visual experiences that bring ideas to life.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 my-8">
            <h3 className="text-white font-bold text-xl mb-4">Software Development</h3>
            <p>
              Full-stack development with React, TypeScript, and modern web technologies. From interactive web experiences with Three.js and WebGL to native Android applications and game development.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 my-8">
            <h3 className="text-white font-bold text-xl mb-4">Robotics & Embedded Systems</h3>
            <p>
              Hands-on experience with ESP32, Arduino, sensor integration, and autonomous systems. I design and build intelligent machines that solve real-world problems.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 my-8">
            <h3 className="text-white font-bold text-xl mb-4">Interactive & Creative Tech</h3>
            <p>
              Combining cutting-edge technology with creative expression. Whether it's shader art, procedural generation, AR experiences, or AI-assisted workflows, I explore the frontiers of what's possible.
            </p>
          </div>

          <p>
            I believe in continuous learning and pushing boundaries. My portfolio reflects diverse projects ranging from award-winning visualizations to experimental prototypes that challenge conventional thinking.
          </p>

          <p>
            When I'm not working on projects, you'll find me exploring new technologies, contributing to open-source projects, or experimenting with the latest tools and frameworks.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
          <div className="space-y-3">
            <p className="text-gray-400">
              📧 Email: <a href="mailto:hamza207205@gmail.com" className="text-white hover:text-gray-300 transition">hamza207205@gmail.com</a>
            </p>
            <p className="text-gray-400">
              💬 WhatsApp: <a href="https://wa.me/923298753659" className="text-white hover:text-gray-300 transition">+923298753659</a>
            </p>
            <p className="text-gray-400">
              🔗 GitHub: <a href="https://github.com/Devil-Rajpoot-78" className="text-white hover:text-gray-300 transition">Devil-Rajpoot-78</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
