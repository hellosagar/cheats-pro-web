import React from 'react';
import { Search, Heart, Wifi, Globe, Moon, Volume2 } from 'lucide-react';

const features = [
  {
    icon: <Search className="h-6 w-6" />,
    title: 'Easy Navigation',
    description: 'Find any cheat code instantly with our powerful search and category filters'
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: 'Favorites with Haptic',
    description: 'Save your most-used cheats with enhanced haptic feedback'
  },
  {
    icon: <Wifi className="h-6 w-6" />,
    title: 'Offline Access',
    description: 'Use cheats anytime, anywhere – no internet connection needed'
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: 'Multi-Language',
    description: 'Available in 12 languages including English, Spanish, French, and more'
  },
  {
    icon: <Moon className="h-6 w-6" />,
    title: 'Dark Mode',
    description: 'Choose between light and dark themes to match your preference'
  },
  {
    icon: <Volume2 className="h-6 w-6" />,
    title: 'Audio Playback',
    description: 'Listen to cheat codes with our unique audio playback feature'
  }
];

export default function Features() {
  return (
    <div className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to enhance your gaming experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition-transform">
              <div className="text-blue-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}