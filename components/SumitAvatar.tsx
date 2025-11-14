import React from 'react';

const SumitAvatar: React.FC = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full rounded-full bg-black/20 border-4 border-[rgb(178,212,48)]/50 p-1">
    <defs>
      <linearGradient id="neuron-glow-sumit" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgb(178, 212, 48)" />
        <stop offset="100%" stopColor="#a8e063" />
      </linearGradient>
      <filter id="glow-filter-sumit">
        <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g transform="translate(5, 5) scale(0.9)">
      {/* Neuron paths */}
      <g stroke="url(#neuron-glow-sumit)" strokeWidth="2" fill="none" filter="url(#glow-filter-sumit)" strokeLinecap="round">
        <path d="M50 50 Q 60 40 70 50 T 85 45" />
        <path d="M50 50 Q 40 60 30 50 T 15 55" />
        <path d="M50 50 Q 45 30 60 25 T 55 10" />
        <path d="M50 50 Q 55 70 40 75 T 45 90" />
        <path d="M70 50 Q 75 60 80 55" />
        <path d="M30 50 Q 25 40 20 45" />
        <path d="M60 25 Q 65 35 70 30" />
      </g>
      {/* Neuron nodes */}
      <g fill="rgb(178, 212, 48)">
        <circle cx="50" cy="50" r="3" />
        <circle cx="70" cy="50" r="2" />
        <circle cx="30" cy="50" r="2" />
        <circle cx="60" cy="25" r="2" />
        <circle cx="40" cy="75" r="2" />
      </g>
    </g>
  </svg>
);
export default SumitAvatar;
