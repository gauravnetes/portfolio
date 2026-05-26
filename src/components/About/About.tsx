'use client';

import { useState } from 'react';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { SectionHeader } from '@/components/ui/SectionHeader';
import styles from './About.module.css';

const TIMELINE = [
  {
    year: '2026',
    items: [
      'Secured a podium finish in May after continuous team refinement.',
      'Consistently placed in the Top 5 across major hackathons.',
      'Stepped up project complexity, exploring distributed systems and AI-powered backends.',
    ],
  },
  {
    year: '2025',
    items: [
      'First 36-hour offline hackathon—officially fell in love with backend engineering.',
      'Top 10 National Finalist at HackThisFall in Bangalore.',
      'Faced the most needed failure of my career; rebuilt stronger.',
    ],
  },
  {
    year: '2024',
    items: [
      'Built first full-stack projects using React, Express, and Next.js.',
      'Faced multiple hackathon rejections; formed a core team and kept building.',
      'Discovered the real game of software development and collaboration.',
    ],
  },
  {
    year: '2023',
    items: [
      'Entered college and wrote my first lines of C++ and Python.',
      'Committed to diving deep into how technology actually works.',
      'The start of a lifelong passion for engineering.',
    ],
  },
];

export function About() {
  const [showOffTopic, setShowOffTopic] = useState(false);

  return (
    <section id="about" className={`section ${styles.section}`} aria-labelledby="about-heading">
      <div className="container">
        <RevealOnScroll>
          <SectionHeader label="// about me" title="The Story So Far" id="about-heading" />
        </RevealOnScroll>

        <div className={styles.grid}>
          <RevealOnScroll>
            <div className={styles.text}>
              <p>
                I&apos;m <strong>Gourav Chandra</strong>, a final-year Information Technology student. 
                I got into college back in 2023 with a burning passion for tech and a desire to go deep. 
                I started writing my very first lines of Python and C++, curious to understand how things actually worked. 
                By 2024, I had caught up with development, building small full-stack projects and APIs using React, Express, and Next.js.
              </p>
              <p>
                Then came the hackathons—or rather, the rejections. I applied relentlessly and didn&apos;t get selected for a single one initially. 
                But it taught me the real game. I formed a core team—we were nobodies then—and kept building. 
                Finally, in 2025, we got selected for our first 36-hour offline hackathon. 
                It didn&apos;t go well for us, but handling the backend segment during that pressure-cooker environment is exactly why I fell in love with Backend Engineering. 
                There&apos;s a certain magic in seeing core application logic come to life.
              </p>
              <p>
                After that, we never looked back. A major highlight was December 2025, when we got the call for the HackThisFall National Finale in Bangalore, 
                making it to the Top 10. It was my first time visiting the city, and my first time on a flight! 
                But the experience shattered us—despite having a functioning product, things took a turn against us in the end. 
                I still call it the most needed failure of my life.
              </p>
              <p>
                We bounced back in 2026. Our project levels leveled up massively, consistently securing 4th and 5th positions. 
                The Top 3 felt just out of reach until May 2026, when the day finally came: a Podium Finish. 
                It was the ultimate byproduct of continuous refinement and refusing to stop.
              </p>

              <div className={styles.offTopicContainer}>
                <button 
                  onClick={() => setShowOffTopic(!showOffTopic)}
                  className={styles.expandButton}
                  aria-expanded={showOffTopic}
                >
                  {showOffTopic ? 'Hide the off-topic stuff 🙈' : 'A little off-topic... 👀'}
                </button>
                
                {showOffTopic && (
                  <div className={styles.offTopicContent}>
                    <p>
                      Beyond the terminal, I&apos;ve already given my heart to Football—specifically Real Madrid and Cristiano Ronaldo. 
                      Watching them play isn&apos;t just a pastime; it&apos;s about witnessing elite mentality and sheer dedication.
                    </p>
                    <p>
                      I am deeply drawn to art and profound storytelling. I love getting lost in the soulful, mesmerizing Sufi music of 
                      legends like Nusrat Fateh Ali Khan and Rahat Fateh Ali Khan. When it comes to literature, I gravitate heavily toward 
                      historical fiction and classic literature. You&apos;ll often find me reading the works of Rabindranath Tagore, 
                      Bibhutibhushan Bandopadhyay, Sharatchandra Chattopadhyay, Satyajit Ray, Khaled Hosseini, and Alexandre Dumas.
                    </p>
                    <p>
                      I&apos;m also an admirer of great, poetic cinema. Some of my all-time favorite movies include <em>The Shawshank Redemption</em>, 
                      <em>Taare Zameen Par</em>, <em>Schindler&apos;s List</em>, <em>The Pursuit of Happyness</em>, <em>Pather Panchali</em>, 
                      <em>Children of Heaven</em>, <em>Into The Wild</em>, and <em>Forrest Gump</em>. To me, a beautifully told story is the ultimate art form.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className={styles.timeline}>
              <h3 className={styles.timelineTitle}>// the evolution</h3>
              <div className={styles.timelineList}>
                {TIMELINE.map(({ year, items }) => (
                  <div key={year} className={styles.timelineYear}>
                    <span className={styles.yearLabel}>{year}</span>
                    <ul className={styles.yearItems}>
                      {items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}