import React, { memo } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const footerLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:fulano@email.com', label: 'Email' },
];

export const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ padding: 'var(--space-xl) 0', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--space-lg)' }} className="md:flex-row">
          <div style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}>
            © {currentYear} Fulano. Todos os direitos reservados.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-lg)' }}>
            {footerLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--color-text-secondary)', transition: 'color var(--transition-base)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
                aria-label={label}
              >
                <Icon size={20} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
