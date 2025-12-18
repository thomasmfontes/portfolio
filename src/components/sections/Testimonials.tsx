import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import React, { memo } from 'react';
import { SectionHeader } from './About';

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = memo(({ testimonials }) => {
  return (
    <section id="depoimentos" className="section">
      <div className="container">
        <SectionHeader
          title="Depoimentos"
          description="O que colegas e clientes dizem sobre trabalhar comigo"
        />

        <div style={{ 
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'var(--space-md)',
          maxWidth: '1100px',
          margin: '0 auto'
        }}
          className="md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.name}-${testimonial.company}`} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
});

Testimonials.displayName = 'Testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = memo(({ testimonial, index }) => {
  const { name, role, company, content, avatar } = testimonial;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card"
      style={{ 
        display: 'flex', 
        flexDirection: 'column',
        position: 'relative',
        height: '100%'
      }}
    >
      {/* Quote Icon com estilo destacado */}
      <div style={{
        position: 'absolute',
        top: 'var(--space-md)',
        right: 'var(--space-md)',
        width: '48px',
        height: '48px',
        background: 'rgba(0, 213, 255, 0.1)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
        className="md:top-lg md:right-lg md:w-14 md:h-14"
      >
        <Quote size={24} style={{ color: 'var(--color-accent)', opacity: 0.6 }} aria-hidden="true" />
      </div>
      
      {/* Conteúdo do depoimento */}
      <p style={{ 
        fontSize: 'var(--text-sm)', 
        lineHeight: 'var(--lh-relaxed)',
        color: 'var(--color-text-secondary)',
        fontStyle: 'italic',
        marginBottom: 'var(--space-lg)',
        flexGrow: 1,
        paddingRight: '56px'
      }}
        className="md:text-base md:mb-xl"
      >
        "{content}"
      </p>
      
      {/* Divisor visual */}
      <div style={{
        width: '32px',
        height: '2px',
        background: 'var(--color-accent)',
        borderRadius: '2px',
        marginBottom: 'var(--space-md)'
      }}
        className="md:w-10 md:h-0.75 md:mb-lg"
      />
      
      {/* Informações do autor */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}
        className="md:gap-md"
      >
        <div style={{
          position: 'relative',
          flexShrink: 0
        }}>
          <img
            src={avatar}
            alt={name}
            loading="lazy"
            style={{ 
              width: '48px', 
              height: '48px', 
              borderRadius: '50%', 
              objectFit: 'cover',
              border: '2px solid var(--color-border)'
            }}
            className="md:w-14 md:h-14"
          />
          {/* Badge de verificação */}
          <div style={{
            position: 'absolute',
            bottom: '-2px',
            right: '-2px',
            width: '18px',
            height: '18px',
            background: 'var(--color-accent)',
            borderRadius: '50%',
            border: '2px solid var(--color-surface)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
            className="md:w-5 md:h-5"
          >
            <svg width="9" height="7" viewBox="0 0 10 8" fill="none" className="md:w-2.5 md:h-2">
              <path d="M1 4L3.5 6.5L9 1" stroke="var(--color-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <div>
          <h4 style={{ 
            fontSize: 'var(--text-sm)', 
            fontWeight: 600,
            color: 'var(--color-text-primary)',
            marginBottom: '4px'
          }}
            className="md:text-base"
          >
            {name}
          </h4>
          <p style={{ 
            fontSize: 'var(--text-xs)', 
            color: 'var(--color-text-secondary)',
            lineHeight: 1.4
          }}
            className="md:text-sm"
          >
            {role}
          </p>
          <p style={{ 
            fontSize: '11px', 
            color: 'var(--color-accent)',
            fontWeight: 500
          }}
            className="md:text-xs"
          >
            {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
});

TestimonialCard.displayName = 'TestimonialCard';
