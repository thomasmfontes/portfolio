import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import React, { memo, useState, useMemo } from 'react';
import { SectionHeader } from './About';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: string;
  image: string;
  demoUrl: string;
  githubUrl: string;
}

interface ProjectsProps {
  projects: Project[];
}

const filters = ['All', 'Web', 'Mobile', 'API', 'IA'];

export const Projects: React.FC<ProjectsProps> = memo(({ projects }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filteredProjects = useMemo(
    () => activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter),
    [activeFilter, projects]
  );

  return (
    <section id="projetos" className="section" style={{ background: 'var(--color-surface)' }}>
      <div className="container">
        <SectionHeader
          title="Projetos em Destaque"
          description="Alguns dos trabalhos que mais me orgulho de ter desenvolvido"
        />

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-xl)' }}>
          {filters.map((filter) => (
            <FilterButton
              key={filter}
              filter={filter}
              isActive={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            />
          ))}
        </div>

        <div className="grid-12" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-lg)' }}>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';

interface FilterButtonProps {
  filter: string;
  isActive: boolean;
  onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = memo(({ filter, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={isActive ? 'btn btn-primary' : 'btn btn-outline'}
    style={{ minWidth: '80px' }}
    aria-pressed={isActive}
  >
    {filter}
  </button>
));

FilterButton.displayName = 'FilterButton';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = memo(({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card"
      style={{ padding: 0, overflow: 'hidden' }}
    >
      <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 300ms' }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
      </div>
      <div style={{ padding: 'var(--space-xl)' }}>
        <h3 style={{ marginBottom: 'var(--space-sm)' }}>{project.title}</h3>
        <p style={{ fontSize: 'var(--text-sm)', marginBottom: 'var(--space-md)' }}>{project.description}</p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-xs)', marginBottom: 'var(--space-lg)' }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{
              padding: 'var(--space-xs) var(--space-sm)',
              background: 'rgba(0, 213, 255, 0.1)',
              color: 'var(--color-accent)',
              fontSize: 'var(--text-xs)',
              borderRadius: 'var(--radius-md)'
            }}>
              {tag}
            </span>
          ))}
        </div>
        
        <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
          <a
            href={project.demoUrl}
            style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)', color: 'var(--color-accent)', fontSize: 'var(--text-sm)', textDecoration: 'none' }}
            aria-label={`Ver projeto ${project.title}`}
          >
            <ExternalLink size={16} aria-hidden="true" />
            Ver projeto
          </a>
          <a
            href={project.githubUrl}
            style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)', color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)', textDecoration: 'none', transition: 'color var(--transition-base)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
            aria-label={`Código GitHub de ${project.title}`}
          >
            <Github size={16} aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';
