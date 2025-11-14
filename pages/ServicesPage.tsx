import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, DraftingCompass, TestTube, Rocket } from 'lucide-react';


const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -50 },
};

const pageTransition = {
  // FIX: Cast 'type' to a const to satisfy Framer Motion's Transition type.
  type: 'tween' as const,
  // FIX: The 'ease' property expects a specific string literal. Cast to const to fix the type.
  ease: 'anticipate' as const,
  duration: 0.7,
};

const WebDevIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 16l-4-16M6 9h14M4 15h14" />
  </svg>
);

const AIIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const AutomationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const FullStackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7l8 4 8-4M12 11v4" />
    </svg>
);

const LogoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.468 6.532l-2-2" />
    </svg>
);

const VideoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4" />
    </svg>
);

const services = [
  {
    title: 'Bespoke Web Experiences',
    description: 'We don\'t just build websites; we craft immersive digital platforms. From visually stunning marketing sites to complex, data-driven enterprise applications, our focus is on architecting responsive, accessible, and SEO-optimized solutions that serve as a core business asset, delivering tangible results and a flawless user journey.',
    icon: <WebDevIcon />,
    details: [
        'Enterprise-Grade E-commerce Solutions', 
        'Real-time & Interactive 3D Graphics (WebGL/R3F)',
        'Advanced Headless CMS Architecture (Sanity, Strapi)', 
        'Comprehensive Performance Audits & Optimization', 
        'Progressive Web App (PWA) & Offline-First Design',
        'Strict WCAG 2.1 AA Accessibility Compliance'
    ],
  },
  {
    title: 'AI, ML & Data Analytics',
    description: 'Transform your raw data into actionable intelligence. We design and deploy custom AI solutions, from intelligent chatbots and computer vision systems to deep learning models that uncover hidden patterns and drive business growth. Let us help you make data-driven decisions with confidence.',
    icon: <AIIcon />,
    details: [
        'Custom Deep Learning & ML Models',
        'Advanced Data Analysis & Visualization',
        'Computer Vision Solutions (OpenCV)',
        'Predictive Analytics & Recommendation Engines',
        'Custom RAG & Agent-based LLM Systems',
        'Natural Language Processing (NLP) for Insight Extraction',
    ],
  },
  {
    title: 'Strategic Workflow Automation',
    description: "Reclaim your team's most valuable asset: time. We identify operational bottlenecks and build custom scripts, internal dashboards, and robust API integrations that automate repetitive tasks and connect disparate systems. The result is a streamlined operation with fewer manual errors and boosted productivity.",
    icon: <AutomationIcon />,
    details: [
        'Bespoke Internal Tooling & Dashboards (Retool, etc.)', 
        'Custom ETL (Extract, Transform, Load) Pipelines', 
        'CI/CD Pipeline Automation & Optimization',
        'Third-Party API Integrations & Webhook Management', 
        'Automated Data Scraping & Processing', 
        'Low-code/No-code Platform Integration (n8n, Make)'
    ],
  },
  {
    title: 'Holistic Product Development',
    description: 'From a spark of an idea to a market-ready product, we offer a holistic partnership. We manage the entire lifecycle—strategy, design, architecture, development, deployment, and support—to build cohesive, secure, and scalable digital products that are perfectly aligned with your strategic business goals.',
    icon: <FullStackIcon />,
    details: [
        'Full-Lifecycle Agile Project Management', 
        'Scalable Cloud-Native & Microservices Architecture',
        'Robust API Design & Development (REST, GraphQL, gRPC)',
        'Database Architecture & Performance Tuning (SQL & NoSQL)',
        'Comprehensive Testing Strategies (Unit, Integration, E2E)',
        'DevOps, Containerization (Docker), & Orchestration (K8s)'
    ],
  },
  {
    title: 'Compelling Brand Identity',
    description: "A strong brand is more than a logo; it's a narrative. Our design process is rooted in understanding your business's core values to craft a unique and memorable visual identity. We create a cohesive system that resonates with your target audience, communicates your message with clarity, and sets you apart.",
    icon: <LogoIcon />,
    details: [
        'Complete Brand Strategy & Identity Systems', 
        'Infinitely Scalable Vector Logo Design', 
        'Strategic Color Palette & Typography Selection', 
        'Comprehensive Brand Guideline Documentation', 
        'Marketing & Social Media Asset Kits',
        'UI/UX Design Systems for Digital Products'
    ],
  },
  {
    title: 'Impactful Video Storytelling',
    description: 'In today\'s digital landscape, video is the most powerful medium for connection. We transform raw footage into compelling visual narratives that captivate, educate, and inspire action. From slick promotional content to in-depth corporate videos, we deliver a polished, professional, and impactful final product.',
    icon: <VideoIcon />,
    details: [
        'Promotional, Social Media & Explainer Videos',
        'Advanced Color Correction & Cinematic Grading',
        'Custom Motion Graphics & Animated Titles',
        'Professional Audio Mixing, Repair & Sound Design',
        'Multi-camera Synchronization & Editing',
        'Efficient Post-Production Workflow Management'
    ],
  },
];

const processSteps = [
    { icon: <Lightbulb />, title: "1. Discover & Plan", description: "We start by understanding your vision, goals, and requirements to create a solid project blueprint." },
    { icon: <DraftingCompass />, title: "2. Design & Develop", description: "We craft the UI/UX and build the application with clean, efficient code and constant feedback loops." },
    { icon: <TestTube />, title: "3. Test & Deploy", description: "Rigorous testing ensures a bug-free product before we deploy it to a scalable cloud environment." },
    { icon: <Rocket />, title: "4. Support & Iterate", description: "We provide ongoing support and are ready to iterate on the product to meet future needs." }
];

const techStack = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Golang', 'PHP', 'Three.js', 'MongoDB', 'PostgreSQL', 'Docker', 'Kubernetes', 'GraphQL', 'PyTorch', 'TensorFlow', 'OpenCV', 'Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe Premiere Pro', 'TailwindCSS', 'Framer Motion', 'AWS', 'GCP'];

const cardVariants = {
  offscreen: { opacity: 0, scale: 0.8, },
  // FIX: Cast 'type' to a const to satisfy Framer Motion's Transition type.
  onscreen: { opacity: 1, scale: 1, transition: { type: "spring" as const, bounce: 0.4, duration: 0.8 } }
};

const ServiceCard: React.FC<{ title: string; description: string; icon: React.ReactNode; details: string[] }> = ({ title, description, icon, details }) => {
    return (
        <motion.div 
          className="bg-[rgb(255,255,255)]/5 p-8 rounded-lg shadow-lg backdrop-blur-sm border border-[rgb(255,255,255)]/10 h-full flex flex-col items-center text-center group"
          variants={cardVariants}
        >
            <div className="w-20 h-20 mb-6 p-4 text-[rgb(26,139,157)] group-hover:text-[rgb(178,212,48)] transition-colors duration-300">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-[rgb(178,212,48)] mb-2">{title}</h3>
            <p className="text-[rgb(255,245,245)]/80 mb-4 flex-grow">{description}</p>
            <ul className="text-left text-sm text-[rgb(255,245,245)]/70 space-y-2 list-disc list-inside mt-auto">
              {details.map((detail, i) => <li key={i}>{detail}</li>)}
            </ul>
        </motion.div>
    );
};

const TechMarquee: React.FC<{ items: string[]; speed?: number }> = ({ items, speed = 40 }) => {
    const duplicatedItems = [...items, ...items];
    return (
        <div className="w-full overflow-hidden relative" style={{ maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'}}>
            <motion.div
                className="flex gap-4"
                animate={{
                    x: ['0%', '-50%'],
                }}
                transition={{
                    ease: 'linear',
                    duration: speed,
                    repeat: Infinity,
                }}
            >
                {duplicatedItems.map((item, index) => (
                    <div key={index} className="bg-[rgb(255,255,255)]/5 border border-[rgb(255,255,255)]/10 px-4 py-2 rounded-md whitespace-nowrap">
                        <p className="font-semibold">{item}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

const ServicesPage: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="container mx-auto px-4 py-24 md:py-32"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our <span className="text-[rgb(26,139,157)]">Services</span></h1>
      <p className="text-center text-lg text-[rgb(255,245,245)]/70 max-w-2xl mx-auto mb-16">
        We offer a suite of specialized services designed to bring your digital ideas to life with creativity, precision, and technical excellence.
      </p>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </motion.div>

       <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our <span className="text-[rgb(178,212,48)]">Process</span></h2>
       <motion.div 
        className="relative grid grid-cols-1 md:grid-cols-4 gap-8 mb-24"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
       >
        <div className="absolute top-10 left-0 w-full h-0.5 bg-[rgb(255,255,255)]/10 hidden md:block"></div>
        {processSteps.map((step) => (
            <motion.div key={step.title} className="text-center relative p-4" variants={cardVariants}>
                 <div className="w-20 h-20 mb-4 mx-auto flex items-center justify-center rounded-full bg-[rgb(26,139,157)]/20 border-2 border-[rgb(26,139,157)] text-[rgb(178,212,48)] z-10 relative">
                     {step.icon}
                 </div>
                 <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                 <p className="text-[rgb(255,245,245)]/70">{step.description}</p>
            </motion.div>
        ))}
       </motion.div>

       <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Technologies We <span className="text-[rgb(26,139,157)]">Master</span></h2>
        <div className="max-w-6xl mx-auto">
            <TechMarquee items={techStack} />
        </div>

    </motion.div>
  );
};

export default ServicesPage;