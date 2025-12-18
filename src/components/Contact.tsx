import React from 'react';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>

        {/* Contact Info Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow hover:shadow-2xl transition">
            <Mail size={28} className="mb-4 text-indigo-600" />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-600 text-center">rajubandam387@gmail.com</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow hover:shadow-2xl transition">
            <Phone size={28} className="mb-4 text-green-600" />
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-600 text-center">+1 (419) 250-5135</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow hover:shadow-2xl transition">
            <MapPin size={28} className="mb-4 text-pink-600" />
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-gray-600 text-center">Bowling Green, Ohio</p>
          </div>
        </div>

        {/* Form & Map */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <form
            action="https://formsubmit.co/rajubandam387@gmail.com"
            method="POST"
            className="space-y-6 bg-white p-8 rounded-xl shadow hover:shadow-2xl transition"
          >
            {/* Hidden Config */}
            <input type="hidden" name="_subject" value="New Portfolio Contact" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition transform hover:scale-105"
            >
              Send Message
            </button>
          </form>

          {/* Map + Social */}
          <div className="flex flex-col gap-6">
            <iframe
              src="https://www.google.com/maps?q=Bowling%20Green%20Ohio&output=embed"
              className="rounded-xl shadow"
              height="400"
              loading="lazy"
            ></iframe>

            <div className="flex gap-6 justify-center md:justify-start">
              <a
                href="https://github.com/rajubandam980"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/bandam-raju-ab357b194"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700"
              >
                <Linkedin size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
