import React from 'react';

const ZahidAvatar: React.FC = () => {
  const pixels = Array.from({ length: 100 }).map((_, i) => {
    const x = (i % 10) * 10;
    const y = Math.floor(i / 10) * 10;
    const opacity = 0.4 + Math.random() * 0.6;
    return <rect key={i} x={x} y={y} width="9" height="9" fill="rgb(26, 139, 157)" opacity={opacity} />;
  });

  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full rounded-full bg-black/20 border-4 border-[rgb(26,139,157)]/50 p-1">
      <defs>
        <clipPath id="avatar-clip-zahid">
          <circle cx="50" cy="50" r="48" />
        </clipPath>
      </defs>
      <g clipPath="url(#avatar-clip-zahid)">
        <rect width="100" height="100" fill="#111" />
        {pixels}
      </g>
    </svg>
  );
};
export default ZahidAvatar;
