import React from 'react';
import AppIcon from './AppIcon';
import StoreButtons from './StoreButtons';
import PhoneMockup from './PhoneMockup';

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900">
      {/* Animated background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,24,27,0.8),rgba(24,24,27,0.9))]"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-blue-500/10 rounded-full mix-blend-screen filter blur-[128px] animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-purple-500/10 rounded-full mix-blend-screen filter blur-[128px] animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-8">
              <AppIcon />
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="block text-gray-300">Ultimate</span>
                <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent bg-clip-text animate-gradient">
                  Cheats Pro
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0">
                Access all cheat codes instantly across XBOX, PlayStation, PC, and mobile platforms.
                Enhanced with haptic feedback and audio playback.
              </p>
              <div className="flex flex-col items-center lg:items-start gap-8">
                <StoreButtons />
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    4.9 Rating
                  </span>
                  <span>•</span>
                  <span>100K+ Downloads</span>
                  <span>•</span>
                  <span>Free</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </div>
  );
}