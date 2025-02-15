import React from 'react';

export default function PhoneMockup() {
  return (
    <div className="relative w-full max-w-[380px] mx-auto">
      <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="relative">
        <div className="relative z-10 bg-black rounded-[3rem] p-3 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-[3rem]"></div>
          <div className="relative bg-gray-900 rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
            <div className="absolute top-0 left-0 right-0 h-6 bg-black z-10 flex items-center px-4">
              <div className="text-white text-xs">6:50</div>
              <div className="ml-auto flex items-center gap-1">
                <div className="w-4 h-4 relative">
                  <div className="absolute inset-0 bg-white opacity-80"></div>
                </div>
              </div>
            </div>
            <div className="w-full h-full bg-black text-white">
              <div className="pt-8 px-6">
                <h1 className="text-3xl font-bold mb-2 text-center">
                  <span className="text-white">All</span>
                  <br />
                  <span className="text-[#00A3FF]">GTA</span>
                  <span className="text-white"> GAMES</span>
                </h1>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center justify-center mb-6">
                    <span className="text-gray-400 text-4xl">🎮</span>
                  </div>
                  <h2 className="text-2xl text-center mb-6">
                    Select your
                    <br />
                    preferred <span className="text-[#00A3FF]">Game</span>
                  </h2>
                  <button className="w-full py-3 px-4 rounded-lg border border-[#00A3FF] text-[#00A3FF] text-left">
                    GTA 5
                  </button>
                  <button className="w-full py-3 px-4 rounded-lg border border-white/20 text-white text-left">
                    GTA San Andreas
                  </button>
                  <button className="w-full py-3 px-4 rounded-lg border border-white/20 text-white text-left">
                    GTA Vice City
                  </button>
                  <button className="w-full py-3 px-4 rounded-lg border border-white/20 text-white text-left">
                    GTA 4
                  </button>
                  <button className="w-full py-3 px-4 rounded-lg border border-white/20 text-white text-left">
                    GTA 3
                  </button>
                </div>
                <div className="absolute bottom-8 left-6 right-6">
                  <button className="w-full py-3 rounded-lg bg-[#00A3FF] text-white font-medium">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -right-20 -bottom-10 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -left-20 -top-10 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>
    </div>
  );
}