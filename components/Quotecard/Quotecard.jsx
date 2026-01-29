import styles from './QuoteCard.module.scss';

export default function QuoteCard({ text, author, role }) {
  return (
    <blockquote className={styles.quote}>
      <p className={styles.text}>{text}</p>
      <footer className={styles.footer}>
        <span className={styles.author}>{author}</span>
        {role && <span className={styles.role}>{role}</span>}
      </footer>
    </blockquote>
  );
}