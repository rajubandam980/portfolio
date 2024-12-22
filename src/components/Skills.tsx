import React from 'react';
import { Code2, Database, Globe, Palette } from 'lucide-react';

export function Skills() {
  const skills = [
    {
      icon: <Code2 size={40} />,
      title: "Frontend Development",
      description: "React, TypeScript, Tailwind CSS",
    },
    {
      icon: <Database size={40} />,
      title: "Backend Development",
      description: "Node.js, Express, PostgreSQL",
    },
    {
      icon: <Globe size={40} />,
      title: "Web Technologies",
      description: "HTML5, CSS3, JavaScript",
    },
    {
      icon: <Palette size={40} />,
      title: "UI/UX Design",
      description: "Figma, Adobe XD, Responsive Design",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="text-gray-800 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}