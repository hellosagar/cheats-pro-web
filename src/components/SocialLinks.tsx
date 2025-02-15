import React from 'react';
import { Instagram, Youtube, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: <Instagram className="w-6 h-6" />, href: "https://instagram.com", label: "Instagram" },
  { icon: <Youtube className="w-6 h-6" />, href: "https://youtube.com", label: "YouTube" },
  { icon: <Twitter className="w-6 h-6" />, href: "https://twitter.com", label: "Twitter" }
];

export default function SocialLinks() {
  return (
    <div className="flex space-x-6">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
          aria-label={link.label}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}