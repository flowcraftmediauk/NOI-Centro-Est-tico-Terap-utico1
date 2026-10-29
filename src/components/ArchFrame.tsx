import React from 'react';
import { SparkleIcon, SmallSparkleIcon } from './SparkleIcon';

interface ArchFrameProps {
  imageSrc: string;
  altText: string;
  paletteDotsPosition?: 'left' | 'right';
  className?: string;
  priority?: boolean;
}

export const ArchFrame: React.FC<ArchFrameProps> = ({
  imageSrc,
  altText,
  paletteDotsPosition = 'right',
  className = ''
}) => {
  return (
    <div className={`relative mx-auto w-full max-w-[420px] lg:max-w-[460px] ${className}`}>
      {/* Decorative sparkle top-left */}
      <div className="absolute -top-6 -left-6 z-20 hidden sm:block animate-pulse">
        <SparkleIcon size={24} className="text-[#D9828B]" />
        <div className="absolute -top-2 -right-4">
          <SmallSparkleIcon size={14} className="text-[#EFB5B7]" />
        </div>
      </div>

      {/* Offset pink backdrop arch */}
      <div
        className="absolute inset-0 bg-[#F4DAD5] rounded-t-[160px] rounded-b-[48px] transform translate-x-4 translate-y-4 -rotate-1 transition-transform duration-500 ease-out hover:translate-x-3 hover:translate-y-3"
        aria-hidden="true"
      />

      {/* Main Arch Image Container */}
      <div className="relative z-10 overflow-hidden rounded-t-[160px] rounded-b-[48px] shadow-sm bg-[#FFF5EC] border-4 border-white aspect-[3/4]">
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* Delicate lighting gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#422B30]/20 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Botanical Sprig Element with Washi-tape Detail */}
      <div
        className={`absolute -bottom-8 ${
          paletteDotsPosition === 'right' ? '-left-6' : '-right-6'
        } z-20 pointer-events-none flex flex-col items-center`}
      >
        <svg
          width="70"
          height="160"
          viewBox="0 0 70 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#681B36]/50 drop-shadow-xs"
        >
          {/* Main Stem */}
          <path
            d="M35 155 C35 110, 42 70, 28 5"
            stroke="#5c3830"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Eucalyptus / Dried botanical leaves */}
          <ellipse cx="23" cy="20" rx="9" ry="6" fill="#8C7369" opacity="0.8" transform="rotate(-25 23 20)" />
          <ellipse cx="44" cy="38" rx="10" ry="7" fill="#A88B80" opacity="0.75" transform="rotate(30 44 38)" />
          <ellipse cx="20" cy="58" rx="11" ry="8" fill="#8C7369" opacity="0.85" transform="rotate(-30 20 58)" />
          <ellipse cx="46" cy="80" rx="12" ry="8" fill="#A88B80" opacity="0.7" transform="rotate(35 46 80)" />
          <ellipse cx="18" cy="104" rx="12" ry="9" fill="#8C7369" opacity="0.8" transform="rotate(-25 18 104)" />
          <ellipse cx="45" cy="126" rx="11" ry="8" fill="#A88B80" opacity="0.75" transform="rotate(30 45 126)" />
        </svg>

        {/* Washi-tape strip holding the branch */}
        <div className="absolute bottom-12 w-20 h-5 bg-[#FAF0E6]/90 border border-white/70 shadow-xs -rotate-6 backdrop-blur-xs flex items-center justify-center">
          <span className="w-full border-t border-dashed border-[#EFB5B7]/50" />
        </div>
      </div>

      {/* 3 Circular Palette Accent Dots stacked vertically */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 ${
          paletteDotsPosition === 'right' ? '-right-5' : '-left-5'
        } z-20 flex flex-col gap-2.5`}
        aria-hidden="true"
      >
        <div className="w-5 h-5 rounded-full bg-[#EFB5B7] shadow-xs border-2 border-white transition-transform hover:scale-125" />
        <div className="w-5 h-5 rounded-full bg-[#D9828B] shadow-xs border-2 border-white transition-transform hover:scale-125" />
        <div className="w-5 h-5 rounded-full bg-[#681B36] shadow-xs border-2 border-white transition-transform hover:scale-125" />
      </div>
    </div>
  );
};
