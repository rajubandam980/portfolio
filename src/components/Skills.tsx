import React from 'react';
import { Code2, Database, Globe, Palette } from 'lucide-react';

export function Skills() {
  const skills = [
    {
      icon: <Code2 size={40} className="text-indigo-600" />,
      title: "Frontend Development",
      description: "React, TypeScript, Angular",
    },
    {
      icon: <Database size={40} className="text-green-600" />,
      title: "Backend Development",
      description: "Node.js, Java, MySQL",
    },
    {
      icon: <Globe size={40} className="text-blue-600" />,
      title: "Web Technologies",
      description: "HTML5, CSS3, JavaScript",
    },
    {
      icon: <Palette size={40} className="text-pink-600" />,
      title: "UI/UX Design",
      description: "Figma, Adobe XD, Responsive Design",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="p-8 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 text-center"
            >
              <div className="mb-4 flex justify-center">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
