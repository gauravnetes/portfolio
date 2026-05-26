export type Experience = {
  id: string;
  title: string;
  company: string;
  date: string;
  description: string;
  logo: string;
  link?: string;
};

export const experiences: Experience[] = [
  {
    id: 'hackathon-win-may-2026',
    title: 'Hackathon Winner',
    company: 'Hack{o}lution',
    date: 'May 2026',
    description: 'Achieved a podium finish as the byproduct of continuous architectural refinement. Designed and deployed an innovative, scalable backend solution under a strict 48-hour deadline.',
    logo: 'trophy',
  },
  {
    id: 'hackthisfall-finalist',
    title: 'National Finalist (Top 10)',
    company: 'HackThisFall Finale, Bangalore',
    date: 'Dec 2025',
    description: 'Secured a spot in the Top 10 out of 125+ teams nationally, flying to Bangalore for the offline finale. Faced critical system bottlenecks during the final stretch—the most valuable and formative failure of my engineering journey.',
    logo: 'flight',
  },
  {
    id: 'hackathon-builder',
    title: 'Serial Hackathon Competitor',
    company: 'Diversion, MetaMorph, HackOasis & More',
    date: '2025 - 2026',
    description: 'Competed in 5+ hackathons. Transitioned from early unselected applications to consistently securing 4th and 5th positions by handling core backend architecture and API integrations for our team.',
    logo: 'terminal',
  },
  {
    id: 'community-lead',
    title: 'Web Dev Lead',
    company: 'Microsoft Students Ambassador - GNIT Chapter',
    date: '2025 - Present',
    description: 'Leading a 500+ developer community and organizing technical workshops, Hackathons etc.',
    logo: 'microscope',
  },
];