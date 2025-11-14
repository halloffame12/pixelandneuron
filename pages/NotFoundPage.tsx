import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const pageVariants = {
  initial: { opacity: 0, scale: 1.2 },
  in: { opacity: 1, scale: 1 },
  out: { opacity: 0, scale: 0.8 },
};

const pageTransition = {
  // FIX: Cast 'type' to a const to satisfy Framer Motion's Transition type.
  type: 'spring' as const,
  duration: 0.5,
};

const RobotIcon = () => (
    <div className="w-32 h-32 md:w-40 md:h-40 text-[rgb(178,212,48)] mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.532 8.968a3 3 0 10-7.064 0" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a6 6 0 00-6-6h12a6 6 0 00-6 6z" />
        </svg>
    </div>
);


const NotFoundPage: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="w-full h-screen relative flex flex-col items-center justify-center text-center p-4 overflow-hidden"
    >
      <div className="relative z-10 flex flex-col items-center">
        <RobotIcon />
        <h1 className="text-8xl md:text-9xl font-bold text-[rgb(178,212,48)]">404</h1>
        <p className="text-2xl md:text-3xl font-semibold mt-4">Page Lost in Cyberspace</p>
        <p className="text-md md:text-lg text-[rgb(255,245,245)]/70 mt-2 max-w-md mx-auto">
          Our little robot couldn't find the page you're looking for. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block px-8 py-3 bg-[rgb(26,139,157)] text-white font-semibold rounded-lg shadow-lg hover:bg-[rgb(178,212,48)] hover:text-black transition-all duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;