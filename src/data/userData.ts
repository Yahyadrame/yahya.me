import { Github, Linkedin, Link2Icon } from "lucide-react";

export const personalInfo = {
  name: "Yaya DRAME",
  alias: "YHD",
  shortAlias: "YH",
  location: "Ziguinchor, Sénégal",
  role: "Développeur Full Stack",
  roles: ["Développeur Full Stack", "Explorateur Tech", "Passionné de Linux"],
  college: "Université Assane Seck de Ziguinchor (UASZ)",
  collegeUrl: "https://uasz.sn/",
  avatarUrl: "/assets/ME.jpg",
  status: "Disponible pour travailler",
  aboutText:
    "Passionné par le développement logiciel et les nouvelles technologies, je conçois des applications web modernes, performantes et évolutives. J'aime transformer des idées en solutions numériques concrètes en accordant une attention particulière à l'architecture, à la qualité du code et à l'expérience utilisateur. Toujours en apprentissage, je relève avec enthousiasme les défis techniques liés au développement full stack et aux systèmes distribués.",
  aboutText1:
    "Je suis Yaya DRAME, basé à Ziguinchor, Sénégal. Je suis étudiant à ",
  aboutText2:
    "\n\nJe conçois et développe des applications full-stack modernes, en mettant l'accent sur la performance, la maintenabilité et l'expérience utilisateur. J'ai un intérêt particulier pour les architectures évolutives, les systèmes distribués et les solutions logicielles robustes.\n\nMon travail consiste à transformer des problèmes complexes en solutions simples, efficaces et concrètes. J'accorde une attention particulière à la qualité du code, à la structure des systèmes et aux bonnes pratiques de développement.\n\nJ'ai également un intérêt croissant pour l'Intelligence Artificielle, que j'explore progressivement pour l'intégrer dans des projets futurs.",
};

// removed react-icons
export const fetchData = [
  { label: "Utilisateur", value: "yhd@terminal" },
  { label: "OS", value: "Linux" },
  { label: "Hôte", value: "Machine de Yaya" },
  { label: "Noyau", value: "Custom Kernel" },
  { label: "Paquets", value: "Nombreux" },
  { label: "Shell", value: "zsh/bash" },
  { label: "CPU", value: "Processeur (x) @ GHz" },
  { label: "GPU", value: "Carte Graphique" },
  { label: "Mémoire", value: "RAM" },
  { label: "Temps d'activité", value: "X heures" },
];

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "https://cdn.simpleicons.org/react" },
      { name: "Vite", icon: "https://cdn.simpleicons.org/vite" },
      { name: "TailwindCSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
      {
        name: "Next.js",
        icon: "https://cdn.simpleicons.org/nextdotjs",
        invertDark: true,
      },
      {
        name: "Shadcn-UI",
        icon: "https://cdn.simpleicons.org/shadcnui",
        invertDark: true,
      },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
      { name: "Angular", icon: "https://cdn.simpleicons.org/angular" },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter" },
      { name: "Android (Java)", icon: "https://cdn.simpleicons.org/android" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
      {
        name: "Express.js",
        icon: "https://cdn.simpleicons.org/express",
        invertDark: true,
      },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
      { name: "Spring Boot", icon: "https://cdn.simpleicons.org/spring" },
      { name: "NestJS", icon: "https://cdn.simpleicons.org/nestjs" },
      { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel" },
    ],
  },
  {
    category: "Outils",
    items: [
      { name: "Git", icon: "https://cdn.simpleicons.org/git" },
      { name: "Python", icon: "https://cdn.simpleicons.org/python" },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
      {
        name: "Prisma",
        icon: "https://cdn.simpleicons.org/prisma",
        invertDark: true,
      },
      { name: "Redux/Zustand", icon: "https://cdn.simpleicons.org/redux" },
      { name: "Drizzle ORM", icon: "https://cdn.simpleicons.org/drizzle" },
      { name: "Hibernate", icon: "https://cdn.simpleicons.org/hibernate" },
    ],
  },
];

export const facts = [
  "Étudiant",
  "Passionné de tech",
  "Apprenant",
  "Passionné de Linux",
  "Développeur Full Stack",
];

export const timeline = [
  {
    year: "2026",
    detail:
      "Concentration sur des projets avancés et la préparation à une insertion professionnelle dans le développement full-stack.",
    more: "Développement d'applications web et backend de niveau production, approfondissement des architectures microservices, DevOps et exploration des solutions basées sur l’IA.",
  },
  {
    year: "2025",
    detail:
      "Progression vers des technologies modernes du développement web et exploration de l'Intelligence Artificielle.",
    more: "Création de projets full-stack, utilisation de frameworks modernes et intégration progressive de fonctionnalités intelligentes dans les applications.",
  },
  {
    year: "2024",
    detail:
      "Renforcement des compétences en développement web full-stack et en architecture logicielle.",
    more: "Travail sur des projets backend et frontend, consommation d’API REST, et apprentissage des bases des systèmes évolutifs.",
  },
  {
    year: "2023",
    detail:
      "Début du développement de projets web et découverte des frameworks modernes.",
    more: "Premiers projets full-stack, introduction aux bases de données, et compréhension des concepts client-serveur.",
  },
  {
    year: "2022",
    detail:
      "Début du parcours en informatique et apprentissage des bases de la programmation.",
    more: "Découverte de la logique de programmation, des langages de base et réalisation de petits projets pour renforcer les fondamentaux.",
  },
];

export const contactItems = [
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Yahyadrame",
    href: "https://github.com/Yahyadrame",
    color: "text-foreground",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/yahyadrame",
    href: "https://www.linkedin.com/in/yaya-drame-8340582b2/",
    color: "text-brand-caribbean",
  },
  {
    icon: Link2Icon,
    label: "Discord",
    value: "Discord",
    href: "https://discord.com/users/1514567871303258161",
    color: "text-indigo-500",
  },
];

export const projectData = [
  {
    name: "Microservices Architecture",
    description:
      "Architecture microservices complète avec API Gateway, Discovery Server, Config Server, communication gRPC et GraphQL, et un Dashboard Angular 19 moderne.",
    tech: ["Spring Boot", "Angular 19", "MongoDB", "gRPC", "GraphQL", "Docker", "Eureka"],
    github: "https://github.com/Yahyadrame/microservice-project.git",
    category: "Backend / Fullstack",
  },
  {
    name: "SUSTPA",
    description:
      "Système Unifié de Suivi et de Traçabilité des Projets Académiques : Plateforme centralisée de gestion du cycle de vie des projets de fin de cycle (UASZ), avec suivi à distance et versionnement des livrables.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "WebSockets", "RBAC"],
    github: "https://github.com/Yahyadrame/sustpa.git",
    category: "Web / Fullstack",
  },
  {
    name: "Xaaliss",
    description:
      "Application mobile de gestion financière et de suivi budgétaire, développée durant le Master 1.",
    tech: ["Android Studio", "Java", "XML", "SQLite"],
    github: "https://github.com/Yahyadrame/Dev_Mobile_M1/tree/main/Xaaliss",
    category: "Mobile",
  },
  {
    name: "Recipes App",
    description:
      "Application de catalogue de recettes de cuisine avec gestion d'affichage dynamique.",
    tech: ["Android Studio", "Java", "RecyclerView", "XML"],
    github: "https://github.com/Yahyadrame/Dev_Mobile_M1/tree/main/RecipesApp",
    category: "Mobile",
  },
  {
    name: "Android M1 Labs",
    description:
      "Collection complète de projets d'apprentissage couvrant les fondamentaux d'Android : Intents, RecyclerView, Toast, et gestion d'activités.",
    tech: ["Android Studio", "Java", "Android SDK"],
    github: "https://github.com/Yahyadrame/Dev_Mobile_M1",
    category: "Mobile",
  },
];

export const resume = {
  "full-stack-developer": "/CV_Yaya_Drame.pdf",
};
