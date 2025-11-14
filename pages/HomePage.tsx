import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown, Code, Cpu, DatabaseZap, HeartHandshake, Sparkles, Scaling } from 'lucide-react';

import LaptopScene from '../three/LaptopScene';
import AnimatedText from '../components/AnimatedText';

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = {
  // FIX: Cast 'type' to a const to satisfy Framer Motion's Transition type.
  type: 'tween' as const,
  // FIX: The 'ease' property expects a specific string literal. Cast to const to fix the type.
  ease: 'anticipate' as const,
  duration: 0.5,
};

// Centralized viewport settings for scroll animations
const motionViewport = { once: true, amount: 0.3 };

const buttonHover = { 
  scale: 1.05, 
  transition: { type: 'spring' as const, stiffness: 400, damping: 10 } 
};

const featuredServices = [
  {
    icon: <Code size={32} />,
    title: 'Web Development',
    description: 'Modern, responsive websites that captivate and perform.',
  },
  {
    icon: <Cpu size={32} />,
    title: 'AI Solutions',
    description: 'Intelligent applications that automate and innovate.',
  },
  {
    icon: <DatabaseZap size={32} />,
    title: 'Full-Stack Power',
    description: 'End-to-end development from database to user interface.',
  },
];

const whyChooseUs = [
    { icon: <Sparkles size={32}/>, title: 'Innovative Solutions', description: 'We leverage the latest technologies to build solutions that are not just functional, but future-proof.'},
    { icon: <HeartHandshake size={32}/>, title: 'Collaborative Process', description: 'Your vision is our guide. We work closely with you at every stage to ensure the final product is perfect.'},
    { icon: <Scaling size={32}/>, title: 'Scalability & Performance', description: 'We write clean, efficient code and build robust architectures designed to grow with your business.'}
];

const testimonials = [
    { quote: "Pixel & Neuron transformed our online presence. Their attention to detail and creative input was invaluable.", author: "Priya Sharma" },
    { quote: "The AI-powered tool they built has automated a huge part of our workflow, saving us countless hours.", author: "Arjun Mehta" },
    { quote: "A truly professional and talented team. They delivered on time, on budget, and exceeded all expectations.", author: "Aditi Singh" },
]

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    // FIX: Cast 'type' to a const to satisfy Framer Motion's Transition type.
    transition: { type: 'spring' as const, bounce: 0.4, duration: 0.8 },
  },
};

const codeTokens = [
  { text: 'const', color: 'text-pink-400' },
  { text: ' ', color: '' },
  { text: 'PixelAndNeuron', color: 'text-sky-300' },
  { text: ' = (', color: 'text-gray-400' },
  { text: 'idea', color: 'text-orange-300' },
  { text: ') => ({', color: 'text-gray-400' },
  { text: '\n  ', color: '' },
  { text: 'code', color: 'text-cyan-300' },
  { text: ': ', color: 'text-gray-400' },
  { text: 'build', color: 'text-yellow-300' },
  { text: '(', color: 'text-gray-400' },
  { text: 'idea', color: 'text-orange-300' },
  { text: '),', color: 'text-gray-400' },
  { text: '\n  ', color: '' },
  { text: 'design', color: 'text-cyan-300' },
  { text: ': ', color: 'text-gray-400' },
  { text: 'inspire', color: 'text-yellow-300' },
  { text: '(', color: 'text-gray-400' },
  { text: 'idea', color: 'text-orange-300' },
  { text: '),', color: 'text-gray-400' },
  { text: '\n  ', color: '' },
  { text: 'intelligence', color: 'text-cyan-300' },
  { text: ': ', color: 'text-gray-400' },
  { text: 'automate', color: 'text-yellow-300' },
  { text: '(', color: 'text-gray-400' },
  { text: 'idea', color: 'text-orange-300' },
  { text: '),', color: 'text-gray-400' },
  { text: '\n});', color: 'text-gray-400' },
];

const MotionLink = motion(Link);

const HomePage: React.FC = () => {
  const typingDelay = 1.2;
  const charDelay = 0.04;

  const characters = codeTokens.flatMap(token => 
    token.text.split('').map(char => ({ char, color: token.color }))
  );

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="w-full"
    >
      <section className="h-screen relative overflow-hidden flex flex-col justify-center">
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 1, 10], fov: 50 }}>
            <Suspense fallback={null}>
              <LaptopScene />
            </Suspense>
          </Canvas>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4 bg-black bg-opacity-30">
          <AnimatedText
            text="We are Pixel & Neuron"
            el="h1"
            className="text-4xl md:text-6xl lg:text-7xl font-bold"
          />
          <AnimatedText
            text="Architects of the Digital Frontier"
            el="h1"
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-[rgb(178,212,48)]"
            delay={0.5}
            hasGlow={true}
          />
          <motion.div
            className="mt-4 max-w-2xl w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <pre className="text-sm md:text-base text-center text-[rgb(255,245,245)]/60 font-mono bg-white/5 p-8 rounded-lg border border-white/10 overflow-x-auto">
              <code style={{ display: 'inline-block', textAlign: 'left' }}>
                {characters.map(({ char, color }, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, textShadow: '0 0 8px rgba(178, 212, 48, 0.7)' }}
                    animate={{ opacity: 1, textShadow: '0 0 0px rgba(178, 212, 48, 0)' }}
                    transition={{ duration: 0.4, delay: typingDelay + index * charDelay }}
                    className={color}
                  >
                    {char === '\n' ? <br /> : (char === ' ' ? '\u00A0' : char) }
                  </motion.span>
                ))}
                <motion.span
                  className="inline-block w-0.5 h-5 bg-[rgb(178,212,48)] ml-1 align-text-bottom"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    delay: typingDelay,
                    duration: 0.8,
                    repeat: Infinity,
                  }}
                />
              </code>
            </pre>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <MotionLink
              to="/contact"
              whileHover={buttonHover}
              className="px-8 py-3 bg-[rgb(26,139,157)] text-white font-semibold rounded-lg shadow-lg hover:bg-[rgb(178,212,48)] hover:text-black transition-all duration-300"
            >
              Hire Us
            </MotionLink>
            <MotionLink
              to="/projects"
              whileHover={buttonHover}
              className="px-8 py-3 border-2 border-[rgb(26,139,157)] text-white font-semibold rounded-lg shadow-lg hover:bg-[rgb(26,139,157)] transition-all duration-300"
            >
              Explore Work
            </MotionLink>
          </motion.div>
        </div>
         <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
            <ArrowDown className="w-6 h-6 text-white/50" />
        </motion.div>
      </section>

      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            What We <span className="text-[rgb(26,139,157)]">Offer</span>
          </h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="offscreen"
            whileInView="onscreen"
            viewport={motionViewport}
            transition={{ staggerChildren: 0.2 }}
          >
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-[rgb(255,255,255)]/5 p-8 rounded-lg shadow-lg backdrop-blur-sm border border-[rgb(255,255,255)]/10"
                variants={cardVariants}
              >
                <div className="text-[rgb(178,212,48)] mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-[rgb(26,139,157)]/20 rounded-full">
                   {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-[rgb(255,245,245)]/70">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
       <section className="py-20 md:py-28 bg-[rgb(10,10,10)]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why <span className="text-[rgb(178,212,48)]">Choose Us?</span>
          </h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="offscreen"
            whileInView="onscreen"
            viewport={motionViewport}
            transition={{ staggerChildren: 0.2 }}
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                className="bg-[rgb(255,255,255)]/5 p-8 rounded-lg text-center"
                variants={cardVariants}
              >
                <div className="text-[rgb(26,139,157)] mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-[rgb(178,212,48)]/10 rounded-full">
                   {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-[rgb(255,245,245)]/70">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Words From Our <span className="text-[rgb(26,139,157)]">Partners</span>
          </h2>
           <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.2 }}
           >
            {testimonials.map((t, i) => (
                <motion.div key={i} className="bg-[rgb(255,255,255)]/5 p-8 rounded-lg border border-[rgb(255,255,255)]/10" variants={cardVariants}>
                    <p className="text-lg italic text-[rgb(255,245,245)]/80 mb-4">"{t.quote}"</p>
                    <p className="font-bold text-right text-[rgb(178,212,48)]">- {t.author}</p>
                </motion.div>
            ))}
           </motion.div>
        </div>
      </section>

       <section className="py-20 md:py-28 text-center bg-[rgb(10,10,10)]">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a project in mind?</h2>
            <p className="text-lg text-[rgb(255,245,245)]/70 mb-8 max-w-xl mx-auto">Let's turn your idea into a digital reality. We are excited to hear from you!</p>
            <MotionLink
              to="/contact"
              whileHover={buttonHover}
              className="inline-block px-10 py-4 bg-[rgb(26,139,157)] text-white font-bold rounded-lg shadow-lg hover:bg-[rgb(178,212,48)] hover:text-black transition-all duration-300"
            >
              Let's Talk
            </MotionLink>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;