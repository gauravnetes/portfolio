export type ProjectCategory = 'backend' | 'fullstack' | 'ai';

export type Project = {
  id: string;
  name: string;
  description: string;
  tags: string[];
  categories: ProjectCategory[];
  sourceUrl: string;
  liveUrl?: string;
  videoUrl?: string;
};

export const projects: Project[] = [
  {
    id: 'agentrx',
    name: 'AgentRX',
    description:
      'High-performance, multi-agent orchestration pipeline for autonomous pharmaceutical drug repurposing. Reduces R&D discovery cycles by parallelizing clinical and market intelligence gathering.',
    tags: ['FastAPI', 'LangGraph', 'Python', 'Celery', 'Redis', 'Groq API'],
    categories: ['ai', 'fullstack'],
    sourceUrl: 'https://github.com/gauravnetes/AgentRX',
    videoUrl: 'https://youtu.be/ObaVUK74-nI',
  },
  {
    id: 'botblocks',
    name: 'BotBlocks',
    description:
      'No-code chatbot builder platform with drag-and-drop workflow creation, enabling non-technical users to design multi-step AI conversations without writing code.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Gemini API'],
    categories: ['fullstack'],
    sourceUrl: 'https://github.com/gauravnetes/BotBlocks',
    videoUrl: 'https://youtu.be/P9k2Z8owhtg', // Using YouTube embed format for testing
  },
  {
    id: 'optiengine',
    name: 'OptiEngine',
    description:
      'Domain-aware MCP compliance proxy server that intercepts IDE prompts and rewrites them against a RAG pipeline of organizational coding standards before AI generation.',
    tags: ['Python', 'FastAPI', 'ChromaDB', 'Next.js', 'Groq API'],
    categories: ['ai', 'backend'],
    sourceUrl: 'https://github.com/gauravnetes/OptiEngine',
  },
  {
    id: 'gocaskdb',
    name: 'go-cask-db',
    description:
      'Production-grade LSM-tree custom key-value storage engine built from first principles. Features thread-safe concurrent access, binary serialization, and a background compactor.',
    tags: ['Go', 'TCP', 'Docker'],
    categories: ['backend'],
    sourceUrl: 'https://github.com/gauravnetes/go-cask-db',
  },
  {
    id: 'chaosmiddleware',
    name: 'Chaos Middleware',
    description:
      'An npm middleware package for injecting configurable network latency, random 5xx errors, and request drop simulation into Express.js apps for local stress-testing.',
    tags: ['Node.js', 'Express.js', 'npm'],
    categories: ['backend'],
    sourceUrl: 'https://github.com/gauravnetes/chaos-middleware',
  }, 
  {
    id: 'mochiai',
    name: 'Mochi.ai',
    description:
      'Compassionate, AI-powered mental health companion. Features customizable AI personas, mood logging, persistent conversations, and secure authentication.',
    tags: ['React', 'FastAPI', 'Gemini API', 'Clerk'],
    categories: ['ai', 'fullstack'],
    sourceUrl: 'https://github.com/gauravnetes/mental-health-chatbot',
  },

  {
    id: 'timesync',
    name: 'TimeSync',
    description:
      'A day-to-day meeting scheduler software inspired by Calendly, designed to simplify appointment booking, availability management, and scheduling workflows.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    categories: ['fullstack'],
    sourceUrl: 'https://github.com/gauravnetes/TimeSync',
  },

  {
    id: 'chatcom',
    name: 'Chatcom',
    description:
      'Real-time chat application enabling instant communication between users, powered by WebSockets for seamless message delivery and active presence tracking.',
    tags: ['Socket.io', 'Node.js', 'React'],
    categories: ['fullstack'],
    sourceUrl: 'https://github.com/gauravnetes/chat-app',
  },

  {
    id: 'youtubebackend',
    name: 'YouTube Backend Clone',
    description:
      'A robust backend architecture for a video-sharing platform modeled after YouTube, implementing standard coding practices, video management, and scalable API design.',
    tags: ['Node.js', 'Express.js', 'MongoDB'],
    categories: ['backend'],
    sourceUrl: 'https://github.com/gauravnetes/youtube-backend',
  },
];