import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        <span className={styles.name}>Gourav Chandra</span>
        <span className={styles.sep}>·</span>
        <nav className={styles.nav} aria-label="Footer navigation">
          <a href="#home" className={styles.link}>Home</a>
          <a href="#projects" className={styles.link}>Projects</a>
          <a href="#blog" className={styles.link}>Blog</a>
          <a href="#about" className={styles.link}>About</a>
        </nav>
        <span className={styles.sep}>·</span>
        <span className={styles.copy}>
          Built with ❤️ &amp; <code className={styles.mono}>too_much_coffee()</code>
        </span>
      </div>
    </footer>
  );
}
