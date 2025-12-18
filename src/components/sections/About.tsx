import { motion } from 'motion/react';
import { Code2, Server, Database, Cloud } from 'lucide-react';
import React from 'react';

const values = ['Código limpo e bem documentado', 'Performance e otimização', 'Experiência do usuário excepcional', 'Boas práticas e testes'];

const specialties = [
  { icon: Code2, title: 'Front-end', description: 'Interfaces modernas e responsivas' },
  { icon: Server, title: 'Back-end', description: 'APIs robustas e escaláveis' },
  { icon: Database, title: 'Database', description: 'Modelagem eficiente de dados' },
  { icon: Cloud, title: 'Cloud', description: 'Deploy e infraestrutura' },
];

export const About: React.FC = () => {
  return (
    <section id="sobre" className="section" style={{ background: 'var(--color-surface)' }}>
      <div className="container">
        <SectionHeader
          title="Sobre Mim"
          description="Conheça minha jornada, valores e o que me move como desenvolvedor"
        />

        <div className="grid-12" style={{ gridTemplateColumns: '1fr', gap: 'var(--space-2xl)', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}
          >
            <p className="text-gray-400 leading-relaxed">
              Sou um desenvolvedor apaixonado por tecnologia e inovação, com mais de 6 anos de 
              experiência construindo aplicações web e mobile escaláveis. Minha missão é criar 
              produtos que façam a diferença na vida das pessoas.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Ao longo da minha carreira, trabalhei com startups inovadoras e empresas estabelecidas, 
              sempre buscando aprender e compartilhar conhecimento com a equipe.
            </p>
            
            <div style={{ paddingTop: 'var(--space-md)' }}>
              <h3 style={{ marginBottom: 'var(--space-md)' }}>O que eu valorizo:</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                {values.map((value) => (
                  <li key={value} style={{ display: 'flex', alignItems: 'start', gap: 'var(--space-sm)', color: 'var(--color-text-secondary)' }}>
                    <span style={{ color: 'var(--color-accent)', marginTop: '2px' }}>→</span>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-md)' }}
          >
            {specialties.map(({ icon: Icon, title, description }) => (
              <SpecialtyCard key={title} icon={Icon} title={title} description={description} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface SectionHeaderProps {
  title: string;
  description: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      textAlign: 'center', 
      marginBottom: 'var(--space-2xl)'
    }}
  >
    <h2 style={{ marginBottom: 'var(--space-md)' }}>{title}</h2>
    <p style={{ fontSize: 'var(--text-lg)' }}>{description}</p>
  </motion.div>
);

interface SpecialtyCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const SpecialtyCard: React.FC<SpecialtyCardProps> = ({ icon: Icon, title, description }) => (
  <div className="card">
    <Icon size={32} style={{ color: 'var(--color-accent)', marginBottom: 'var(--space-md)' }} aria-hidden="true" />
    <h4 style={{ marginBottom: 'var(--space-xs)' }}>{title}</h4>
    <p style={{ fontSize: 'var(--text-sm)' }}>{description}</p>
  </div>
);
