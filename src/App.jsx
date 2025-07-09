import { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Database,
  Server,
  User,
  Briefcase,
  GraduationCap,
  Award,
  Send,
  Menu,
  X,
  ChevronDown,
  Star
} from 'lucide-react';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import About from './components/About';
import Hero from './components/Hero';
import { STORE } from './context/AppContext';

const App = () => {
  const { setActiveSection, light } = STORE();
  console.log(light);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // const SkillBar = ({ skill, level }) => (
  //   <div className="mb-4">
  //     <div className="flex justify-between mb-1">
  //       <span className="text-sm font-medium text-gray-700">{skill}</span>
  //       <span className="text-sm text-gray-500">{level}%</span>
  //     </div>
  //     <div className="w-full bg-gray-200 rounded-full h-2">
  //       <div
  //         className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
  //         style={{ width: `${level}%` }}
  //       ></div>
  //     </div>
  //   </div>
  // );

  return (
    <div className={`min-h-screen font-any11 font-bold transition-colors duration-500 ease-initial ${light ? 'text-black bg-white' : 'text-white bg-black'}`}>
      {/* Navigation */}
      {/* <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Shravankumar
            </div>

            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors ${activeSection === item.toLowerCase()
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-gray-600 hover:text-blue-600"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav> */}

      {/* Hero Section */}
      <Hero />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />
      

      {/* Footer */}
      <Footer />

      

    </div>)
};

export default App;