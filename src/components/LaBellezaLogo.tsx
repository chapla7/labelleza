import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  inlineText?: boolean;
}

export const OFFICIAL_LOGO_URL = 'https://i.ibb.co/RpJrB4d2/logo-labelleza.png';

export const LaBellezaLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  inlineText = false,
}) => {
  const [imgError, setImgError] = useState(false);

  // Dimensions based on size
  const iconSizes = {
    sm: 38,
    md: 48,
    lg: 64,
    xl: 88,
  }[size];

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Official Provided Logo Image from https://ibb.co/Kj84LzS6 */}
      {!imgError ? (
        <img
          src={OFFICIAL_LOGO_URL}
          alt="La Belleza - Event & Wedding Caterers"
          className="shrink-0 object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105"
          style={{ width: `${iconSizes}px`, height: `${iconSizes}px` }}
          onError={() => setImgError(true)}
          loading="eager"
        />
      ) : (
        /* Fallback SVG Emblem */
        <div
          className="shrink-0 rounded-full border border-[#D4AF37] bg-white p-1 flex items-center justify-center"
          style={{ width: `${iconSizes}px`, height: `${iconSizes}px` }}
        >
          <span className="font-serif font-bold text-[#6D3E8E] text-xs">LB</span>
        </div>
      )}

      {/* Brand Typography Wordmark: "the size of event & wedding caterers should be same as La Belleza" */}
      <div className={`flex ${inlineText ? 'flex-row items-center gap-2' : 'flex-col justify-center'}`}>
        <div className="flex items-center gap-1.5 leading-none">
          <span className="font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-[#4E2667]">
            La Belleza
          </span>
        </div>
        
        {showSubtitle && (
          <div className="flex items-center gap-1 mt-0.5 leading-none">
            <span className="font-serif text-base sm:text-lg md:text-xl font-medium tracking-normal text-[#C6982C]">
              Event &amp; Wedding Caterers
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
