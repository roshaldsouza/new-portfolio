import React from 'react';
import { User, Heart, Coffee, MapPin } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 88 },
    { name: 'Node.js', level: 85 },
    { name: 'Express.js', level: 85 },
    { name: 'MongoDB', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'HTML/CSS', level: 92 },
    { name: 'Git/GitHub', level: 85 },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate developer with a love for creating innovative solutions and beautiful user experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
              <div className="flex items-center mb-6">
                <User className="h-8 w-8 text-purple-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">My Story</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm a Computer Science Engineering graduate at ACS college College of Engineering, 
                  passionate about full-stack development and innovative technology solutions. My journey 
                  began with curiosity about how technology can solve real-world problems.
                </p>
                <p>
                  I specialize in the MERN stack and have experience building scalable web applications. 
                  From collaborative document management systems to job tracking applications, I enjoy 
                  creating solutions that make a real impact.
                </p>
                <p>
                  I'm also involved in research, having received funding from the Karnataka State Council 
                  for Science and Technology for an IoT-based Baby Monitoring System project. I love 
                  exploring emerging technologies and contributing to innovative solutions.
                </p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-pink-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">What I Love</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center text-gray-300">
                  <Coffee className="h-5 w-5 text-yellow-400 mr-2" />
                  Coffee & Code
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-5 w-5 text-green-400 mr-2" />
                  Travel
                </div>
                <div className="text-gray-300">🎵 Music</div>
                <div className="text-gray-300">📚 Learning</div>
                <div className="text-gray-300">🎮 Gaming</div>
                <div className="text-gray-300">🏃‍♂️ Running</div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-8">Skills & Expertise</h2>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-purple-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Quick Facts</h2>
              <div className="space-y-4 text-gray-300">
                <div className="flex justify-between">
                  <span>Location:</span>
                  <span className="text-white">Bengaluru, India</span>
                </div>
                <div className="flex justify-between">
                  <span>Experience:</span>
                  <span className="text-white">2+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span>Projects Completed:</span>
                  <span className="text-white">15+</span>
                </div>
                <div className="flex justify-between">
                  <span>Research Projects:</span>
                  <span className="text-white">3 Published</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;