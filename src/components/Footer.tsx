import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-lg text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">Cheats Pro</h3>
            <p className="mb-4">
              The ultimate companion app for GTA V players, providing easy access to all cheat codes across platforms.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://sites.google.com/view/cheat-code-gta-5-psxboxpc/home" 
                  className="hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://sites.google.com/view/cheatcodegta5-psxboxpc/home" 
                  className="hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a 
                  href="mailto:indiecreatorluck@gmail.com" 
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Cheats Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}