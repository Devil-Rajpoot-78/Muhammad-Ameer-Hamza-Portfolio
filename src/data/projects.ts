import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'prepeak-datacenter', title: 'PREPEAK Data Center Visualization', slug: 'prepeak-datacenter',
    category: ['3d', 'animation', 'product-viz'], year: 2024, status: 'in-progress',
    shortDescription: 'Interactive 3D visualization and animation of data center infrastructure',
    fullDescription: 'Comprehensive data center architecture visualization showing rack systems, cooling infrastructure, and power distribution with animated workflows.',
    technologies: ['Three.js', 'React Three Fiber', 'Blender', 'WebGL'], skills: ['3D Modeling', '3D Animation', 'Interactive Design', 'WebGL'], featured: true,
    images: [{ url: '/images/projects/prepeak-1.jpg', alt: 'PREPEAK data center visualization', caption: 'Data center infrastructure visualization' }], video: '/videos/projects/prepeak-demo.mp4'
  },
  {
    id: 'glas-1700-ts', title: 'Glas 1700 TS Automotive 3D Model', slug: 'glas-1700-ts',
    category: ['3d', 'blender', 'automotive'], year: 2024, status: 'prototype',
    shortDescription: 'High-fidelity 3D modeling of classic Glas 1700 TS vehicle',
    fullDescription: 'Complete hard-surface modeling and rendering of the Glas 1700 TS automobile, featuring detailed geometry, realistic materials, and professional lighting setups.',
    technologies: ['Blender', 'EEVEE', 'Cycles', 'Substance 3D Painter'], skills: ['Hard-Surface Modeling', 'UV Mapping', 'Material Design', 'Rendering', 'Lighting'], featured: true,
    images: [{ url: '/images/projects/glas-1700-1.jpg', alt: 'Glas 1700 TS 3D model', caption: 'Complete vehicle model with professional rendering' }], model3d: '/models/glas-1700-ts.glb'
  },
  {
    id: 'line-following-robot', title: 'Line Following Robot System', slug: 'line-following-robot', category: ['robotics', 'engineering'], year: 2023, status: 'completed',
    shortDescription: 'Autonomous line-following robot with PID control and sensor fusion', fullDescription: 'Embedded robotics project featuring ESP32 microcontroller, IR sensors, motor control, and PID algorithm for autonomous navigation.',
    technologies: ['ESP32', 'Arduino', 'C++', 'PID Control', 'Electronics'], skills: ['Embedded Systems', 'Sensor Integration', 'Motor Control', 'PID Tuning', 'Circuit Design'], featured: true,
    images: [{ url: '/images/projects/robot-1.jpg', alt: 'Line following robot prototype', caption: 'Assembled robot on test track' }]
  },
  {
    id: 'maze-solver-robot', title: 'Maze Solving Robot', slug: 'maze-solver-robot', category: ['robotics', 'engineering'], year: 2023, status: 'completed',
    shortDescription: 'Autonomous maze navigation with pathfinding algorithm', fullDescription: 'Robot equipped with ultrasonic sensors and autonomous pathfinding capable of solving complex mazes.',
    technologies: ['Arduino', 'C++', 'Ultrasonic Sensors', 'Motor Control'], skills: ['Robotics', 'Algorithm Design', 'Embedded C++', 'Sensor Programming'],
    images: [{ url: '/images/projects/maze-robot-1.jpg', alt: 'Maze solving robot', caption: 'Robot navigating maze structure' }]
  },
  {
    id: 'android-inventory-app', title: 'Inventory Management Android App', slug: 'android-inventory-app', category: ['android', 'software'], year: 2024, status: 'completed',
    shortDescription: 'Full-featured inventory tracking application for Android', fullDescription: 'Native Android application with SQLite database, real-time inventory tracking, barcode scanning, and offline support.',
    technologies: ['Android Studio', 'Java', 'SQLite', 'Firebase'], skills: ['Android Development', 'Database Design', 'UI/UX', 'Mobile Architecture'], featured: true,
    images: [{ url: '/images/projects/inventory-app-1.jpg', alt: 'Inventory app screenshots', caption: 'Mobile app interface' }], githubUrl: 'https://github.com/Devil-Rajpoot-78/inventory-app'
  },
  {
    id: 'signal-processing-matlab', title: 'Signal Processing Analysis Tools', slug: 'signal-processing-matlab', category: ['software', 'engineering'], year: 2023, status: 'academic',
    shortDescription: 'MATLAB toolkit for digital signal processing and analysis', fullDescription: 'Academic project featuring frequency domain analysis, filter design, and signal visualization tools built in MATLAB.',
    technologies: ['MATLAB', 'Signal Processing Toolbox', 'Simulink'], skills: ['Signal Processing', 'MATLAB', 'DSP Algorithms', 'Data Analysis'],
    images: [{ url: '/images/projects/signal-processing-1.jpg', alt: 'Signal processing visualization', caption: 'Frequency spectrum analysis' }]
  },
  {
    id: 'blender-character-rigging', title: 'Character Rigging & Animation Study', slug: 'blender-character-rigging', category: ['blender', 'animation', '3d'], year: 2024, status: 'experiment',
    shortDescription: 'Advanced character rigging and animation workflows', fullDescription: 'Exploration of advanced rigging techniques including bone systems, weight painting, IK/FK setups, and character animation.',
    technologies: ['Blender', 'Grease Pencil', 'Python Scripting'], skills: ['Character Rigging', 'Animation', 'Blender Scripting', 'Motion Capture'],
    images: [{ url: '/images/projects/rigging-1.jpg', alt: 'Rigged character model', caption: 'Character in T-pose with armature' }]
  },
  {
    id: 'procedural-environment', title: 'Procedural Environment Generation', slug: 'procedural-environment', category: ['3d', 'game-dev', 'experiments'], year: 2024, status: 'experiment',
    shortDescription: 'Algorithmic generation of game environments using Blender geometry nodes', fullDescription: 'Procedural systems for creating scalable, randomized environments with node-based workflows.',
    technologies: ['Blender', 'Geometry Nodes', 'GLSL', 'Python'], skills: ['Procedural Modeling', 'Geometry Nodes', 'Shader Programming', 'Optimization'], featured: true,
    images: [{ url: '/images/projects/procedural-env-1.jpg', alt: 'Generated environment', caption: 'Procedurally generated landscape' }], video: '/videos/projects/procedural-env.mp4'
  },
  {
    id: 'game-prototype-unity', title: 'Unity Game Prototype: Mechanical Puzzle', slug: 'game-prototype-unity', category: ['game-dev', 'software'], year: 2024, status: 'prototype',
    shortDescription: 'Puzzle game prototype with physics-based mechanics', fullDescription: 'First-person puzzle game featuring rotating mechanical platforms, physics interactions, and environmental storytelling.',
    technologies: ['Unity', 'C#', 'Physics Engine', 'Shader Graph'], skills: ['Game Development', 'C# Programming', 'Level Design', 'Physics', 'UI/UX'], featured: true,
    images: [{ url: '/images/projects/game-proto-1.jpg', alt: 'Game screenshot', caption: 'Gameplay environment' }], githubUrl: 'https://github.com/Devil-Rajpoot-78/mechanical-puzzle-game'
  },
  {
    id: 'web-portfolio-v1', title: 'Previous Web Portfolio', slug: 'web-portfolio-v1', category: ['web', 'software'], year: 2023, status: 'completed',
    shortDescription: 'Interactive portfolio website built with modern web technologies', fullDescription: 'Responsive portfolio showcasing projects with animated transitions and SEO optimization.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'], skills: ['Web Development', 'React', 'UI Design', 'Performance Optimization'],
    images: [{ url: '/images/projects/portfolio-v1-1.jpg', alt: 'Portfolio website screenshot', caption: 'Previous portfolio design' }], demoUrl: 'https://example.com/portfolio-v1'
  },
  {
    id: 'ar-furniture-app', title: 'AR Furniture Visualization', slug: 'ar-furniture-app', category: ['android', 'software', '3d'], year: 2024, status: 'prototype',
    shortDescription: 'AR application for visualizing furniture in real spaces', fullDescription: 'Android app using ARCore for placing and visualizing 3D furniture models in real-world environments.',
    technologies: ['Android', 'ARCore', 'Java', 'OpenGL'], skills: ['Augmented Reality', 'Mobile Development', '3D Graphics', 'Spatial Computing'], featured: true,
    images: [{ url: '/images/projects/ar-furniture-1.jpg', alt: 'AR furniture visualization', caption: 'Virtual furniture in real space' }]
  },
  {
    id: 'mechanical-gear-simulation', title: 'Mechanical Gear Physics Simulation', slug: 'mechanical-gear-simulation', category: ['3d', 'engineering', 'experiments'], year: 2024, status: 'experiment',
    shortDescription: 'Interactive 3D simulation of complex gear systems', fullDescription: 'Web-based physics simulation showing realistic gear interactions, torque transfer, and mechanical advantage calculations.',
    technologies: ['Three.js', 'Cannon-es', 'React Three Fiber', 'GLSL'], skills: ['3D Graphics', 'Physics Simulation', 'WebGL', 'Interactive Design'], featured: true,
    images: [{ url: '/images/projects/gear-sim-1.jpg', alt: 'Gear simulation screenshot', caption: 'Running gear system' }], demoUrl: 'https://example.com/gear-sim'
  },
  {
    id: 'ai-image-generation-workflow', title: 'AI-Assisted Creative Workflow', slug: 'ai-image-generation-workflow', category: ['ai', 'experiments'], year: 2024, status: 'experiment',
    shortDescription: 'Exploration of AI tools in creative asset generation', fullDescription: 'Study of prompt engineering, image synthesis, and integration of AI-generated assets into 3D projects.',
    technologies: ['Stable Diffusion', 'Midjourney', 'Python', 'Blender'], skills: ['Prompt Engineering', 'AI Workflows', 'Image Processing', 'Asset Integration'],
    images: [{ url: '/images/projects/ai-workflow-1.jpg', alt: 'AI generated concept art', caption: 'AI-assisted concept visualization' }]
  },
  {
    id: 'iot-environmental-monitor', title: 'IoT Environmental Monitoring System', slug: 'iot-environmental-monitor', category: ['engineering', 'robotics', 'software'], year: 2024, status: 'prototype',
    shortDescription: 'ESP32-based sensor network for environmental data collection', fullDescription: 'Connected IoT system measuring temperature, humidity, air quality with cloud data logging and real-time dashboard.',
    technologies: ['ESP32', 'Arduino', 'Firebase', 'React', 'Sensor Hardware'], skills: ['IoT', 'Embedded Systems', 'Cloud Integration', 'Data Visualization'], featured: true,
    images: [{ url: '/images/projects/iot-monitor-1.jpg', alt: 'Sensor hardware and dashboard', caption: 'Environmental monitoring dashboard' }], githubUrl: 'https://github.com/Devil-Rajpoot-78/iot-monitor'
  },
  {
    id: 'shader-art-experiments', title: 'Shader Art & Generative Visuals', slug: 'shader-art-experiments', category: ['experiments', '3d'], year: 2024, status: 'experiment',
    shortDescription: 'Interactive shader-based generative art pieces', fullDescription: 'GLSL shader experiments creating procedural animations, fractals, and real-time visual effects.',
    technologies: ['GLSL', 'Three.js', 'Shader Forge', 'WebGL'], skills: ['Shader Programming', 'Generative Art', 'GLSL', 'WebGL'], featured: true,
    images: [{ url: '/images/projects/shader-art-1.jpg', alt: 'Shader generated visuals', caption: 'Procedural shader animation' }], demoUrl: 'https://example.com/shader-art'
  },
  {
    id: 'blender-addon-development', title: 'Custom Blender Add-on: Asset Manager', slug: 'blender-addon-development', category: ['blender', 'software'], year: 2024, status: 'prototype',
    shortDescription: 'Blender Python add-on for streamlined asset management', fullDescription: 'Custom add-on extending Blender functionality with efficient asset organization, batch operations, and workflow automation.',
    technologies: ['Python', 'Blender API', 'Qt', 'File System'], skills: ['Python', 'Blender Development', 'API Integration', 'UX Design'],
    images: [{ url: '/images/projects/blender-addon-1.jpg', alt: 'Blender add-on interface', caption: 'Custom add-on UI in Blender' }], githubUrl: 'https://github.com/Devil-Rajpoot-78/blender-asset-manager'
  },
  {
    id: 'real-time-renderer', title: 'Custom Real-time 3D Renderer', slug: 'real-time-renderer', category: ['software', '3d'], year: 2024, status: 'in-progress',
    shortDescription: 'WebGL-based 3D renderer with advanced lighting and post-processing', fullDescription: 'Modern 3D rendering pipeline with deferred shading, physically-based materials, and real-time effects.',
    technologies: ['WebGL 2.0', 'GLSL', 'JavaScript', 'Three.js'], skills: ['Graphics Programming', 'WebGL', 'Shader Development', 'Performance Optimization'], featured: true,
    images: [{ url: '/images/projects/renderer-1.jpg', alt: 'Custom renderer output', caption: 'Real-time rendering with advanced shading' }], githubUrl: 'https://github.com/Devil-Rajpoot-78/custom-renderer'
  },
  {
    id: 'product-visualization-pipeline', title: 'Product Visualization Pipeline', slug: 'product-visualization-pipeline', category: ['3d', 'product-viz', 'blender'], year: 2024, status: 'completed',
    shortDescription: 'End-to-end workflow for product rendering and visualization', fullDescription: 'Professional pipeline for photorealistic product visualizations including modeling, material setup, lighting, and rendering.',
    technologies: ['Blender', 'Cycles', 'Python', 'Substance Designer'], skills: ['3D Product Design', 'Rendering', 'Material Design', 'Workflow Automation'], featured: true,
    images: [{ url: '/images/projects/product-viz-1.jpg', alt: 'Product visualization', caption: 'Photorealistic product render' }]
  },
  {
    id: 'open-source-three-contribution', title: 'Three.js Community Contribution', slug: 'open-source-three-contribution', category: ['open-source', 'software'], year: 2024, status: 'open-source',
    shortDescription: 'Three.js and WebGL community contribution', fullDescription: 'Open-source experimentation and contribution focused on reusable WebGL utilities and 3D web workflows.',
    technologies: ['Three.js', 'WebGL', 'TypeScript'], skills: ['Open Source', 'Graphics Programming', 'TypeScript'],
    images: [{ url: '/images/projects/open-source-1.jpg', alt: 'Three.js community contribution', caption: 'Open-source WebGL work' }]
  }
];
