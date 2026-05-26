import { projects } from '@/data/projects';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { ProjectFilter } from './ProjectFilter';
import styles from './Projects.module.css';

export function Projects() {
  return (
    <section id="projects" className={`section ${styles.section}`} aria-labelledby="projects-heading">
      <div className="container">
        <RevealOnScroll>
          <SectionHeader label="// what I've built" title="Projects" id="projects-heading" />
        </RevealOnScroll>

        <RevealOnScroll>
          <ProjectFilter projects={projects} />
        </RevealOnScroll>

        <RevealOnScroll>
          <p className={styles.note}>
            🚧 More projects coming soon — updating regularly as I build and ship.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
