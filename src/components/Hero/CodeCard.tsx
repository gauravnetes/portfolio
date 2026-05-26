import styles from './Hero.module.css';

export function CodeCard() {
  return (
    <div className={styles.codeCard} aria-hidden="true">
      <div className={styles.codeHeader}>
        <span className={`${styles.dot} ${styles.dotRed}`} />
        <span className={`${styles.dot} ${styles.dotYellow}`} />
        <span className={`${styles.dot} ${styles.dotGreen}`} />
        <span className={styles.filename}>server.ts</span>
      </div>
      <pre className={styles.codeBody}><span className={styles.cKeyword}>import</span>{' express '}<span className={styles.cKeyword}>from</span>{' '}<span className={styles.cString}>&apos;express&apos;</span>{';'}
        <span className={styles.cKeyword}>import</span>{' { router } '}<span className={styles.cKeyword}>from</span>{' '}<span className={styles.cString}>&apos;./routes&apos;</span>{';'}

        <span className={styles.cKeyword}>const</span>{' '}<span className={styles.cVar}>app</span>{' = '}<span className={styles.cFunc}>express</span>{'();'}
        {'app.'}<span className={styles.cFunc}>use</span>{'('}<span className={styles.cString}>&apos;/api/v1&apos;</span>{', router);'}
        {'app.'}<span className={styles.cFunc}>use</span>{'(errorHandler);'}

        {'app.'}<span className={styles.cFunc}>listen</span>{'('}<span className={styles.cNumber}>3000</span>{', () => {'}
        {'  console.'}<span className={styles.cFunc}>log</span>{'('}<span className={styles.cString}>{"`🚀 Running on :3000`"}</span>{');'}
        {'});'}</pre>
    </div>
  );
}
