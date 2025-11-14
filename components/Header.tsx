import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeLinkStyle = {
    color: 'rgb(178, 212, 48)',
    textShadow: '0 0 5px rgb(178, 212, 48)',
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0, y: -20 }
  };
  
  const mobileLinkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/">
          <Logo />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              style={({ isActive }) => (isActive ? activeLinkStyle : {})}
              className="text-lg hover:text-[rgb(178,212,48)] transition-colors duration-300"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-50 relative">
            <svg className="w-8 h-8 text-[rgb(255,245,245)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
       {/* Mobile Menu */}
       <AnimatePresence>
          {isMenuOpen && (
              <motion.nav 
                className="lg:hidden absolute top-full left-0 right-0 bg-black bg-opacity-90 backdrop-blur-md flex flex-col items-center space-y-6 py-8"
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {navLinks.map((link) => (
                   <motion.div key={link.path} variants={mobileLinkVariants}>
                     <NavLink
                       to={link.path}
                       onClick={() => setIsMenuOpen(false)}
                       style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                       className="text-2xl hover:text-[rgb(178,212,48)] transition-colors duration-300"
                     >
                       {link.label}
                     </NavLink>
                   </motion.div>
                ))}
              </motion.nav>
          )}
       </AnimatePresence>
    </header>
  );
};

export default Header;
