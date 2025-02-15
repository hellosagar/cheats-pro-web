import React from 'react';

export default function AppIcon() {
  return (
    <div className="relative w-32 h-32">
      <div className="absolute inset-0 bg-blue-400/30 blur-2xl animate-pulse"></div>
      <div className="relative w-full h-full bg-gray-900 rounded-full p-4">
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path
            d="M12 2L22 12L12 22L2 12L12 2Z"
            className="fill-blue-400"
            transform="rotate(45, 12, 12)"
          />
          <path
            d="M7 12L12 7L17 12L12 17L7 12Z"
            className="fill-gray-900"
            transform="rotate(45, 12, 12)"
          />
        </svg>
      </div>
    </div>
  );
}