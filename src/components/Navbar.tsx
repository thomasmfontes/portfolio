import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme }) => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      background: scrolled ? 'rgba(10, 14, 26, 0.95)' : 'rgba(10, 14, 26, 0.7)',
      backdropFilter: 'blur(16px)',
      borderBottom: `1px solid ${scrolled ? 'var(--color-border)' : 'transparent'}`,
      paddingTop: scrolled ? '12px' : '16px',
      paddingBottom: scrolled ? '12px' : '16px',
      transition: 'all var(--transition-base)',
      boxShadow: scrolled ? '0 4px 12px rgba(0, 0, 0, 0.15)' : 'none'
    }}>
      <div className="container">
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between'
        }}>
          <div style={{ 
            color: 'var(--color-text-primary)', 
            fontWeight: 700, 
            fontSize: scrolled ? 'var(--text-lg)' : 'var(--text-xl)',
            transition: 'font-size var(--transition-base)'
          }}>Thomas Dev</div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xl)' }}>
            <div style={{ display: 'none', gap: 'var(--space-lg)' }} className="md:flex">
              {[
                { label: 'Início', id: 'inicio' },
                { label: 'Sobre', id: 'sobre' },
                { label: 'Skills', id: 'skills' },
                { label: 'Projetos', id: 'projetos' },
                { label: 'Experiência', id: 'experiencia' },
                { label: 'Contato', id: 'contato' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  style={{
                    color: 'var(--color-text-secondary)',
                    transition: 'color var(--transition-base)',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <button
              onClick={onToggleTheme}
              style={{
                padding: 'var(--space-xs)',
                borderRadius: 'var(--radius-md)',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                cursor: 'pointer',
                transition: 'all var(--transition-base)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '40px',
                minHeight: '40px'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--color-accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--color-border)')}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={20} style={{ color: 'var(--color-accent)', display: 'block' }} />
              ) : (
                <Moon size={20} style={{ color: 'var(--color-accent)', display: 'block' }} />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
