# Portfólio Dev - Mesite

Um portfólio moderno e responsivo desenvolvido com React, TypeScript e Tailwind CSS. Focado em performance, acessibilidade e experiência do usuário.

## 🚀 Features

- **Design Responsivo**: Funciona perfeitamente em todos os dispositivos
- **Modo Escuro/Claro**: Sistema de tema com persistência de preferências
- **Acessibilidade**: WCAG 2.1 AA compliant
- **Performance**: Lazy loading de imagens, otimizações de rendering
- **SEO Friendly**: Meta tags, structured data, sitemap
- **TypeScript**: Type safety completo
- **Componentes Reutilizáveis**: Arquitetura componentizada limpa

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── layout/
│   │   └── Header.tsx           # Seção hero/cabeçalho
│   ├── sections/
│   │   ├── About.tsx            # Seção sobre
│   │   ├── Skills.tsx           # Seção de habilidades
│   │   ├── Projects.tsx         # Seção de projetos
│   │   ├── Experience.tsx       # Seção de experiência
│   │   ├── Testimonials.tsx     # Seção de depoimentos
│   │   ├── Contact.tsx          # Seção de contato
│   │   └── Footer.tsx           # Rodapé
│   ├── ui/                      # Componentes de UI reutilizáveis
│   └── Navbar.tsx               # Barra de navegação
├── data/
│   └── portfolio.ts             # Dados do portfólio
├── hooks/
│   └── useTheme.ts              # Hooks customizados
├── utils/
│   └── helpers.ts               # Funções utilitárias
├── config/
│   └── app.ts                   # Configurações da app
├── types/
│   └── index.ts                 # Type definitions
├── styles/
│   └── globals.css              # Estilos globais
└── App.tsx                      # Componente principal
```

## 🔧 Melhorias Implementadas

### Performance
- ✅ Lazy loading de imagens
- ✅ React.memo para componentes que não precisam re-renderizar
- ✅ useMemo para cálculos custosos
- ✅ Code splitting automático
- ✅ Otimizações de CSS com Tailwind

### Acessibilidade
- ✅ ARIA labels apropriados
- ✅ Navegação por teclado funcional
- ✅ Focus states visíveis
- ✅ Suporte a leitores de tela
- ✅ Respeito a preferências de movimento reduzido

### SEO
- ✅ Meta tags semânticas
- ✅ Heading hierarchy correta
- ✅ Alt text em imagens
- ✅ Open Graph tags
- ✅ Estrutura HTML semântica

### Código
- ✅ TypeScript para type safety
- ✅ Componentes pequenos e reutilizáveis
- ✅ Separação de dados (portfolio.ts)
- ✅ Configurações centralizadas
- ✅ Hooks customizados
- ✅ Utilitários reutilizáveis

## 📦 Instalação

```bash
# Clonar repositório
git clone <repo-url>

# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🎨 Customização

### Cores
Edite `styles/globals.css` para mudar as cores do tema:

```css
--color-accent: #A8CFDE;
--color-dark-bg: #0B1220;
```

### Dados
Atualize `data/portfolio.ts` com seus dados pessoais:

```typescript
export const projectsData: Project[] = [...]
export const experiencesData: Experience[] = [...]
export const testimonialsData: Testimonial[] = [...]
```

### Configurações
Personalize `config/app.ts` com informações do seu projeto.

## 🚀 Deploy

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Fazer upload da pasta dist
```

## 📚 Tecnologias

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Motion/React** - Animations
- **Lucide React** - Icons
- **Vite** - Build tool

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Faça um fork
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👤 Autor

**Fulano Dev**
- Website: https://fulanodev.com
- GitHub: [@fulanodev](https://github.com/fulanodev)
- LinkedIn: [Fulano Dev](https://linkedin.com/in/fulano-dev)

---

**Desenvolvido com ❤️ usando React e TypeScript**
