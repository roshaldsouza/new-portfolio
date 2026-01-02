import React from 'react';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer Intern',
      company: 'Toyota kirloskar Motor Pvt Ltd',
      period: 'March 2025 - June 2025',
      description: 'Developed and deployed login pages for role cased access using MEAN stack . Collaborated with cross-functional teams to build scalable solutions and gained hands-on experience with cutting-edge AI tools.',
      achievements: [
        'Built login page for iconnect application',
        'Collaborated with fellow developers',
        'Gained expertise in MEAN stack and modern web development',
      ],
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'Headstarter AI',
      period: 'July 2024 - September 2024',
      description: 'Developed and deployed AI-powered applications using modern web technologies. Collaborated with cross-functional teams to build scalable solutions and gained hands-on experience with cutting-edge AI tools.',
      achievements: [
        'Built 5+ AI-powered web applications',
        'Collaborated with 1000+ fellow developers',
        'Gained expertise in AI integration and modern web development',
      ],
    },
    {
      title: 'Research Assistant',
      company: 'Karnataka State Council for Science and Technology',
      period: '2023 - 2024',
      description: 'Led research on IoT-based Baby Monitoring System (SMART CRADLE). Received funding and recognition for innovative approach to infant health monitoring using IoT sensors and real-time data analysis.',
      achievements: [
        'Secured research funding from KSCST',
        'Published research findings',
        'Developed working IoT prototype',
      ],
    },
    {
      title: 'Web Development Projects',
      company: 'Personal & Academic',
      period: '2022 - Present',
      description: 'Developed multiple full-stack web applications including document collaboration systems, job tracking platforms, and portfolio websites using modern technologies.',
      achievements: [
        'Built 10+ full-stack applications',
        'Mastered MERN stack development',
        'Implemented real-time features and authentication',
      ],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Engineering in Computer Science and Engineering',
      school: 'ACS  College of Engineering',
      period: '2021 - 2025',
      description: ' B.E. graduate in Computer Science with focus on software development, algorithms, data structures, and emerging technologies. Active in research and project development.',
    },
    {
      degree: 'Headstarter AI Fellowship',
      school: 'Headstarter AI',
      period: '2024',
      description: 'Intensive 7-week fellowship program focused on building AI-powered applications, working with real-world projects, and collaborating with industry professionals.',
    },
  ];

  const certifications = [
    {
      name: 'KSCST Research Grant Recipient',
      issuer: 'Karnataka State Council for Science and Technology',
      year: '2024',
    },
    {
      name: 'Headstarter AI Fellowship',
      issuer: 'Headstarter AI',
      year: '2024',
    },
    {
      name: 'Full Stack Web Development',
      issuer: 'Self-Taught & Project-Based Learning',
      year: '2023',
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience & Education
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey and continuous learning path in technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Work Experience */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-8">
              <Briefcase className="h-8 w-8 text-purple-400 mr-3" />
              <h2 className="text-3xl font-bold text-white">Work Experience</h2>
            </div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-purple-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center text-gray-400 mt-2 md:mt-0">
                      <Calendar className="h-4 w-4 mr-2" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-300 flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <div className="flex items-center mb-6">
                <GraduationCap className="h-8 w-8 text-pink-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">Education</h2>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-pink-400 font-medium mb-2">{edu.school}</p>
                    <div className="flex items-center text-gray-400 text-sm mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      {edu.period}
                    </div>
                    <p className="text-gray-300 text-sm">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-yellow-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">Certifications</h2>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-1">{cert.name}</h3>
                    <p className="text-yellow-400 font-medium mb-1">{cert.issuer}</p>
                    <p className="text-gray-400 text-sm">{cert.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;