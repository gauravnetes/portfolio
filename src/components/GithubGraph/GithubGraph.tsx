'use client';

import { GitHubCalendar } from 'react-github-calendar';
import { useTheme } from 'next-themes';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import styles from './GithubGraph.module.css';
import { useEffect, useState } from 'react';

export function GithubGraph() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <section className={`section ${styles.section}`} aria-labelledby="github-heading">
      <div className="container">
        <RevealOnScroll>
          <SectionHeader label="// my commits" title="GitHub Contributions" id="github-heading" />
        </RevealOnScroll>
        
        <RevealOnScroll>
          <div className={styles.graphContainer}>
            {mounted && (
              <GitHubCalendar 
                username="gauravnetes" 
                colorScheme={resolvedTheme === 'dark' ? 'dark' : 'light'}
                blockSize={14}
                blockMargin={4}
                fontSize={14}
              />
            )}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
