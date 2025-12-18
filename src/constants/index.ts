/**
 * Constantes do Portfólio
 */

export const NAVIGATION_ITEMS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
] as const;

export const SOCIAL_LINKS = {
  github: 'https://github.com/thomasdev',
  linkedin: 'https://linkedin.com/in/thomas-dev',
  email: 'thomas@email.com',
  twitter: 'https://twitter.com/thomasdev',
} as const;

export const PROJECT_CATEGORIES = ['All', 'Web', 'Mobile', 'API', 'IA'] as const;

export const SKILLS_CATEGORIES = [
  'Front-end',
  'Back-end',
  'Database',
  'Cloud & DevOps',
] as const;

export const ANIMATION_DELAYS = {
  none: 0,
  xs: 0.05,
  sm: 0.1,
  md: 0.15,
  lg: 0.2,
  xl: 0.3,
} as const;

/**
 * Mensagens
 */
export const MESSAGES = {
  success: 'Operação realizada com sucesso!',
  error: 'Algo deu errado. Tente novamente.',
  loading: 'Carregando...',
  empty: 'Nenhum item encontrado.',
  formSuccess: 'Mensagem enviada com sucesso!',
  formError: 'Erro ao enviar mensagem. Tente novamente.',
} as const;

/**
 * Validações
 */
export const VALIDATION = {
  MIN_NAME_LENGTH: 2,
  MAX_NAME_LENGTH: 100,
  MIN_MESSAGE_LENGTH: 10,
  MAX_MESSAGE_LENGTH: 1000,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
} as const;
