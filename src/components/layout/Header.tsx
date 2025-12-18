import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import React from 'react';

interface HeaderProps {
  onScrollToProjects: () => void;
  onScrollToContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onScrollToProjects, onScrollToContact }) => {
  return (
    <section id="inicio" className="section" style={{ paddingTop: '120px' }}>
      <div className="container">
        <div className="grid-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ gridColumn: '1 / -1' }}
            className="md:col-span-7"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
              <div style={{ 
                display: 'inline-block', 
                padding: 'var(--space-xs) var(--space-md)',
                borderRadius: 'var(--radius-xl)',
                background: 'rgba(0, 213, 255, 0.1)',
                border: '1px solid rgba(0, 213, 255, 0.2)',
                width: 'fit-content'
              }}>
                <span style={{ color: 'var(--color-accent)', fontSize: 'var(--text-sm)' }}>
                  Desenvolvedor Full Stack
                </span>
              </div>
              
              <h1>
                Olá, eu sou Thomas.<br />Construo produtos digitais modernos.
              </h1>
              
              <p style={{ maxWidth: '600px', fontSize: 'var(--text-lg)' }}>
                Especializado em React, TypeScript e Node.js. Transformo ideias em soluções escaláveis 
                com código limpo e foco em performance.
              </p>
              
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 'var(--space-md)',
                paddingTop: 'var(--space-md)'
              }}
                className="sm:flex-row"
              >
                <button
                  onClick={onScrollToProjects}
                  className="btn btn-primary"
                  aria-label="Ir para a seção de projetos"
                >
                  Ver projetos
                  <ArrowRight size={20} aria-hidden="true" />
                </button>
                <button
                  onClick={onScrollToContact}
                  className="btn btn-outline"
                  aria-label="Ir para a seção de contato"
                >
                  Entrar em contato
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ gridColumn: '1 / -1' }}
            className="md:col-span-5"
          >
            <div className="grid grid-cols-2 gap-4">
              <StatCard label="Anos de experiência" value="6+" />
              <StatCard label="Projetos entregues" value="50+" />
              <StatCard label="Clientes satisfeitos" value="15+" fullWidth />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  value: string;
  label: string;
  fullWidth?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, fullWidth }) => (
  <div 
    className={`card ${fullWidth ? 'col-span-2' : ''}`}
    style={{ textAlign: 'center', padding: 'var(--space-xl)' }}
  >
    <div style={{ 
      fontSize: 'var(--text-4xl)', 
      color: 'var(--color-accent)', 
      marginBottom: 'var(--space-xs)',
      fontWeight: 700
    }}>{value}</div>
    <div style={{ 
      color: 'var(--color-text-secondary)', 
      fontSize: 'var(--text-sm)'
    }}>{label}</div>
  </div>
);
