/**
 * Configurações de temas
 */
export const themeConfig = {
  colors: {
    dark: {
      bg: '#0B1220',
      surface: '#111827',
      text: '#FFFFFF',
      textSecondary: '#94A3B8',
      accent: '#A8CFDE',
      accentHover: '#92C3D4',
    },
    light: {
      bg: '#FFFFFF',
      surface: '#F8F9FA',
      text: '#0F172A',
      textSecondary: '#64748B',
      accent: '#A8CFDE',
      accentHover: '#92C3D4',
    },
  },
} as const;

/**
 * Configurações de animations
 */
export const animationConfig = {
  defaultTransition: { duration: 0.5 },
  fastTransition: { duration: 0.3 },
  slowTransition: { duration: 0.7 },
} as const;

/**
 * Configurações de breakpoints
 */
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

/**
 * Configurações de projeto
 */
export const projectConfig = {
  name: 'Thomas Dev Portfolio',
  description: 'Portfólio de desenvolvedor full stack com React e TypeScript',
  author: 'Thomas',
  year: new Date().getFullYear(),
  siteUrl: 'https://thomasdev.com',
} as const;
