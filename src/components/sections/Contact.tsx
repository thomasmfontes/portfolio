import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import React, { memo, useState } from 'react';
import { SectionHeader } from './About';

const contactLinks = [
  {
    icon: Mail,
    label: 'E-mail',
    value: 'thomas@email.com',
    href: 'mailto:thomas@email.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: '/in/fulano-dev',
    href: 'https://linkedin.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@fulanodev',
    href: 'https://github.com',
  },
];

export const Contact: React.FC = memo(() => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  return (
    <section id="contato" className="section" style={{ background: 'var(--color-surface)' }}>
      <div className="container">
        <SectionHeader
          title="Vamos Conversar?"
          description="Estou sempre aberto a novos desafios e oportunidades"
        />

        <div className="grid-12" style={{ maxWidth: '1000px', margin: '0 auto', gridTemplateColumns: '1fr', gap: 'var(--space-xl)' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 style={{ marginBottom: 'var(--space-md)' }}>Entre em contato</h3>
              <p style={{ lineHeight: 'var(--lh-relaxed)' }}>
                Seja para discutir um projeto, oportunidade de trabalho ou apenas trocar ideias 
                sobre tecnologia, ficarei feliz em conversar!
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              {contactLinks.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="contact-card"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-md)',
                    padding: 'var(--space-md)',
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-lg)',
                    transition: 'all var(--transition-base)',
                    textDecoration: 'none'
                  }}
                >
                  <div className="contact-icon-bg" style={{
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(0, 213, 255, 0.1)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--color-accent)'
                  }}>
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <div className="contact-link-label" style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}>{label}</div>
                    <div className="contact-link-value" style={{ color: 'var(--color-text-primary)', fontWeight: 500 }}>{value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="card">
              <h3 style={{ marginBottom: 'var(--space-lg)' }}>Envie uma mensagem</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" style={{ display: 'block', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-xs)', fontSize: 'var(--text-sm)' }}>
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    style={{
                      width: '100%',
                      padding: 'var(--space-sm) var(--space-md)',
                      background: 'var(--color-dark)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--color-text-primary)',
                      fontSize: 'var(--text-base)',
                      transition: 'all var(--transition-base)'
                    }}
                    placeholder="Seu nome completo"
                    aria-label="Seu nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" style={{ display: 'block', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-xs)', fontSize: 'var(--text-sm)' }}>
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    style={{
                      width: '100%',
                      padding: 'var(--space-sm) var(--space-md)',
                      background: 'var(--color-dark)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--color-text-primary)',
                      fontSize: 'var(--text-base)',
                      transition: 'all var(--transition-base)'
                    }}
                    placeholder="seu@email.com"
                    aria-label="Seu e-mail"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" style={{ display: 'block', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-xs)', fontSize: 'var(--text-sm)' }}>
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    style={{
                      width: '100%',
                      padding: 'var(--space-sm) var(--space-md)',
                      background: 'var(--color-dark)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--color-text-primary)',
                      fontSize: 'var(--text-base)',
                      transition: 'all var(--transition-base)',
                      resize: 'none'
                    }}
                    placeholder="Descreva seu projeto ou ideia..."
                    aria-label="Sua mensagem"
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm">
                    Mensagem enviada com sucesso! Obrigado por entrar em contato.
                  </div>
                )}
                
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                  disabled={submitStatus === 'success'}
                >
                  <Send size={20} aria-hidden="true" />
                  Enviar mensagem
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';
