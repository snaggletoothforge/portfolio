import styles from './CaseStudies.module.scss';
import CaseStudyCard from '../CaseStudyCard/CaseStudyCard';
import { caseStudies } from '@/data/caseStudies';

export default function CaseStudies() {
  return (
    <section className={styles.caseStudies}>
      <h2 className={styles.title}>
        <span className={styles.script}>A few</span> Case Studies...
      </h2>
      
      <div className={styles.grid}>
        {Object.entries(caseStudies).map(([slug, study]) => (
          <CaseStudyCard 
            key={slug} 
            slug={slug}
            logo={study.logo}
            logoAlt={study.title}
            logoWidth={study.logoWidth}
            logoHeight={study.logoHeight}
            description={study.cardDescription}
            bgColor={study.bgColor}
            accentColor={study.accentColor}
            image={study.cardImage}
            imageWide={study.cardImageWide}
            darkText={study.darkText}
          />
        ))}
      </div>
    </section>
  );
}