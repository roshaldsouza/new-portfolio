import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-8">Let's Connect</h2>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-purple-400 mr-4" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <a href="mailto:roshalds789@gmail.com" className="text-gray-300 hover:text-purple-400 transition-colors">
                      roshalds789@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-purple-400 mr-4" />
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <a href="tel:+919606210598" className="text-gray-300 hover:text-purple-400 transition-colors">
                      +91 9606210598
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-purple-400 mr-4" />
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-gray-300">Bengaluru, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/roshaldsouza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-all duration-200 transform hover:scale-110"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/roshal-dsouza-571910228/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-all duration-200 transform hover:scale-110"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com/roshaldsouza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-all duration-200 transform hover:scale-110"
                >
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Quick Response</h3>
              <p className="text-gray-300 mb-4">
                I typically respond to emails within 24 hours. For urgent matters, 
                feel free to connect with me on LinkedIn or check out my GitHub projects.
              </p>
              <div className="flex items-center text-green-400">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Available for internships and collaborations
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                    placeholder="roshalds789@gmail.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                  placeholder="Tell me about your project, collaboration opportunity, or just say hello!"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;