import { experiences } from '@/data/experience';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import styles from './Experience.module.css';

function TrophyIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7c0 6 6 8 6 8s6-2 6-8V2z" />
    </svg>
  );
}

function FlightIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L2.5 8l6.4 3.3L6 14l-3.2-.8c-.4-.1-.8.1-1 .4L1 15l4.6 2.4L8 22l1.4-.8c.3-.2.5-.6.4-1L9 17l2.7-2.9 3.3 6.4 1.2-1.2c.4-.2.7-.6.6-1.1z" />
    </svg>
  );
}

function TerminalIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  );
}

function MicroscopeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  );
}

function getIcon(name: string) {
  switch (name) {
    case 'trophy': return <TrophyIcon />;
    case 'flight': return <FlightIcon />;
    case 'terminal': return <TerminalIcon />;
    case 'microscope': return <MicroscopeIcon />;
    default: return <TerminalIcon />;
  }
}

export function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-heading">
      <div className="container">
        <RevealOnScroll>
          <SectionHeader label="// my journey" title="Hackathons & Experience" id="experience-heading" />
        </RevealOnScroll>

        <div className={styles.list}>
          {experiences.map((exp) => (
            <RevealOnScroll key={exp.id}>
              <div className={styles.item}>
                <div className={styles.logoWrapper}>
                  {exp.logo.startsWith('http') || exp.logo.startsWith('/') ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={exp.logo} alt={exp.company} className={styles.logo} />
                  ) : (
                    <span className={styles.svgLogo}>{getIcon(exp.logo)}</span>
                  )}
                </div>
                
                <div className={styles.content}>
                  <h3 className={styles.title}>{exp.title}</h3>
                  <div className={styles.company}>
                    {exp.link ? (
                      <a href={exp.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                        {exp.company}
                      </a>
                    ) : (
                      exp.company
                    )}
                  </div>
                  <p className={styles.description}>{exp.description}</p>
                </div>
                
                <div className={styles.date}>{exp.date}</div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
