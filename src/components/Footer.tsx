export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold mb-4">Muhammad Ameer Hamza</h3>
            <p className="text-gray-400 text-sm">
              Creative Technologist building at the intersection of 3D, software, engineering, robotics and AI.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/projects" className="text-gray-400 hover:text-white transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-bold mb-4">Connect</h3>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">
                <a href="https://github.com/Devil-Rajpoot-78" className="hover:text-white transition">
                  GitHub
                </a>
              </p>
              <p className="text-gray-400">
                <a href="mailto:hamza207205@gmail.com" className="hover:text-white transition">
                  Email
                </a>
              </p>
              <p className="text-gray-400">
                <a href="https://wa.me/923298753659" className="hover:text-white transition">
                  WhatsApp
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>
            Copyright © {currentYear} Muhammad Ameer Hamza. All rights reserved.
          </p>
          <p className="mt-2">
            Built with React, Three.js, and TypeScript.
          </p>
        </div>
      </div>
    </footer>
  );
};
