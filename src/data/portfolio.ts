import { Project } from '../components/sections/Projects';
import { Experience } from '../components/sections/Experience';
import { Testimonial } from '../components/sections/Testimonials';

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Plataforma E-commerce',
    description: 'Sistema completo de e-commerce com carrinho, checkout e painel administrativo.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1718157582118-f04597eaae56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBwbGF0Zm9ybSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjU4OTQyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'App de Produtividade',
    description: 'Aplicativo mobile para gerenciamento de tarefas e produtividade pessoal.',
    tags: ['React Native', 'TypeScript', 'Firebase'],
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY1ODQ5MjIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'API RESTful',
    description: 'API escalável para gerenciamento de recursos com autenticação JWT.',
    tags: ['Node.js', 'Express', 'MongoDB'],
    category: 'API',
    image: 'https://images.unsplash.com/photo-1623282033815-40b05d96c903?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGklMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzY1OTIwMjU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'Dashboard Analytics',
    description: 'Painel de análise de dados com gráficos interativos e relatórios em tempo real.',
    tags: ['React', 'Recharts', 'Tailwind'],
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1674897506953-2b586496c53c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjU4Njg5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 5,
    title: 'Sistema com IA',
    description: 'Integração de machine learning para análise preditiva e automação.',
    tags: ['Python', 'TensorFlow', 'FastAPI'],
    category: 'IA',
    image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjU4NjYzNTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 6,
    title: 'Cloud Infrastructure',
    description: 'Arquitetura serverless na nuvem com CI/CD automatizado.',
    tags: ['Azure', 'Docker', 'Kubernetes'],
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1765125173333-8b1015d6c411?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdHxlbnwxfHx8fDE3NjU5MjAyNTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    demoUrl: '#',
    githubUrl: '#',
  },
];

export const experiencesData: Experience[] = [
  {
    role: 'Senior Developer',
    company: 'TechCorp Inc.',
    period: '2022 - Presente',
    achievements: [
      'Liderança técnica de equipe de 8 desenvolvedores',
      'Redução de 40% no tempo de carregamento de aplicações',
      'Implementação de arquitetura escalável que suporta 100k usuários simultâneos',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'StartupXYZ',
    period: '2020 - 2022',
    achievements: [
      'Desenvolvimento do MVP em 3 meses, resultando em funding de $2M',
      'Criação de 15+ features críticas para o produto',
      'Migração para cloud, economizando 60% em custos de infraestrutura',
    ],
  },
  {
    role: 'Junior Developer',
    company: 'AgencyABC',
    period: '2018 - 2020',
    achievements: [
      'Entrega de 30+ projetos para clientes nacionais e internacionais',
      'Desenvolvimento de sistema de design reutilizável',
      'Mentoria de 5 estagiários',
    ],
  },
];

export const testimonialsData: Testimonial[] = [
  {
    name: 'Maria Silva',
    role: 'Product Manager',
    company: 'TechCorp',
    content: 'Profissional excepcional. Entrega sempre com qualidade e no prazo, além de ter uma comunicação clara e objetiva.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
  },
  {
    name: 'João Santos',
    role: 'CTO',
    company: 'StartupXYZ',
    content: 'Sua capacidade técnica e visão de produto fizeram toda a diferença no nosso crescimento. Recomendo sem hesitação.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
  },
  {
    name: 'Ana Costa',
    role: 'Tech Lead',
    company: 'AgencyABC',
    content: 'Um desenvolvedor que realmente se importa com a qualidade do código e a experiência do usuário final. Trabalhar com ele foi ótimo.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
  },
];
