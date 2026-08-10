import { ContactFormData, generateContactMailto, generateWhatsAppMessage } from '@utils/index';
import { useState } from 'react';

export const ContactPage = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    projectType: 'modeling',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (method: 'email' | 'whatsapp') => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    if (method === 'email') {
      window.location.href = generateContactMailto(formData);
    } else if (method === 'whatsapp') {
      window.open(generateWhatsAppMessage(formData), '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20 pb-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8">Get in Touch</h1>
        <p className="text-gray-400 text-lg mb-12">
          Have a project in mind? Let's discuss how I can help bring your ideas to life.
        </p>

        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-white transition"
              placeholder="Your name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-white transition"
              placeholder="your@email.com"
              required
            />
          </div>

          {/* Company */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Company
            </label>
            <input
              type="text"
              name="company"
              value={formData.company || ''}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-white transition"
              placeholder="Your company (optional)"
            />
          </div>

          {/* Project Type */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Project Type
            </label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-white transition"
            >
              <option value="modeling">3D Modeling & Visualization</option>
              <option value="animation">3D Animation</option>
              <option value="product-viz">Product Visualization</option>
              <option value="interactive-3d">Interactive 3D Web</option>
              <option value="game-dev">Game Development</option>
              <option value="software">Software Development</option>
              <option value="android">Android App</option>
              <option value="web">Web Development</option>
              <option value="robotics">Robotics & IoT</option>
              <option value="engineering-viz">Engineering Visualization</option>
              <option value="ai-creative">AI-Assisted Creative</option>
              <option value="other">Other / Hybrid</option>
            </select>
          </div>

          {/* Budget */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Budget Range (optional)
            </label>
            <input
              type="text"
              name="budget"
              value={formData.budget || ''}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-white transition"
              placeholder="e.g., $5,000 - $10,000"
            />
          </div>

          {/* Deadline */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Timeline (optional)
            </label>
            <input
              type="text"
              name="deadline"
              value={formData.deadline || ''}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-white transition"
              placeholder="e.g., 3 months"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Project Details *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-white transition resize-none"
              placeholder="Tell me about your project, goals, and any specific requirements..."
              required
            />
          </div>

          {/* Submit Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="button"
              onClick={() => handleSubmit('email')}
              className="flex-1 px-6 py-3 bg-white text-black font-bold rounded hover:bg-gray-200 transition transform hover:scale-105"
            >
              Send via Email
            </button>
            <button
              type="button"
              onClick={() => handleSubmit('whatsapp')}
              className="flex-1 px-6 py-3 bg-green-600 text-white font-bold rounded hover:bg-green-700 transition transform hover:scale-105"
            >
              Send via WhatsApp
            </button>
          </div>
        </form>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <h2 className="text-2xl font-bold mb-6">Other Ways to Reach Me</h2>
          <div className="space-y-4">
            <p className="text-gray-400">
              📧 <a href="mailto:hamza207205@gmail.com" className="text-white hover:text-gray-300 transition">hamza207205@gmail.com</a>
            </p>
            <p className="text-gray-400">
              📱 <a href="https://wa.me/923298753659" className="text-white hover:text-gray-300 transition">+923298753659 (WhatsApp)</a>
            </p>
            <p className="text-gray-400">
              🔗 <a href="https://github.com/Devil-Rajpoot-78" className="text-white hover:text-gray-300 transition">GitHub: Devil-Rajpoot-78</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
