import React from 'react';

interface AgencyLogoProps {
  className?: string;
  size?: number;
}

export const AgencyLogo: React.FC<AgencyLogoProps> = ({ className = 'w-10 h-10', size }) => {
  const style = size ? { width: size, height: size } : undefined;

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 select-none ${className}`}
      style={style}
    >
      <img
        src="/agency-logo.svg"
        alt="شعار وكالة الصادق للسفريات والسياحة"
        className="w-full h-full object-contain filter drop-shadow-sm pointer-events-none"
        loading="eager"
        decoding="async"
      />
    </div>
  );
};
