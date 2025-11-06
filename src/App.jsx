import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Award, Briefcase, BookOpen, Code, GraduationCap, ChevronDown } from 'lucide-react';
import profilePhoto from './profile_photo.jpeg';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['home', 'about', 'publications', 'experience', 'projects', 'awards'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // const scrollToSection = (id) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //     setIsMenuOpen(false);
  //   }
  // };
  const scrollToSection = (id) => {
    if (id === 'cv') {
      window.open('/Resume_Mehtab_OCT25.pdf', '_blank');
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };


  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'publications', label: 'Publications' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'awards', label: 'Awards' },
    { id: 'cv', label: 'CV' }
  ];

  const publications = [
    {
      title: "LLM Fault Localisation within evolutionary computation based automated program repair",
      venue: "GECCO Conference Companion",
      year: "2024",
      link: "https://doi.org/10.1145/3638530.3664174"
    },
    {
      title: "Comparison of Prompt Engineering and Fine-Tuning Strategies in Large Language Models in the Classification of Clinical Notes",
      venue: "AMIA Joint Summits",
      year: "2024",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11141826/"
    },
    {
      title: "Large language models in medical term classification and unexpected misalignment between response and reasoning",
      venue: "arXiv Preprint",
      year: "2023",
      link: "https://arxiv.org/abs/2312.14184"
    }
  ];

  const experiences = [
    {
      title: "The Mayo Clinic",
      role: "Biostatistics Research Intern",
      period: "July 2024 - August 2025",
      location: "Remote",
      highlights: [
        "Trained models to predict migraine using wearable watch data",
        "Developed novel pipeline using Fast Fourier transform and Transformer architecture",
        "Employed parallelization techniques to accelerate training",
        "Running GWAS analysis using Regenie with genomic data"
      ]
    },
    {
      title: "Amazon | Capstone Project",
      role: "Software Engineer",
      period: "August 2024 - December 2024",
      location: "Detroit, MI",
      highlights: [
        "Developed app for AWS customers to understand security gaps",
        "Built using React + TypeScript and AWS Amplify",
        "Utilized S3 buckets for caching AI-generated data",
        "Used AWS Bedrock for AI model execution"
      ]
    },
    {
      title: "Michigan State University",
      role: "Undergraduate Research Assistant",
      period: "September 2023 - Present",
      location: "East Lansing, MI",
      highlights: [
        "Developed data annotation tool utilizing Prompt Engineering",
        "Trained models using H2O AutoML for gene expression prediction",
        "Implemented PubMedBERT on clinical notes classification"
      ]
    }
  ];

  const projects = [
    {
      name: "PocketDoc",
      description: "Web app providing accurate medical information for uninsured patients. Built at CalHacks 2024.",
      tech: ["Fetch AI", "Reflex", "Groq LLM", "Llama Guard"],
      link: "https://devpost.com/software/pocketdoc-edvmq4"
    },
    {
      name: "SafeHealth",
      description: "Patient medical data management and disease diagnosis system. 3rd place at HackMIT 2022.",
      tech: ["Flutter", "Firebase", "PyTorch", "GCP"],
      link: null
    },
    {
      name: "AI Clinic",
      description: "Cancer detection from X-rays with health facility referrals. Microsoft Cloud award winner.",
      tech: ["Flask", "TensorFlow", "Azure", "Google Maps API"],
      link: "https://devpost.com/software/the-ai-clinic"
    },
    {
      name: "Interactive Halloween Sudoku",
      description: "Full-stack Sudoku game demonstrating OOP design patterns.",
      tech: ["C++", "wxWidgets", "UML"],
      link: null
    }
  ];

  const awards = [
    { name: "MSU Board of Trustees' Award", date: "May 2025" },
    { name: "Cole Excellence Scholarship", date: "August 2024" },
    { name: "3rd Place - IntegratedML Challenge (HackMIT)", date: "October 2022" },
    { name: "Best Use of Microsoft Cloud (ShellHacks)", date: "September 2022" },
    { name: "Best Hardware Hack (SpartaHack VII)", date: "April 2022" },
    { name: "Dean's List", date: "January 2022 - Present" }
  ];

  const skills = {
    "Languages (4+ years)": ["C++", "Python", "TensorFlow"],
    "Languages (2+ years)": ["React", "JavaScript", "TypeScript", "CSS", "SQL"],
    "ML/AI Frameworks": ["PyTorch", "TensorFlow", "Scikit-learn", "Transformers", "H2O AutoML"],
    "Cloud & Tools": ["AWS", "Azure", "GCP", "Docker", "Git"]
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-black/95 backdrop-blur-lg border-b border-purple-500/20' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              MM
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors duration-300 ${
                    activeSection === item.id 
                      ? 'text-purple-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-b border-purple-500/20">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 px-4 hover:bg-purple-500/10 rounded transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
        
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-purple-400 to-pink-600 p-1">
              <img
                src={profilePhoto}
                alt="Mehtab Murtaza"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent leading-tight">
            Sardar Mehtab Bin Murtaza
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4">
            Ph.D. Student in Computer Science | HCI + AI/ML Researcher
          </p>
          
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Computer Science Ph.D. student at UC Merced with research interests in Human Computer Interaction, AI/ML, LLMs, medical AI. 
            Michigan State University graduate and former intern at Mayo Clinic with publications in GECCO and AMIA. Currently working with Dr. Ahmed Sabbir Arif and
            part of the Inclusive Interactive Lab.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <a href="mailto:murtaza1@msu.edu" className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full hover:scale-105 transition-transform duration-300 text-sm sm:text-base font-medium">
              <Mail size={18} />
              <span>Email</span>
            </a>
            <a href="https://www.linkedin.com/in/mehtab-murtaza" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-purple-500 rounded-full hover:bg-purple-500/20 transition-all duration-300 text-sm sm:text-base font-medium">
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a href="https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AKzYXQ0nIs-_oyd5tXTzXP40hLFA-gAz1SHy8NK9THaopwhHI9WyKOczp-PsaDXSVAR-uop0tDKuzdwXgceNX5R4AB6Y&user=rMZs-twAAAAJ" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-purple-500 rounded-full hover:bg-purple-500/20 transition-all duration-300 text-sm sm:text-base font-medium">
              <BookOpen size={18} />
              <span>Scholar</span>
            </a>
            <a href="https://github.com/MehtabMurtaza" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-purple-500 rounded-full hover:bg-purple-500/20 transition-all duration-300 text-sm sm:text-base font-medium">
              <Github size={18} />
              <span>GitHub</span>
            </a>
          </div>

          <div className="mt-12">
            <ChevronDown size={32} className="mx-auto text-purple-400 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <GraduationCap className="mr-3 text-purple-400" size={40} />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Education
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-2xl p-6 sm:p-8 hover:border-purple-500 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div className="mb-2 sm:mb-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-purple-400 mb-2">University of California, Merced</h3>
                  <p className="text-lg sm:text-xl text-gray-300">Doctor of Philosophy in Computer Science (Ph.D.)</p>
                </div>
                <div className="text-gray-400">Expected May 2029</div>
              </div>
              <p className="text-gray-400">Merced, CA</p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-2xl p-6 sm:p-8 hover:border-purple-500 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div className="mb-2 sm:mb-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-purple-400 mb-2">Michigan State University</h3>
                  <p className="text-lg sm:text-xl text-gray-300">Bachelor of Science in Computer Science</p>
                  <p className="text-lg text-pink-400 font-semibold mt-1">GPA: 3.96</p>
                </div>
                <div className="text-gray-400">May 2025</div>
              </div>
              <p className="text-gray-400">East Lansing, MI</p>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-16">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-purple-400">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 border border-purple-500/20 rounded-xl p-6">
                  <h4 className="text-base sm:text-lg font-semibold text-purple-400 mb-4">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-purple-500/20 border border-purple-500/40 rounded-full text-xs sm:text-sm text-gray-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-purple-900/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <BookOpen className="mr-3 text-purple-400" size={40} />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Publications
            </h2>
          </div>
          
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-2xl p-6 hover:border-purple-500 transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-semibold text-purple-400 mb-3 hover:text-pink-400 transition-colors">
                  {pub.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 mb-2">{pub.venue} • {pub.year}</p>
                <a 
                  href={pub.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors text-sm sm:text-base"
                >
                  View Publication <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <Briefcase className="mr-3 text-purple-400" size={40} />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Experience
            </h2>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-l-4 border-purple-500 rounded-r-2xl p-6 hover:bg-purple-900/30 transition-all duration-300">
                <div className="mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-purple-400 mb-1">{exp.title}</h3>
                  <p className="text-lg sm:text-xl text-gray-300 mb-1">{exp.role}</p>
                  <p className="text-sm sm:text-base text-gray-400">{exp.period} • {exp.location}</p>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-gray-300">
                      <span className="text-purple-400 mt-1 flex-shrink-0">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-pink-900/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <Code className="mr-3 text-purple-400" size={40} />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Projects
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-2xl p-6 hover:border-purple-500 transition-all duration-300 flex flex-col">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-400 mb-3 hover:text-pink-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-2 sm:px-3 py-1 bg-purple-500/30 rounded-full text-xs sm:text-sm text-purple-300 border border-purple-500/50">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors text-sm sm:text-base"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <Award className="mr-3 text-purple-400" size={40} />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Awards & Honors
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-6 hover:border-purple-500 transition-all duration-300">
                <h3 className="text-base sm:text-lg font-semibold text-purple-400 mb-2 hover:text-pink-400 transition-colors leading-snug">
                  {award.name}
                </h3>
                <p className="text-sm text-gray-400">{award.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 py-8 px-4 text-center text-gray-400">
        <div className="max-w-6xl mx-auto">
          <p className="mb-2 text-sm sm:text-base">© 2025 Sardar Mehtab Bin Murtaza. All rights reserved.</p>
          <p className="text-xs sm:text-sm">Built with React & Tailwind CSS • Passion for Innovation & Research</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;