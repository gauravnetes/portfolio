import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  label: string;
  title: string;
  id?: string;
}

export function SectionHeader({ label, title, id }: SectionHeaderProps) {
  return (
    <div className={styles.header}>
      <span className={styles.label}>{label}</span>
      <h2 className={styles.title} id={id}>
        {title}
      </h2>
    </div>
  );
}
