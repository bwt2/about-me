export type SkillsData = {
  category: string;
  skills: string[];
};

export const skills: SkillsData[] = [
  {
    category: 'Languages',
    skills: ['Java', 'Python', 'TypeScript', 'C++'],
  },
  {
    category: 'Frontend',
    skills: [
      'TailwindCSS',
      'Relay',
      'React',
      'React Router',
      'TypeScript',
      'Shadcn',
      'Vite',
      'Astro',
    ],
  },
  {
    category: 'Backend and Databases',
    skills: [
      'FastAPI',
      'GraphQL',
      'gRPC',
      'SQLAlchemy',
      'pgvector',
      'NestJS',
      'DrizzleORM',
      'PostgreSQL',
    ],
  },
  {
    category: 'Machine Learning and Data Science',
    skills: [
      'matplotlib',
      'numpy',
      'Jupyter',
      'PyTorch',
      'scikit-learn',
      'SQL',
    ],
  },
  {
    category: 'Robotics',
    skills: ['ROS 2', 'Foxglove'],
  },
  {
    category: 'DevOps',
    skills: ['Git', 'Docker', 'AWS', 'Github', 'Ubuntu'],
  },
  {
    category: 'Tooling',
    skills: ['ESLint', 'Prettier', 'Turborepo', 'uv', 'pnpm'],
  },
  {
    category: 'Graphics',
    skills: ['WebGL2'],
  },
  {
    category: 'Mobile',
    skills: ['React Native', 'Expo'],
  },
];
