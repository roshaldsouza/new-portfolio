import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'PDF Collaboration Management',
      description: 'A comprehensive document management system with real-time collaboration features, user authentication, and secure file sharing.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
      category: 'fullstack',
      liveUrl: 'https://pdf-collab-management.onrender.com/',
      githubUrl: 'https://github.com/roshaldsouza/pdf-collab-management',
    },
    {
      id: 2,
      title: 'Job Application Tracker',
      description: 'A modern job application tracking system to help job seekers organize their applications, track progress, and manage interview schedules.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      category: 'fullstack',
      liveUrl: 'https://job-application-tracker-ssf9.vercel.app/',
      githubUrl: 'https://github.com/roshaldsouza/job-application-tracker',
    },
    {
      id: 3,
      title: 'Smart Cradle IoT System',
      description: 'An innovative IoT-based baby monitoring system with real-time health tracking, automated alerts, and mobile app integration.',
      image: 'https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Arduino', 'IoT Sensors', 'Mobile App', 'Cloud Integration'],
      category: 'iot',
      liveUrl: 'https://lnkd.in/ggScVXK5',
      githubUrl: 'https://github.com/roshaldsouza/smart-cradle',
    },
    {
      id: 4,
      title: 'Personal Portfolio Website',
      description: 'A responsive and modern portfolio website showcasing projects, skills, and professional experience with smooth animations.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      category: 'frontend',
      liveUrl: 'https://my-portfolio-iota-seven-obzp6hd2y4.vercel.app/',
      githubUrl: 'https://github.com/roshaldsouza/my-portfolio',
    },
    {
      id: 5,
      title: 'MERN stack dashboard and E-Commerce Platform',
      description: 'A full-stack web app that enables user authentication and secure login.',
      image: 'https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      category: 'fullstack',
      liveUrl: 'https://mern-stack-take-home-exercise.vercel.app/',
      githubUrl: 'https://github.com/roshaldsouza/MERN-stack-take-home-exercise',
    },
    {
      id: 6,
      title: ' React Data Table with Sorting and Filtering',
      description: 'A responsive, configurable data table built with React + Vite (TypeScript) and Tailwind CSS.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React','typsescript' ,'tailwind css'],
      category: 'frontend',
      liveUrl: 'https://data-table-vert.vercel.app/',
      githubUrl: 'https://github.com/roshaldsouza/Data-Table',
    },
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'iot', label: 'IoT & Research' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of projects that showcase my skills and passion for development.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeFilter === filter.key
                  ? 'bg-purple-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              <Filter className="inline-block w-4 h-4 mr-2" />
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-600/20 text-purple-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects found for this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;