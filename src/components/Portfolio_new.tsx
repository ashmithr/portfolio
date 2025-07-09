import React, { useEffect, useState } from 'react';
import './Portfolio.css';
import { HeroGeometric } from './ui/shape-landing-hero';

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Intersection Observer for scroll animations and navigation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            const sectionId = entry.target.id;
            if (sectionId) {
              setActiveSection(sectionId);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('.section, .skill-category, .project-card, .timeline-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = {
    languages: ['Python', 'C/C++', 'SQL', 'HTML/CSS', 'JavaScript'],
    technologies: ['ReactJS', 'ExpressJS', 'NextJS', 'MongoDB', 'Supabase', 'Git', 'Google Colab'],
    frameworks: ['TensorFlow', 'Keras', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn']
  };

  const experiences = [
    {
      title: "Summer Intern",
      company: "SlateMate @ IIT Madras",
      period: "June 2025 – Present",
      location: "Chennai, India",
      responsibilities: [
        "Worked on AI-powered ecosystem for parental control, personalized learning, and student safety",
        "Incubated under Nirmaan Cell @ IIT Madras (₹7L Grant)",
        "Researched competitor School Management Systems using KPI analysis",
        "Developed MVPs for AI-powered features and iterated based on feedback"
      ]
    },
    {
      title: "Chief Operational Officer",
      company: "Invisible Mechanics (Acquired by Unacademy)",
      period: "August 2023 – Jan 2025",
      location: "Bengaluru, India",
      responsibilities: [
        "Led end-to-end content pipeline using ML for predictive SEO",
        "Generated ₹1.5L+ revenue via LMS-integrated e-learning funnels",
        "Scaled content to 7M+ views and 85K+ subscribers via analytics"
      ]
    },
    {
      title: "Student Intern",
      company: "Intuitify AI Labs",
      period: "June 2024 – July 2024",
      location: "Bengaluru, India",
      responsibilities: [
        "Designed AI curricula using advanced ML techniques and tools"
      ]
    }
  ];

  const projects = [
    {
      name: "Col(lab) Research",
      description: "Developed a collaborative research tool with AI-mentored annotations for national hackathon",
      tech: ["ReactJS", "NextJS", "Supabase", "Google GenAI SDK"],
      github: "https://github.com/ashmithr/ColResearch"
    },
    {
      name: "Movie Buff",
      description: "Built a TF-IDF based movie recommendation engine with OMDb API for UI enhancement",
      tech: ["Python", "Streamlit"],
      github: "https://github.com/ashmithr/Movie-Buff"
    }
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering (AI/ML)",
      school: "PES University",
      period: "August 2023 – June 2027",
      location: "Bengaluru, India",
      gpa: "9.54/10",
      rank: "7th out of 498 Students",
      relevant: [
        "Data Structures & Algorithms",
        "Web Technologies", 
        "Computer Networks",
        "Digital Design & Computer Organization",
        "Operating Systems",
        "Statistics",
        "Linear Algebra",
        "Automata",
        "Python",
        "C Language"
      ],
      awards: [
        "Academic Merit Scholarship (₹4,50,000+)",
        "1st Place in NexGen 2.0 National Hackathon (160+ teams)",
        "Top 1% (out of 50,000+) in JPMorgan CFG'25"
      ]
    },
    {
      degree: "High School Diploma",
      school: "The Amaatra Academy",
      period: "August 2021 – June 2023",
      location: "Bengaluru, India",
      gpa: "93.3% (CBSE Board Exam)",
      relevant: ["Physics", "Chemistry", "Mathematics", "Computer Science"]
    }
  ];

  return (
    <div className="portfolio">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">AR</span>
          </div>
          <div className="nav-menu">
            <button 
              className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => scrollToSection('home')}
            >
              Home
            </button>
            <button 
              className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => scrollToSection('about')}
            >
              About
            </button>
            <button 
              className={`nav-item ${activeSection === 'experience' ? 'active' : ''}`}
              onClick={() => scrollToSection('experience')}
            >
              Experience
            </button>
            <button 
              className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </button>
            <button 
              className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={() => scrollToSection('skills')}
            >
              Skills
            </button>
            <button 
              className={`nav-item ${activeSection === 'education' ? 'active' : ''}`}
              onClick={() => scrollToSection('education')}
            >
              Education
            </button>
            <button 
              className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero section">
        <HeroGeometric 
          badge="Portfolio" 
          title1="Hi! I'm" 
          title2="Ashmith Reddy"
        />
        <div className="hero-buttons-overlay">
          <button 
            className="btn btn-primary"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </button>
          <a 
            href="/Ashmith_Resume_June2025.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            View Resume
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm Ashmith Reddy Sama, a passionate B.Tech Computer Science & Engineering (AI/ML) student at PES University, 
                currently ranked <strong>7th out of 498 students</strong> with an outstanding <strong>🎯 CGPA of 9.54/10</strong>.
              </p>
              <p>
                My journey spans from being a Chief Operational Officer at Invisible Mechanics (acquired by Unacademy) 
                to currently working as a <strong>🏛️ Summer Intern at SlateMate @ IIT Madras</strong>. I've successfully scaled content to 
                7M+ views, generated ₹1.5L+ revenue, and achieved remarkable milestones including:
              </p>
              <div className="achievements-highlights">
                <div className="achievement-item">
                  🏆 <strong>1st Place in NexGen 2.0 National Hackathon</strong> - Won ₹30,000 prize competing against 160+ teams
                </div>
                <div className="achievement-item">
                  💰 <strong>Academic Merit Scholarship</strong> - Awarded ₹4,50,000+ for academic excellence
                </div>
                <div className="achievement-item">
                  🎓 <strong>IIT Madras Internship</strong> - Selected for prestigious research internship under ₹7L funded project
                </div>
                <div className="achievement-item">
                  🌟 <strong>Top 1% in JPMorgan CFG'25</strong> - Ranked among top performers out of 50,000+ participants
                </div>
              </div>
              <p>
                I'm driven by the challenge of solving complex problems through innovative AI/ML solutions and modern web technologies.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <h3>🎯 9.54 CGPA</h3>
                <p>₹4,50,000+ Scholarship</p>
              </div>
              <div className="stat-item">
                <h3>🏆 1st Place </h3>
                <p>NexGen 2.0 National Level Hackathon</p>
              </div>
              <div className="stat-item">
                <h3>🏛️ IIT Madras</h3>
                <p>Machine Learning Intern @ Nirmaan, IITM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="experience-list">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="experience-header">
                  <div className="experience-info">
                    <h3>{exp.title}</h3>
                    <p className="company">{exp.company}</p>
                    <p className="location">{exp.location}</p>
                  </div>
                  <div className="experience-date">
                    <p>{exp.period}</p>
                  </div>
                </div>
                <ul className="experience-responsibilities">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Source
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Languages</h3>
              <div className="skill-tags">
                {skills.languages.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Technologies</h3>
              <div className="skill-tags">
                {skills.technologies.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>AI/ML</h3>
              <div className="skill-tags">
                {skills.frameworks.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-list">
            {education.map((edu, index) => (
              <div key={index} className="education-card">
                <div className="education-header">
                  <div className="education-info">
                    <h3>{edu.degree}</h3>
                    <p className="school">{edu.school}</p>
                    <p className="location">{edu.location}</p>
                  </div>
                  <div className="education-date">
                    <p>{edu.period}</p>
                  </div>
                </div>
                <div className="education-details">
                  <p className="gpa">{edu.gpa} {edu.rank && `• ${edu.rank}`}</p>
                  {edu.awards && (
                    <div className="education-awards">
                      <p className="awards-title">Awards & Achievements:</p>
                      <ul>
                        {edu.awards.map((award, i) => (
                          <li key={i}>{award}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="education-courses">
                    <p className="courses-title">Relevant Coursework:</p>
                    <div className="course-tags">
                      {edu.relevant.map((course, i) => (
                        <span key={i} className="course-tag">{course}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <p>
              I'm always interested in new opportunities, challenging projects, and collaborating with talented teams. 
              Whether you have an internship opportunity, project collaboration, or just want to connect, I'd love to hear from you!
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>ashmithreddys@gmail.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <span>+91-7829930199</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Bengaluru, India</span>
              </div>
            </div>
            <div className="contact-buttons">
              <a href="mailto:ashmithreddys@gmail.com" className="btn btn-primary">
                Send Email
              </a>
              <a href="https://linkedin.com/in/ashmithreddy" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Ashmith Reddy Sama. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
