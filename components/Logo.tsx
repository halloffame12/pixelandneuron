import React from 'react';

const Logo: React.FC = () => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="group"
      aria-label="Pixel & Neuron Logo"
    >
        <title>Pixel & Neuron Logo</title>
        {/* Unified P & N glyph */}
        <path
            d="M16 52 V 12 H 32 C 44 12, 44 28, 32 28 H 24 L 48 52 V 12"
            stroke="url(#pn-gradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-500 ease-in-out group-hover:[filter:drop-shadow(0_0_5px_rgb(178,212,48))]"
        />
        <defs>
            <linearGradient id="pn-gradient" x1="16" y1="12" x2="48" y2="52" gradientUnits="userSpaceOnUse">
                <stop stopColor="rgb(26, 139, 157)" />
                <stop offset="1" stopColor="rgb(178, 212, 48)" />
            </linearGradient>
        </defs>
    </svg>
  );
};

export default Logo;
