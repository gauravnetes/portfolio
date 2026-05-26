'use client';

import { useState } from 'react';
import { Project, ProjectCategory } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import styles from './Projects.module.css';

type FilterOption = 'all' | ProjectCategory;

const FILTERS: { value: FilterOption; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'backend', label: 'Backend' },
  { value: 'fullstack', label: 'Full Stack' },
  { value: 'ai', label: 'AI / ML' },
];

export function ProjectFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<FilterOption>('all');

  const filtered = active === 'all' ? projects : projects.filter((p) => p.categories.includes(active));

  return (
    <>
      <div className={styles.filters} role="tablist" aria-label="Filter projects by category">
        {FILTERS.map(({ value, label }) => (
          <button
            key={value}
            className={`${styles.filterBtn} ${active === value ? styles.filterActive : ''}`}
            onClick={() => setActive(value)}
            role="tab"
            aria-selected={active === value}
            id={`filter-${value}`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className={styles.grid} role="tabpanel">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
