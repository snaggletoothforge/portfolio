import styles from './MoreCaseStudies.module.scss';
import CaseStudyCard from '../CaseStudyCard/CaseStudyCard';

export default function MoreCaseStudies({ studies }) {
  return (
    <section className={styles.more}>
      <h2 className={styles.title}>
        <span className={styles.script}>Want to</span> see more?
      </h2>
      
      <div className={styles.grid}>
        {studies.map((study) => (
          <CaseStudyCard 
            key={study.slug}
            slug={study.slug}
            logo={study.logo}
            logoAlt={study.title}
            logoWidth={study.logoWidth}
            logoHeight={study.logoHeight}
            description={study.cardDescription || study.headline}
            bgColor={study.bgColor}
            accentColor={study.accentColor}
            image={study.cardImage}
            darkText={study.darkText}
          />
        ))}
      </div>
    </section>
  );
}