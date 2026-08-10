# Muhammad Ameer Hamza - Portfolio

An interactive, modern portfolio website showcasing projects across 3D visualization, software development, robotics, and AI.

## 🚀 Features

- **Interactive 3D Scenes**: Built with Three.js and React Three Fiber
- **Modern Web Stack**: React 18, TypeScript, Tailwind CSS, Vite
- **Responsive Design**: Mobile-first approach with full responsiveness
- **Project Showcase**: 20+ diverse projects with filtering and search
- **Contact Forms**: Email and WhatsApp integration
- **Performance Optimized**: Code splitting, lazy loading, optimized images
- **Accessibility**: WCAG compliant with reduced motion support

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Zustand** - State management
- **Framer Motion** - Animations

### 3D & Graphics
- **Three.js** - 3D library
- **React Three Fiber** - React renderer for Three.js
- **Drei** - Three.js helpers
- **WebGL** - Graphics rendering

## 📦 Project Structure

```
src/
├── components/          # React components
│   ├── Layout.tsx
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── projects/        # Project-related components
│   └── three/          # 3D components
├── pages/              # Page components
│   ├── HomePage.tsx
│   ├── ProjectsPage.tsx
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   └── PlaygroundPage.tsx
├── hooks/              # Custom React hooks
│   ├── useProjectStore.ts
│   ├── useReducedMotion.ts
│   ├── useWindowSize.ts
│   └── useClickOutside.ts
├── utils/              # Utility functions
│   ├── helpers.ts
│   └── contact.ts
├── data/               # Static data
│   ├── projects.ts
│   ├── skills.ts
│   └── experience.ts
├── types/              # TypeScript types
└── App.tsx            # Main App component
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Devil-Rajpoot-78/Muhammad-Ameer-Hamza-Portfolio.git

# Navigate to the project
cd Muhammad-Ameer-Hamza-Portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

## 📋 Pages

- **Home** (`/`) - Hero section with featured projects
- **Projects** (`/projects`) - Full project gallery with filtering and search
- **About** (`/about`) - Personal background and expertise
- **Contact** (`/contact`) - Contact form with email and WhatsApp options
- **Playground** (`/playground`) - Experimental demos and projects

## 🎨 Customization

### Adding Projects

Edit `src/data/projects.ts` to add new projects:

```typescript
{
  id: 'unique-id',
  title: 'Project Title',
  slug: 'project-slug',
  category: ['3d', 'animation'],
  year: 2024,
  status: 'completed',
  shortDescription: '...',
  fullDescription: '...',
  technologies: ['Technology1', 'Technology2'],
  skills: ['Skill1', 'Skill2'],
  featured: true,
  images: [{url: '/path/to/image', alt: 'Description'}],
}
```

### Adding Skills

Edit `src/data/skills.ts` to update skills and proficiency levels.

## 📊 Performance

- **Lighthouse Score**: Optimized for performance, accessibility, and SEO
- **Code Splitting**: Automatic with Vite
- **Lazy Loading**: Images and components loaded on demand
- **Bundle Size**: ~150KB gzipped (main bundle)

## 🌐 Deployment

The site can be deployed to various platforms:

- **Vercel**: Connect GitHub repo, auto-deploys on push
- **Netlify**: Drop `dist/` folder or connect GitHub
- **GitHub Pages**: Use GitHub Actions for CI/CD

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🔒 Privacy & Security

- No tracking or analytics
- Contact forms use native browser APIs (mailto, WhatsApp)
- No backend required

## 📄 License

This project is open source and available under the MIT License.

## 💬 Contact

- **Email**: hamza207205@gmail.com
- **WhatsApp**: +923298753659
- **GitHub**: [@Devil-Rajpoot-78](https://github.com/Devil-Rajpoot-78)

## 🙏 Acknowledgments

- Three.js community for amazing 3D library
- React ecosystem for modern UI patterns
- Tailwind CSS for utility-first styling
- Vite for blazing fast builds

---

**Built with ❤️ by Muhammad Ameer Hamza**
