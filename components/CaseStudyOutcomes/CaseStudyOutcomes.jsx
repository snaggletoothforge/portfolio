import styles from './CaseStudyOutcomes.module.scss';

export default function CaseStudyOutcomes({ heroStat, heroStatLabel, outcomes }) {
  return (
    <section className={styles.outcomes}>
      <h2 className={styles.title}>The Outcomes</h2>
      
      <div className={styles.grid}>
        {heroStat && (
          <div className={styles.statCard}>
            <span className={styles.stat}>{heroStat}</span>
            {heroStatLabel && <span className={styles.statLabel}>{heroStatLabel}</span>}
          </div>
        )}
        
        <div className={styles.listCard}>
          <ul className={styles.list}>
            {outcomes.map((outcome, index) => (
              <li key={index}>
                <span className={styles.bullet} />
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}