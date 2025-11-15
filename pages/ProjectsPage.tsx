import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, scale: 0.9 },
  in: { opacity: 1, scale: 1 },
  out: { opacity: 0, scale: 0.9 },
};

const pageTransition = {
  // FIX: Cast 'type' to a const to satisfy Framer Motion's Transition type.
  type: 'spring' as const,
  stiffness: 100,
  duration: 0.5,
};

const allProjects = [
  {
    title: 'CodeCraft AI',
    category: 'AI App',
    img: 'https://i.postimg.cc/k4bZhTCv/codecraft.png',
    description: 'An AI-powered platform that empowers users to prototype and build complete HTML5 games using natural language. No complex setup, just pure creativity.',
    tech: ['Gemini AI', 'React', 'TypeScript', 'Tailwind CSS'],
    keyFeatures: ['Natural Language Game Generation', 'Powered by Google Gemini AI', 'Real-time Prototyping', 'No-Code User Experience'],
    liveUrl: 'https://codecraftgames.netlify.app/',
    repoUrl: '#',
  },
  {
    title: 'TechSavvy Insights',
    category: 'Website',
    img: 'https://i.postimg.cc/fWStnngZ/techsavvy.png',
    description: 'A modern, content-focused blog platform for tech enthusiasts. Features a clean design, post categories, tags, and an AI-powered idea generator.',
    tech: ['React', 'React Router', 'Tailwind CSS'],
    keyFeatures: ['Featured & Categorized Posts', 'Content Tagging System', 'AI Idea Generator', 'Clean, Responsive Layout'],
    liveUrl: 'https://techsavvy-insights-personal-blog.netlify.app/#/',
    repoUrl: '#',
  },
  {
    title: 'Nexus Chat',
    category: 'Web App',
    img: 'https://i.postimg.cc/W1F05qLm/nexus_cha.png',
    description: 'A real-time chat application allowing users to create temporary profiles and join public chat rooms. Features a sleek, modern UI for seamless communication.',
    tech: ['React', 'CSS', 'JavaScript'],
    keyFeatures: ['Temporary User Profiles', 'Real-time Messaging', 'Intuitive User Interface', 'Gender & Age Selection'],
    liveUrl: 'https://nexuschatweb.netlify.app/',
    repoUrl: '#',
  },
  {
    title: 'AI Chatbot Platform',
    category: 'AI App',
    img: 'https://cdn.dribbble.com/userupload/15787848/file/original-214f8622ae13a437f3fe6b519fb7ac3b.jpg?resize=400x300',
    description: 'An intelligent customer support chatbot trained on custom data. It can answer user queries, handle basic tasks, and escalate to a human agent when needed.',
    tech: ['Python', 'Flask', 'TensorFlow', 'React'],
    keyFeatures: ['Custom NLP Model', 'Real-time Chat Interface', 'Conversation History', 'Admin Training Dashboard'],
    liveUrl: 'https://sumitchauhanaibot.netlify.app/',
    repoUrl: '#',
  },
  {
    title: 'E-commerce Platform',
    category: 'Full-Stack',
    img: 'https://i.postimg.cc/8PFb00Lr/Screenshot_(2).png',
    description: 'A complete e-commerce solution with product catalogs, shopping cart, user accounts, and an admin panel for inventory management.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    keyFeatures: ['Product & Inventory Management', 'Secure Checkout with Stripe', 'User Accounts & Order History', 'Sales Analytics Dashboard'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'GitFinder Tool',
    category: 'Tool',
    img: 'https://picsum.photos/seed/gitfinder/500/500',
    description: 'A handy tool that utilizes the GitHub API to search for user profiles and view their repositories, followers, and other key information.',
    tech: ['React', 'GitHub API', 'Axios'],
    keyFeatures: ['Live Search with GitHub API', 'Profile & Repo Visualization', 'Sort & Filter Repositories', 'Light/Dark Mode Toggle'],
    liveUrl: '#',
    repoUrl: '#',
  },
];

const categories = ['All', ...Array.from(new Set(allProjects.map(p => p.category)))];

const ProjectCard: React.FC<{ project: typeof allProjects[0]; onClick: () => void; }> = ({ project, onClick }) => (
  <motion.div
    layoutId={`card-container-${project.title}`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
    onClick={onClick}
    className="relative overflow-hidden rounded-lg cursor-pointer group aspect-[4/3] w-full" // FIX: Added aspect ratio for consistent card sizing
  >
    <motion.img layoutId={`card-image-${project.title}`} src={project.img} alt={project.title} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-75 transition-all duration-300 flex flex-col justify-end p-4">
      <motion.h3 layoutId={`card-title-${project.title}`} className="text-xl font-bold text-white">{project.title}</motion.h3>
      <p className="text-sm text-[rgb(178,212,48)]">{project.category}</p>
    </div>
  </motion.div>
);

const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<(typeof allProjects[0]) | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return allProjects;
    return allProjects.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="container mx-auto px-4 py-24 md:py-32 relative min-h-screen"
    >
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Our <span className="text-[rgb(178,212,48)]">Creations</span></h1>

        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${activeFilter === category ? 'bg-[rgb(26,139,157)] text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="columns-1 sm:columns-2 md:columns-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.title} className="mb-6 break-inside-avoid">
              <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
            </div>
          ))}
        </motion.div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              layoutId={`card-container-${selectedProject.title}`}
              className="relative bg-[#111] border border-[rgb(26,139,157)]/50 rounded-lg overflow-hidden w-full max-w-4xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="md:w-1/2 h-64 md:h-auto">
                <motion.img layoutId={`card-image-${selectedProject.title}`} src={selectedProject.img} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 md:w-1/2 flex flex-col">
                <motion.h2 layoutId={`card-title-${selectedProject.title}`} className="text-3xl font-bold text-[rgb(178,212,48)]">{selectedProject.title}</motion.h2>
                <p className="text-lg text-[rgb(26,139,157)] mb-4">{selectedProject.category}</p>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.2 }}>
                  <p className="text-[rgb(255,245,245)]/80 mb-6">{selectedProject.description}</p>

                  <h3 className="font-bold mb-2">Key Features:</h3>
                  <ul className="list-disc list-inside text-[rgb(255,245,245)]/70 mb-6 space-y-1">
                    {selectedProject.keyFeatures.map(f => <li key={f}>{f}</li>)}
                  </ul>

                  <h3 className="font-bold mb-2">Tech Stack:</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tech.map(t => <span key={t} className="bg-[rgb(255,255,255)]/10 text-xs px-2 py-1 rounded">{t}</span>)}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                    <a 
                      href={selectedProject.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-full text-center px-6 py-2 bg-[rgb(26,139,157)] text-white font-semibold rounded-lg hover:bg-[rgb(178,212,48)] hover:text-black transition-all duration-300 flex-1"
                    >
                      Visit Live Site
                    </a>
                    {selectedProject.repoUrl !== '#' && (
                      <a 
                        href={selectedProject.repoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-full text-center px-6 py-2 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-all duration-300 flex-1"
                      >
                        View Repo
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
              <motion.button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-white/20 transition-colors z-20"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectsPage;
