import styles from './CaseStudyChallenge.module.scss';

export default function CaseStudyChallenge({ content }) {
  return (
    <section className={styles.challenge}>
      <div className={styles.card}>
        <h2 className={styles.title}>The Challenge</h2>
        <p>{content}</p>
      </div>
    </section>
  );
}
