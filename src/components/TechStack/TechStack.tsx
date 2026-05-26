import { techStack } from '@/data/techStack';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { SectionHeader } from '@/components/ui/SectionHeader';
import styles from './TechStack.module.css';

function KeyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <circle cx="12" cy="10" r="2" />
      <path d="M12 12v3" />
    </svg>
  );
}

function ApiIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="2" width="8" height="6" rx="1" />
      <path d="M12 8v3" />
      <path d="M6 15h12" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="18" r="3" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function PrismaIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 22h20L12 2z" />
      <path d="M12 2v20" />
    </svg>
  );
}

function DropletIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" />
      <path d="M12 8v4" />
    </svg>
  );
}

function getIcon(svgId: string) {
  switch (svgId) {
    case 'key': return <KeyIcon />;
    case 'api': return <ApiIcon />;
    case 'leaf': return <LeafIcon />;
    case 'prisma': return <PrismaIcon />;
    case 'droplet': return <DropletIcon />;
    case 'link': return <LinkIcon />;
    case 'network': return <NetworkIcon />;
    default: return null;
  }
}

export function TechStack() {
  return (
    <section id="stack" className="section" aria-labelledby="stack-heading">
      <div className="container">
        <RevealOnScroll>
          <SectionHeader label="// tools I build with" title="Tech Stack" id="stack-heading" />
        </RevealOnScroll>

        <div className={styles.grid}>
          {techStack.map((category, i) => (
            <RevealOnScroll key={category.id} delay={i * 60}>
              <div className={styles.category}>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
                <div className={styles.items}>
                  {category.items.map((item) => (
                    <div key={item.name} className={styles.item}>
                      {item.iconUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={item.iconUrl}
                          alt={item.name}
                          className={`${styles.icon} ${item.invertInDark ? styles.invertInDark : ''}`}
                          width={20}
                          height={20}
                          loading="lazy"
                        />
                      ) : (
                        <span className={styles.svgIcon}>{item.svgId && getIcon(item.svgId)}</span>
                      )}
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
