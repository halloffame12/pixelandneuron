import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Zap, BrainCircuit } from 'lucide-react';
import SumitAvatar from '../components/SumitAvatar';
import ZahidAvatar from '../components/ZahidAvatar';

const pageVariants = {
  initial: { opacity: 0, x: -100 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: 100 },
};

const pageTransition = {
  // FIX: Cast 'type' to a const to satisfy Framer Motion's Transition type.
  type: 'tween' as const,
  // FIX: The 'ease' property expects a specific string literal. Cast to const to fix the type.
  ease: 'anticipate' as const,
  duration: 0.7,
};

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    // FIX: Cast 'type' to a const to satisfy Framer Motion's Transition type.
    transition: { type: 'spring' as const, bounce: 0.4, duration: 0.8 }
  }
};

const devData = [
  {
    name: 'Sumit Chauhan',
    role: 'The Neuron: Full-Stack & AI Architect',
    description: "Sumit is the 'Neuron' of our duo, a visionary architect who thrives on weaving artificial intelligence into seamless, human-centric digital experiences. He specializes in building robust, end-to-end systems where intelligent backends and dynamic frontends converge. Driven by a relentless curiosity, Sumit transforms complex challenges into elegant, future-ready solutions that not only function flawlessly but also learn and adapt.",
    avatar: <SumitAvatar />
  },
  {
    name: 'Zahid',
    role: 'The Pixel: Backend & Systems Engineer',
    description: "Zahid is the 'Pixel' in our partnership, a meticulous engineer dedicated to the art of building scalable, resilient, and performant systems. His expertise lies in crafting clean backend architectures, optimizing database performance, and ensuring every project is built on a rock-solid foundation. His obsession with detail and quality is the bedrock of our work, ensuring everything is pixel-perfect from the inside out.",
    avatar: <ZahidAvatar />
  }
];

const skills = {
    "Frontend": {
        description: "We build pixel-perfect, responsive user interfaces that are not only beautiful but also accessible and performant, creating engaging experiences on any device.",
        list: ["React / Next.js", "TypeScript", "Vue.js / Nuxt.js", "Tailwind CSS", "Three.js / R3F", "Framer Motion", "GraphQL (Apollo)"],
    },
    "Backend": {
        description: "Our expertise lies in designing and building powerful, secure, and scalable server-side logic that forms the robust backbone of any modern application.",
        list: ["Node.js / Express", "Python (Django, Flask)", "Golang", "PHP", "PostgreSQL / MongoDB", "Redis", "REST & gRPC APIs"],
    },
    "AI, Data & Cloud": {
        description: "We leverage cloud infrastructure, automate pipelines, and integrate cutting-edge AI and data analysis to build intelligent, resilient, and insightful systems.",
        list: ["AWS / GCP", "Docker & Kubernetes", "CI/CD (GitHub Actions)", "PyTorch / TensorFlow", "Deep Learning", "Machine Learning", "OpenCV", "LangChain", "Data Analysis", "Terraform"],
    },
    "Design & Creative": {
        description: "From brand identity to compelling video content, we provide creative services that capture attention and communicate your message with clarity and impact.",
        list: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Adobe Premiere Pro", "Brand Strategy", "UI/UX Principles"],
    }
};

const philosophy = [
  { icon: <Zap />, title: "User-Centric Engineering", description: "Technology serves people, not the other way around. Every line of code is written with the end-user in mind, ensuring our solutions are intuitive, accessible, and a pleasure to use." },
  { icon: <Target />, title: "Pragmatic Innovation", description: "We are driven by innovation, but grounded in practicality. We select the right tool for the job, not just the trendiest, to build solutions that are both cutting-edge and reliably stable." },
  { icon: <Users />, title: "Lasting Partnerships", description: "We view our clients as partners. Through transparent communication and a collaborative spirit, we build strong relationships that extend beyond a single project, fostering long-term success." },
  { icon: <BrainCircuit />, title: "Continuous Learning", description: "The digital world is always evolving, and so are we. We are committed to perpetual learning, staying at the forefront of technology to ensure the solutions we build today are ready for the challenges of tomorrow." },
];

const journey = [
    { year: "2021", event: "The Spark: A shared passion for elegant code and innovative digital solutions brings our paths together. The initial collaboration reveals a powerful synergy between architectural vision and meticulous execution." },
    { year: "2022", event: "Forging Skills: We dive deep into the freelance world, delivering a series of successful projects. From complex web applications to custom internal tools, this period sharpens our technical skills and forges our collaborative workflow into a seamless process." },
    { year: "2023", event: "The AI Frontier: Our fascination with AI evolves from a hobby into a core competency. We begin integrating machine learning models into client projects, unlocking new levels of automation and intelligence and expanding our capabilities." },
    { year: "Present", event: "Pixel & Neuron: With a robust portfolio and a proven, synergistic partnership, we officially launch Pixel & Neuron. Our mission: to offer our combined expertise and creative energy to build the next generation of digital experiences." },
];

const AboutPage: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="container mx-auto px-4 py-24 md:py-32 relative"
    >
        <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Meet the <span className="text-[rgb(178,212,48)]">Minds</span></h1>

            <div className="grid md:grid-cols-2 gap-8 mb-20">
                {devData.map((dev) => (
                    <motion.div
                        key={dev.name}
                        className="bg-[rgb(255,255,255)]/5 p-8 rounded-lg shadow-lg backdrop-blur-sm border border-[rgb(255,255,255)]/10 text-center"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={cardVariants}
                    >
                        <div className="w-32 h-32 mx-auto mb-4">
                            {dev.avatar}
                        </div>
                        <h2 className="text-2xl font-bold text-[rgb(178,212,48)]">{dev.name}</h2>
                        <h3 className="text-center text-[rgb(26,139,157)] mb-4">{dev.role}</h3>
                        <p className="text-[rgb(255,245,255)]/80">{dev.description}</p>
                    </motion.div>
                ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our <span className="text-[rgb(26,139,157)]">Philosophy</span></h2>
            <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20" initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.3 }} transition={{ staggerChildren: 0.2 }}>
              {philosophy.map(p => (
                <motion.div key={p.title} className="text-center p-6 bg-[rgb(255,255,255)]/5 rounded-lg" variants={cardVariants}>
                  <div className="text-[rgb(178,212,48)] w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[rgb(26,139,157)]/20 mb-4">{p.icon}</div>
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="text-[rgb(255,245,255)]/70 mt-2">{p.description}</p>
                </motion.div>
              ))}
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our <span className="text-[rgb(178,212,48)]">Journey</span></h2>
            <div className="relative max-w-2xl mx-auto mb-20">
                <div className="absolute left-3 top-1 w-0.5 h-full bg-[rgb(26,139,157)]/30"></div>
                {journey.map((item, index) => (
                     <motion.div key={index} className="relative pl-12 mb-10" initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.5 }} variants={cardVariants}>
                         <div className="absolute left-3 top-1 w-7 h-7 bg-[rgb(178,212,48)] rounded-full border-4 border-black -translate-x-1/2"></div>
                         <p className="font-bold text-lg text-[rgb(26,139,157)]">{item.year}</p>
                         <p className="text-[rgb(255,245,245)]/80">{item.event}</p>
                    </motion.div>
                ))}
            </div>


            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our <span className="text-[rgb(26,139,157)]">Expertise</span></h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
              {Object.entries(skills).map(([category, skillData]) => (
                <motion.div key={category} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.3 }} variants={cardVariants}>
                  <h3 className="text-xl font-bold text-[rgb(178,212,48)] mb-2">{category}</h3>
                  <p className="text-[rgb(255,245,245)]/60 text-sm mb-6">{skillData.description}</p>
                   <motion.div 
                     className="flex flex-wrap gap-2"
                     variants={{ onscreen: { transition: { staggerChildren: 0.05 } } }}
                   >
                     {skillData.list.map(skill => (
                      <motion.div
                        key={skill}
                        className="bg-[rgb(255,255,255)]/10 text-[rgb(255,245,245)]/80 px-3 py-1 rounded-md text-sm"
                        variants={{
                            offscreen: { opacity: 0, y: 10 },
                            onscreen: { opacity: 1, y: 0 }
                        }}
                      >
                          {skill}
                      </motion.div>
                    ))}
                   </motion.div>
                </motion.div>
              ))}
            </div>
        </div>
    </motion.div>
  );
};

export default AboutPage;
