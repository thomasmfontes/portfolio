import { motion } from 'motion/react';
import React, { memo } from 'react';
import { SectionHeader } from './About';

export interface Experience {
  role: string;
  company: string;
  period: string;
  achievements: string[];
}

interface ExperienceProps {
  experiences: Experience[];
}

export const Experience: React.FC<ExperienceProps> = memo(({ experiences }) => {
  return (
    <section id="experiencia" className="section">
      <div className="container">
        <SectionHeader
          title="Experiência Profissional"
          description="Minha trajetória e os impactos que gerei ao longo dos anos"
        />

        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
          {experiences.map((exp, index) => (
            <ExperienceCard key={`${exp.company}-${exp.period}`} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
});

Experience.displayName = 'Experience';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = memo(({ experience, index }) => {
  const { role, company, period, achievements } = experience;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      style={{ position: 'relative', paddingLeft: 'var(--space-xl)', borderLeft: '2px solid var(--color-border)' }}
    >
      <div style={{ position: 'absolute', left: '-9px', top: 0, width: '16px', height: '16px', borderRadius: '50%', background: 'var(--color-accent)' }} aria-hidden="true" />
      
      <div className="card">
        <div className="mb-4">
          <h3 className="text-white mb-2">{role}</h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-gray-400 text-sm">
            <span>{company}</span>
            <span className="hidden sm:block">•</span>
            <span className="text-[#A8CFDE]">{period}</span>
          </div>
        </div>
        
        <ul className="space-y-2">
          {achievements.map((achievement, i) => (
            <li key={i} className="flex gap-3 text-gray-400 text-sm">
              <span className="text-[#A8CFDE] mt-1" aria-hidden="true">→</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
});

ExperienceCard.displayName = 'ExperienceCard';
