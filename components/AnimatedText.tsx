import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  el?: React.ElementType;
  className?: string;
  delay?: number;
  hasGlow?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, el: Wrapper = 'p', className, delay = 0, hasGlow = false }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: i * 0.1 + delay },
    }),
  };

  const baseChildVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        // FIX: Cast 'type' to a const to satisfy Framer Motion's Transition type, which expects a specific string literal ('spring') instead of a generic string.
        type: 'spring' as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: -20,
    },
  };
  
  const glowingChildVariants = {
    visible: {
      ...baseChildVariants.visible,
      textShadow: '0 0 10px rgb(178, 212, 48)',
    },
    hidden: {
      ...baseChildVariants.hidden,
      textShadow: '0 0 40px rgb(178, 212, 48)',
    },
  };

  const childVariants = hasGlow ? glowingChildVariants : baseChildVariants;

  return (
    <Wrapper className={className}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        aria-hidden
      >
        {text.split(' ').map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
            {word.split('').map((char, charIndex) => (
              <motion.span key={charIndex} className="inline-block" variants={childVariants}>
                {/* FIX: A string cannot be a direct child of a motion component when using variants. Wrapping the character in a span resolves this TypeScript error. */}
                <span>{char}</span>
              </motion.span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default AnimatedText;
