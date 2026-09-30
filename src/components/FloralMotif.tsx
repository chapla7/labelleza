import React from 'react';

interface FloralProps {
  className?: string;
  variant?: 'branch' | 'bloom' | 'divider' | 'wreath' | 'corner';
  size?: number;
}

export const FloralMotif: React.FC<FloralProps> = ({
  className = '',
  variant = 'bloom',
  size = 28,
}) => {
  if (variant === 'branch') {
    return (
      <svg
        width={size * 2}
        height={size}
        viewBox="0 0 60 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`inline-block ${className}`}
      >
        <path
          d="M 5 25 Q 30 10 55 12"
          stroke="#C6982C"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        {/* Left leaves */}
        <path
          d="M 15 21 C 12 16 16 12 21 17 C 18 19 16 20 15 21 Z"
          fill="#8A4FA8"
          opacity="0.75"
        />
        <path
          d="M 28 17 C 27 11 34 9 36 14 C 33 16 30 16 28 17 Z"
          fill="#C6982C"
          opacity="0.85"
        />
        {/* Right leaves */}
        <path
          d="M 42 13 C 43 7 50 8 49 13 C 47 13 44 13 42 13 Z"
          fill="#8A4FA8"
          opacity="0.75"
        />
        <circle cx="55" cy="12" r="2.5" fill="#C6982C" />
      </svg>
    );
  }

  if (variant === 'divider') {
    return (
      <div className={`flex items-center justify-center gap-3 my-4 ${className}`}>
        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#DCD0EE]" />
        <svg
          width="36"
          height="16"
          viewBox="0 0 36 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 4 8 Q 12 4 18 8 Q 24 12 32 8"
            stroke="#C6982C"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <circle cx="18" cy="8" r="3" fill="#6D3E8E" />
          <circle cx="10" cy="7" r="1.5" fill="#C6982C" />
          <circle cx="26" cy="9" r="1.5" fill="#C6982C" />
        </svg>
        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#DCD0EE]" />
      </div>
    );
  }

  if (variant === 'wreath') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <circle cx="20" cy="20" r="16" stroke="#E6D59A" strokeWidth="1" strokeDasharray="2 3" />
        <circle cx="20" cy="4" r="2" fill="#8A4FA8" />
        <circle cx="20" cy="36" r="2" fill="#8A4FA8" />
        <circle cx="4" cy="20" r="2" fill="#C6982C" />
        <circle cx="36" cy="20" r="2" fill="#C6982C" />
        <path
          d="M 12 28 C 16 32 24 32 28 28"
          stroke="#C6982C"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (variant === 'corner') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M 5 45 L 5 15 Q 5 5 15 5 L 45 5"
          stroke="#E6D59A"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M 15 15 C 10 22 22 22 18 12 C 12 14 14 15 15 15 Z"
          fill="#6D3E8E"
          opacity="0.6"
        />
        <circle cx="5" cy="5" r="3" fill="#C6982C" />
      </svg>
    );
  }

  // Default delicate bloom
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block shrink-0 ${className}`}
    >
      <circle cx="12" cy="12" r="3" fill="#C6982C" />
      {/* 4 petals */}
      <ellipse cx="12" cy="5" rx="2.2" ry="4" fill="#8A4FA8" opacity="0.8" />
      <ellipse cx="12" cy="19" rx="2.2" ry="4" fill="#8A4FA8" opacity="0.8" />
      <ellipse cx="5" cy="12" rx="4" ry="2.2" fill="#8A4FA8" opacity="0.8" />
      <ellipse cx="19" cy="12" rx="4" ry="2.2" fill="#8A4FA8" opacity="0.8" />
      {/* 4 subtle diagonal accents */}
      <circle cx="7" cy="7" r="1.2" fill="#DFB76C" />
      <circle cx="17" cy="7" r="1.2" fill="#DFB76C" />
      <circle cx="7" cy="17" r="1.2" fill="#DFB76C" />
      <circle cx="17" cy="17" r="1.2" fill="#DFB76C" />
    </svg>
  );
};
