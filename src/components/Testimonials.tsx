import React from 'react';

const testimonials = [
  {
    quote: "This app is a game-changer for finding cheat codes. The haptic feedback feature is brilliant!",
    author: "Alex Chen",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&q=80",
    role: "Pro Gamer"
  },
  {
    quote: "The audio playback feature is incredible. Makes memorizing complex cheat codes so much easier.",
    author: "Sarah Williams",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&q=80",
    role: "Gaming Enthusiast"
  },
  {
    quote: "Best cheat code app I've ever used. The offline access is a lifesaver during tournaments.",
    author: "Marcus Johnson",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&q=80",
    role: "ESports Player"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Hear it from our users
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:shadow-blue-500/10 transition-all"
            >
              <div className="space-y-4">
                <p className="text-gray-300 text-lg leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.author}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}