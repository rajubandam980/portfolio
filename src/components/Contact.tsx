import React from 'react';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>

        {/* Contact Info Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow hover:shadow-2xl transition-shadow">
            <Mail size={28} className="mb-4 text-indigo-600" />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-600 text-center">rajubandam387@gmail.com</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow hover:shadow-2xl transition-shadow">
            <Phone size={28} className="mb-4 text-green-600" />
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-600 text-center">+1 (419) 250 5135</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow hover:shadow-2xl transition-shadow">
            <MapPin size={28} className="mb-4 text-pink-600" />
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-gray-600 text-center">Bowling Green, Ohio</p>
          </div>
        </div>

        {/* Contact Form & Map */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <form 
            className="space-y-6 bg-white p-8 rounded-xl shadow hover:shadow-2xl transition-shadow"
            action="mailto:rajubandam387@gmail.com"
            method="post"
            encType="text/plain"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={6}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors hover:scale-105 transform duration-200"
            >
              Send Message
            </button>
          </form>

          {/* Map & Social Links */}
          <div className="flex flex-col gap-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.123456789!2d-83.646!3d41.374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88389382b7b62b9f%3A0x1234567890abcdef!2sBowling%20Green%2C%20OH!5e0!3m2!1sen!2sus!4v0000000000000"
              width="100%"
              height="400"
              className="rounded-xl shadow"
              allowFullScreen
              loading="lazy"
            ></iframe>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-6 mt-4">
              <a href="https://github.com/rajubandam980" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900">
                <Github size={28} />
              </a>
              <a href="www.linkedin.com/in/bandam-raju-ab357b194" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                <Linkedin size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
