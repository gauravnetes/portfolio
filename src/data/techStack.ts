export type TechItem = {
  name: string;
  iconUrl?: string;
  svgId?: string;
  invertInDark?: boolean;
};

export type TechCategory = {
  id: string;
  title: string;
  items: TechItem[];
};

const DEVICONS = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

export const techStack: TechCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    items: [
      { name: 'JavaScript', iconUrl: `${DEVICONS}/javascript/javascript-original.svg` },
      { name: 'TypeScript', iconUrl: `${DEVICONS}/typescript/typescript-original.svg` },
      { name: 'C++', iconUrl: `${DEVICONS}/cplusplus/cplusplus-original.svg` },
      { name: 'Python', iconUrl: `${DEVICONS}/python/python-original.svg` },
      { name: 'Java', iconUrl: `${DEVICONS}/java/java-original.svg` },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    items: [
      { name: 'React', iconUrl: `${DEVICONS}/react/react-original.svg` },
      { name: 'Next.js', iconUrl: `${DEVICONS}/nextjs/nextjs-original.svg`, invertInDark: true },
      { name: 'HTML5', iconUrl: `${DEVICONS}/html5/html5-original.svg` },
      { name: 'CSS3', iconUrl: `${DEVICONS}/css3/css3-original.svg` },
      { name: 'Tailwind', iconUrl: `${DEVICONS}/tailwindcss/tailwindcss-original.svg` },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    items: [
      { name: 'Node.js', iconUrl: `${DEVICONS}/nodejs/nodejs-original.svg` },
      { name: 'Express.js', iconUrl: `${DEVICONS}/express/express-original.svg`, invertInDark: true },
      { name: 'FastAPI', iconUrl: `${DEVICONS}/fastapi/fastapi-original.svg` },
      { name: 'NextAuth', svgId: 'key' },
      { name: 'REST APIs', svgId: 'api' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & ORMs',
    items: [
      { name: 'MongoDB', iconUrl: `${DEVICONS}/mongodb/mongodb-original.svg` },
      { name: 'PostgreSQL', iconUrl: `${DEVICONS}/postgresql/postgresql-original.svg` },
      { name: 'Mongoose', svgId: 'leaf' },
      { name: 'Prisma', svgId: 'prisma' },
      { name: 'Drizzle', svgId: 'droplet' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Tools',
    items: [
      { name: 'Docker', iconUrl: `${DEVICONS}/docker/docker-original.svg` },
      { name: 'Git', iconUrl: `${DEVICONS}/git/git-original.svg` },
      { name: 'GitHub', iconUrl: `${DEVICONS}/github/github-original.svg`, invertInDark: true },
      { name: 'npm', iconUrl: `${DEVICONS}/npm/npm-original-wordmark.svg` },
    ],
  },
  {
    id: 'ai',
    title: 'AI / ML',
    items: [
      { name: 'LangChain', svgId: 'link' },
      { name: 'LangGraph', svgId: 'network' },
    ],
  },
];
