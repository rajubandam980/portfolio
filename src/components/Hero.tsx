import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Hi, I'm Raju Bandam
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A passionate Full Stack Developer specializing in building exceptional digital experiences.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Let's talk <ArrowRight size={20} />
            </a>
          </div>
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600&h=600" 
              alt="Profile" 
              className="rounded-full w-72 h-72 object-cover mx-auto shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}