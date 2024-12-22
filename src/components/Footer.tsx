import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://github.com" className="text-gray-400 hover:text-white">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
              <Linkedin size={20} />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-white">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}