import { Project } from '../components/sections/Projects';
import { Experience } from '../components/sections/Experience';
import { Testimonial } from '../components/sections/Testimonials';

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'diario',
    description: 'Aplicação web publicada no Vercel.',
    tags: [],
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=1080&q=80&auto=format&fit=crop',
    demoUrl: 'https://diario-lyart.vercel.app',
    githubUrl: 'https://github.com/thomasmfontes/diario',
  },
  {
    id: 2,
    title: 'lg-ai',
    description: 'Aplicação web publicada no Vercel.',
    tags: [],
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1080&q=80&auto=format&fit=crop',
    demoUrl: 'https://lg-ai-inky.vercel.app',
    githubUrl: 'https://github.com/thomasmfontes/LG-AI',
  },
  {
    id: 3,
    title: 'challenge-4',
    description: 'Aplicação web publicada no Vercel.',
    tags: [],
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1080&q=80&auto=format&fit=crop',
    demoUrl: 'https://challenge-4-chi-five.vercel.app',
    githubUrl: 'https://github.com/thomasmfontes/challenge-4',
  },
  {
    id: 4,
    title: 'bus-manager',
    description: 'Aplicação web publicada no Vercel.',
    tags: [],
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1503505015343-9b33f742457a?w=1080&q=80&auto=format&fit=crop',
    demoUrl: 'https://bus-manager-navy.vercel.app',
    githubUrl: 'https://github.com/thomasmfontes/bus-manager',
  },
  {
    id: 5,
    title: 'global-solution-2',
    description: 'Aplicação web publicada no Vercel.',
    tags: [],
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1520975695914-1d5697a26b3d?w=1080&q=80&auto=format&fit=crop',
    demoUrl: 'https://global-solution-2-five.vercel.app',
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
