import React from "react";

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>

        <div className="space-y-8">
          {/* Job 1 */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-2">
              Java Full Stack Developer — Cigniti Technologies
            </h3>
            <p className="text-gray-500 text-sm mb-4">2020 – 2022</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Developed enterprise-grade web applications using Java, Spring Boot, and Angular.
              </li>
              <li>
                Built REST APIs and integrated frontend with backend services.
              </li>
              <li>
                Automated testing workflows, reducing manual testing time by 40%.
              </li>
              <li>
                Collaborated in Agile teams, contributing to production-ready releases.
              </li>
            </ul>
          </div>

          {/* Job 2 (Optional Internship) */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-2">
              Web Development Intern — Graduate Internship
            </h3>
            <p className="text-gray-500 text-sm mb-4">2024 – 2025</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Built React + TypeScript web applications with modern UI design.
              </li>
              <li>
                Improved frontend performance by optimizing components and state management.
              </li>
              <li>
                Collaborated with backend team to integrate REST APIs.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
