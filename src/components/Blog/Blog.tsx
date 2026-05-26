import { blogPosts } from '@/data/blog';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import styles from './Blog.module.css';

export function Blog() {
  return (
    <section id="blog" className="section" aria-labelledby="blog-heading">
      <div className="container">
        <RevealOnScroll>
          <SectionHeader label="// thoughts & writes" title="Blog" id="blog-heading" />
        </RevealOnScroll>

        <div className={styles.list}>
          {blogPosts.map((post) => (
            <RevealOnScroll key={post.id}>
              <article className={styles.post}>
                <a href={post.url} className={styles.postLink} target="_blank" rel="noopener noreferrer">
                  <h3 className={styles.title}>{post.title}</h3>
                  <p className={styles.excerpt}>{post.excerpt}</p>
                  <div className={styles.meta}>
                    <span>{post.date}</span>
                    <span className={styles.dot}>·</span>
                    <span>{post.readTime}</span>
                    <span className={styles.arrow}>→</span>
                  </div>
                </a>
              </article>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll>
          <p className={styles.note}>
            More articles coming soon on{' '}
            <a href="https://medium.com/@gauravnetes" className={styles.inlineLink} target="_blank" rel="noopener noreferrer">
              Medium
            </a>
            . Writing about backend systems, software under the hood, and engineering lessons.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
