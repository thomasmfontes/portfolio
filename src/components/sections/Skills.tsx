import { motion } from 'motion/react';
import { Code2, Server, Database, Cloud } from 'lucide-react';
import React, { memo } from 'react';
import { SectionHeader } from './About';

interface Skill {
  category: string;
  items: string[];
  icon: React.ElementType;
}

const skillsData: Skill[] = [
  {
    category: 'Front-end',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    icon: Code2,
  },
  {
    category: 'Back-end',
    items: ['Node.js', 'Express', 'NestJS', 'GraphQL'],
    icon: Server,
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma'],
    icon: Database,
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'CI/CD', 'Kubernetes'],
    icon: Cloud,
  },
];

export const Skills: React.FC = memo(() => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeader
          title="Habilidades Técnicas"
          description="Tecnologias e ferramentas que domino para criar soluções completas"
        />

        <div className="grid-12" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-lg)' }}>
          {skillsData.map((skill, index) => (
            <SkillCard key={skill.category} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = memo(({ skill, index }) => {
  const { icon: Icon, category, items } = skill;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card"
    >
      <div style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '48px', 
        height: '48px', 
        background: 'rgba(0, 213, 255, 0.1)', 
        borderRadius: 'var(--radius-md)', 
        color: 'var(--color-accent)', 
        marginBottom: 'var(--space-md)' 
      }}>
        <Icon size={24} aria-hidden="true" />
      </div>
      <h3 style={{ marginBottom: 'var(--space-md)' }}>{category}</h3>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
        {items.map((item) => (
          <li key={item} style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
            • {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
});

SkillCard.displayName = 'SkillCard';
