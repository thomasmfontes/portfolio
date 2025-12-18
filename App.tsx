import { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Header } from './components/layout/Header';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { projectsData, experiencesData, testimonialsData } from './data/portfolio';
import './styles/globals.css';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.body.className = theme === 'dark' ? '' : 'light';
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <section id="inicio">
        <Header
          onScrollToProjects={() => scrollToSection(projectsRef)}
          onScrollToContact={() => scrollToSection(contactRef)}
        />
      </section>

      <section id="sobre">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>
      
      <section id="projetos" ref={projectsRef}>
        <Projects projects={projectsData} />
      </section>

      <section id="experiencia">
        <Experience experiences={experiencesData} />
      </section>

      <Testimonials testimonials={testimonialsData} />

      <section id="contato" ref={contactRef}>
        <Contact />
      </section>

      <Footer />
    </div>
  );
}
