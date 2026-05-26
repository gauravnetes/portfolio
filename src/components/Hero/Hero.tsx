import Image from 'next/image';
import { Typewriter } from './Typewriter';
import { CodeCard } from './CodeCard';
import styles from './Hero.module.css';
import avatarImg from '@/../public/assets/avatar.png';

export function Hero() {
  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.bgGrid} aria-hidden="true" />
      <div className={styles.bgGradient} aria-hidden="true" />

      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={styles.avatarWrapper}>
            <Image
              src={avatarImg}
              alt="Gourav Chandra"
              width={120}
              height={120}
              className={styles.avatar}
              priority
            />
          </div>

          <h1 className={styles.name} id="hero-heading">
            Hi, I&apos;m <span className="gradient-text">Gourav Chandra</span>
          </h1>

          <div className={styles.role}>
            <span className={styles.prefix} aria-hidden="true">$</span>
            <Typewriter />
          </div>

          <p className={styles.bio}>
            Final-year IT student who genuinely gets excited when a complex software engineering problem
            lands in front of me. I love building software that&apos;s not just functional, but{' '}
            <em>elegant under the hood</em> — clean APIs, efficient data flows, and architectures
            that actually scale. The engineer in me shows up every time.
          </p>

          <div className={styles.ctas}>
            <a href="#projects" className={styles.btnPrimary} id="cta-projects">
              View Projects
            </a>
            <a href="#contact" className={styles.btnSecondary} id="cta-contact">
              Get in Touch
            </a>
          </div>
        </div>

        <CodeCard />
      </div>
    </section>
  );
}
