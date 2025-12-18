import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with React & Node.js",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
      github: "https://github.com/rajubandam980/TodoApplication",
      demo: "#",
      tech: ["React", "Node.js", "TypeScript"]
    },
    {
      title: "Task Management App",
      description: "Productivity app built with React & TypeScript",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=800",
      github: "#",
      demo: "#",
      tech: ["React", "TypeScript"]
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather tracking using OpenWeather API",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800",
      github: "#",
      demo: "#",
      tech: ["React", "API"]
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-2xl transform hover:scale-105 transition-all flex flex-col h-full">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg"/>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t,i) => <span key={i} className="bg-gray-100 px-2 py-1 rounded text-sm">{t}</span>)}
                </div>
                <div className="flex gap-4 mt-auto">
                  <a href={project.github} className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded font-medium">
                    <Github size={20} /> Code
                  </a>
                  <a href={project.demo} className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded font-medium">
                    <ExternalLink size={20} /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
