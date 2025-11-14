
import React from 'react';
import { motion } from 'framer-motion';

const PageLoader: React.FC = () => (
  <div className="w-screen h-screen flex justify-center items-center bg-black">
    <motion.div
      style={{
        width: 50,
        height: 50,
        border: '5px solid rgb(26, 139, 157)',
        borderTop: '5px solid rgb(178, 212, 48)',
        borderRadius: '50%',
      }}
      animate={{ rotate: 360 }}
      // FIX: The 'loop' property is not valid for Framer Motion transitions. Replaced with 'repeat: Infinity' to create a continuous loop.
      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
    />
  </div>
);

export default PageLoader;