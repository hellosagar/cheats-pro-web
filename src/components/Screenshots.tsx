import React from 'react';

const screenshots = [
  {
    url: 'https://images.unsplash.com/photo-1624953587687-daf255b6b80a?auto=format&fit=crop&w=800&q=80',
    alt: 'App Screenshot 1'
  },
  {
    url: 'https://images.unsplash.com/photo-1624953587687-daf255b6b80a?auto=format&fit=crop&w=800&q=80',
    alt: 'App Screenshot 2'
  },
  {
    url: 'https://images.unsplash.com/photo-1624953587687-daf255b6b80a?auto=format&fit=crop&w=800&q=80',
    alt: 'App Screenshot 3'
  }
];

export default function Screenshots() {
  return (
    <div className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            App Screenshots
          </h2>
          <p className="text-gray-400 text-lg">
            Take a look at our beautiful and intuitive interface
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform">
              <img
                src={screenshot.url}
                alt={screenshot.alt}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}