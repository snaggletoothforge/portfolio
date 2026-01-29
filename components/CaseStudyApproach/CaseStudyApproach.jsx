import styles from './CaseStudyApproach.module.scss';

export default function CaseStudyApproach({ steps }) {
  return (
    <section className={styles.approach}>
      <h2 className={styles.title}>The Approach</h2>
      
      <div className={styles.grid}>
        {steps.map((step, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={step.image} alt="" />
            </div>
            <div className={styles.content}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
