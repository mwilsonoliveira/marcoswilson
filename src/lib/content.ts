export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

type Content = {
  nav: { label: string; href: string }[];
  hero: {
    floatingLabel: string;
    title: string;
    intro: string;
    availability: string;
    primaryCta: string;
    secondaryCta: string;
  };
  about: { kicker: string; title: string; paragraphs: string[]; stats: { startYear: number; label: string }[] };
  skills: { title: string; intro: string; groups: { title: string; items: string[] }[] };
  experience: {
    title: string;
    intro: string;
    roles: { company: string; role: string; period: string; location: string; description: string }[];
    transition: string;
    fullProfile: string;
  };
  projects: {
    title: string;
    intro: string;
    liveLabel: string;
    sourceLabel: string;
    items: { name: string; label: string; description: string; stack: string[]; href: string; source?: string }[];
  };
  github: { title: string; intro: string; profile: string; stars: string; updated: string; empty: string };
  contact: { eyebrow: string; title: string; body: string; email: string; linkedin: string; github: string };
  footer: string;
};

export const content: Record<Locale, Content> = {
  pt: {
    nav: [
      { label: "Sobre", href: "about" },
      { label: "Competências", href: "skills" },
      { label: "Experiência", href: "experience" },
      { label: "Projetos", href: "projects" },
      { label: "GitHub", href: "github" },
      { label: "Contato", href: "contact" },
    ],
    hero: {
      floatingLabel: "Transformando ideias em realidade",
      title: "Desenvolvo produtos digitais de ponta a ponta.",
      intro: "Desenvolvedor Full-Stack com foco em experiências web rápidas, APIs robustas e produtos que resolvem problemas reais.",
      availability: "Aberto a oportunidades remotas ou híbridas",
      primaryCta: "Conheça meu trabalho",
      secondaryCta: "Baixar currículo",
    },
    about: {
      kicker: "Sobre mim",
      title: "Código com contexto, produto com propósito.",
      paragraphs: [
        "Minha trajetória em tecnologia começou no suporte a hardware, software e SQL. Essa base me ensinou a investigar problemas de verdade antes de propor soluções.",
        "Nos últimos anos, concentrei minha atuação no desenvolvimento full-stack com React, React Native, Next.js, Node.js e TypeScript, contribuindo em produtos para os setores agrícola, calçadista, varejista e de saúde.",
        "Gosto de transformar protótipos em interfaces cuidadosas, integrar APIs e construir serviços preparados para evoluir com o negócio.",
      ],
      stats: [
        { startYear: 2012, label: "anos em tecnologia" },
        { startYear: 2019, label: "anos criando produtos" },
        { startYear: 2021, label: "anos em web, mobile e APIs" },
      ],
    },
    skills: {
      title: "Competências",
      intro: "Tecnologias e práticas que uso para transformar uma ideia em software pronto para produção.",
      groups: [
        { title: "Front-end", items: ["React", "Next.js", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Figma"] },
        { title: "Mobile", items: ["React Native", "Expo", "APIs REST", "Interfaces responsivas"] },
        { title: "Back-end", items: ["Node.js", "NestJS", "Prisma", "SQL", "Autenticação", "Integrações"] },
        { title: "Engenharia", items: ["Git", "Code review", "Scrum", "Clean Code", "CI/CD", "Vercel"] },
      ],
    },
    experience: {
      title: "Experiência",
      intro: "Uma trajetória construída entre produto, colaboração e evolução técnica contínua.",
      roles: [
        { company: "AFL Consultores Associados", role: "Desenvolvedor Full-Stack", period: "abr 2024 — ago 2026", location: "São Leopoldo, RS", description: "Desenvolvimento e evolução de soluções full-stack, conectando interfaces, regras de negócio e persistência de dados." },
        { company: "Goclin", role: "Desenvolvedor Full-Stack", period: "nov 2023 — abr 2024", location: "Novo Hamburgo, RS", description: "Atuação no desenvolvimento de aplicações web e integração entre front-end, APIs e banco de dados." },
        { company: "Paipe | Tecnologia e Inovação", role: "Desenvolvedor Front-end", period: "mar 2021 — set 2023", location: "Campo Bom, RS", description: "Aplicações React e React Native com TypeScript, integração de APIs REST, colaboração com back-end Node.js e implementação de interfaces a partir do Figma em equipes ágeis." },
        { company: "Unimed Vale do Sinos", role: "Analista Web Júnior", period: "set 2020 — mar 2021", location: "Novo Hamburgo, RS", description: "Transição para desenvolvimento web após uma sólida trajetória interna em suporte de sistemas e infraestrutura." },
      ],
      fullProfile: "Perfil completo",
      transition: "De 2012 a 2020, atuei em suporte de sistemas e infraestrutura na Service IT e na Unimed Vale do Sinos — uma base que ainda orienta meu olhar para confiabilidade, diagnóstico e experiência do usuário.",
    },
    projects: {
      title: "Projetos em destaque",
      intro: "Produtos completos em que arquitetura, experiência e entrega caminham juntas.",
      liveLabel: "Ver projeto",
      sourceLabel: "Código",
      items: [
        { name: "Hugg", label: "Produto social", description: "Plataforma que conecta animais desabrigados a novos lares, com autenticação, gestão de anúncios, uploads e uma experiência pensada para tutores e organizações.", stack: ["Next.js", "TypeScript", "Prisma", "Turso", "Vercel Blob"], href: "https://huggapp.vercel.app", source: "https://github.com/mwilsonoliveira/hugg" },
        { name: "Mr. Stream", label: "Plataforma SaaS", description: "Ecossistema para streamers com área pública, painel administrativo, pagamentos, campanhas de email, integrações com YouTube e notificações em tempo real.", stack: ["Next.js", "React", "Turso", "Stripe", "Resend"], href: "https://www.mrstream.com.br" },
      ],
    },
    github: { title: "Código em movimento", intro: "Uma seleção atualizada dos meus repositórios públicos mais recentes.", profile: "Ver perfil completo", stars: "estrelas", updated: "Atualizado", empty: "Não foi possível carregar os projetos agora. Visite meu perfil no GitHub." },
    contact: { eyebrow: "Vamos conversar?", title: "Estou disponível para o próximo desafio.", body: "Se você está construindo um produto digital e procura alguém que entenda tanto a interface quanto o que acontece por trás dela, mande uma mensagem.", email: "Enviar email", linkedin: "Conectar no LinkedIn", github: "Acompanhar no GitHub" },
    footer: "Projetado e desenvolvido por Marcos Wilson.",
  },
  en: {
    nav: [
      { label: "About", href: "about" },
      { label: "Skills", href: "skills" },
      { label: "Experience", href: "experience" },
      { label: "Projects", href: "projects" },
      { label: "GitHub", href: "github" },
      { label: "Contact", href: "contact" },
    ],
    hero: {
      floatingLabel: "shipping ideas",
      title: "I build digital products from end to end.",
      intro: "Full-Stack Developer focused on fast web experiences, robust APIs and products that solve real problems.",
      availability: "Open to remote or hybrid opportunities",
      primaryCta: "Explore my work",
      secondaryCta: "Download résumé",
    },
    about: {
      kicker: "About me",
      title: "Code with context, products with purpose.",
      paragraphs: [
        "My path in technology started in hardware, software and SQL support. That background taught me to investigate real problems before proposing solutions.",
        "In recent years, I have focused on full-stack development with React, React Native, Next.js, Node.js and TypeScript, contributing to products across agriculture, footwear, retail and healthcare.",
        "I enjoy turning prototypes into thoughtful interfaces, integrating APIs and building services ready to evolve with the business.",
      ],
      stats: [
        { startYear: 2012, label: "years in technology" },
        { startYear: 2019, label: "years building products" },
        { startYear: 2021, label: "years in web, mobile and APIs" },
      ],
    },
    skills: {
      title: "Skills",
      intro: "Technologies and practices I use to turn an idea into production-ready software.",
      groups: [
        { title: "Front-end", items: ["React", "Next.js", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Figma"] },
        { title: "Mobile", items: ["React Native", "Expo", "REST APIs", "Responsive interfaces"] },
        { title: "Back-end", items: ["Node.js", "NestJS", "Prisma", "SQL", "Authentication", "Integrations"] },
        { title: "Engineering", items: ["Git", "Code review", "Scrum", "Clean Code", "CI/CD", "Vercel"] },
      ],
    },
    experience: {
      title: "Experience",
      intro: "A career built around product thinking, collaboration and continuous technical growth.",
      roles: [
        { company: "AFL Consultores Associados", role: "Full-Stack Developer", period: "Apr 2024 — Aug 2026", location: "São Leopoldo, Brazil", description: "Developed and evolved full-stack solutions, connecting interfaces, business rules and data persistence." },
        { company: "Goclin", role: "Full-Stack Developer", period: "Nov 2023 — Apr 2024", location: "Novo Hamburgo, Brazil", description: "Worked on web applications and the integration between front-end, APIs and databases." },
        { company: "Paipe | Tecnologia e Inovação", role: "Front-end Developer", period: "Mar 2021 — Sep 2023", location: "Campo Bom, Brazil", description: "Built React and React Native applications with TypeScript, integrated REST APIs, collaborated on Node.js back-ends and implemented Figma designs in agile teams." },
        { company: "Unimed Vale do Sinos", role: "Junior Web Analyst", period: "Sep 2020 — Mar 2021", location: "Novo Hamburgo, Brazil", description: "Transitioned into web development after a solid internal career in systems support and infrastructure." },
      ],
      fullProfile: "Full profile",
      transition: "From 2012 to 2020, I worked in systems support and infrastructure at Service IT and Unimed Vale do Sinos — a foundation that still shapes how I approach reliability, diagnostics and user experience.",
    },
    projects: {
      title: "Featured projects",
      intro: "End-to-end products where architecture, experience and delivery move together.",
      liveLabel: "View project",
      sourceLabel: "Source",
      items: [
        { name: "Hugg", label: "Social product", description: "A platform that connects homeless animals with new families, featuring authentication, listing management, uploads and an experience designed for owners and organizations.", stack: ["Next.js", "TypeScript", "Prisma", "Turso", "Vercel Blob"], href: "https://huggapp.vercel.app", source: "https://github.com/mwilsonoliveira/hugg" },
        { name: "Mr. Stream", label: "SaaS platform", description: "An ecosystem for streamers with a public site, admin dashboard, payments, email campaigns, YouTube integrations and real-time notifications.", stack: ["Next.js", "React", "Turso", "Stripe", "Resend"], href: "https://www.mrstream.com.br" },
      ],
    },
    github: { title: "Code in motion", intro: "An always-fresh selection of my latest public repositories.", profile: "View full profile", stars: "stars", updated: "Updated", empty: "Projects could not be loaded right now. Visit my GitHub profile instead." },
    contact: { eyebrow: "Let's talk", title: "I'm available for the next challenge.", body: "If you're building a digital product and looking for someone who understands both the interface and what happens behind it, send me a message.", email: "Send an email", linkedin: "Connect on LinkedIn", github: "Follow on GitHub" },
    footer: "Designed and developed by Marcos Wilson.",
  },
};
