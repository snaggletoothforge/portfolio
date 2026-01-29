import styles from './casestudy.module.scss';
import BrandWrapper from '@/components/BrandWrapper/BrandWrapper';
import CaseStudyHero from '@/components/CaseStudyHero/CaseStudyHero';
import CaseStudyChallenge from '@/components/CaseStudyChallenge/CaseStudyChallenge';
import CaseStudyApproach from '@/components/CaseStudyApproach/CaseStudyApproach';
import CaseStudySolution from '@/components/CaseStudySolution/CaseStudySolution';
import CaseStudyOutcomes from '@/components/CaseStudyOutcomes/CaseStudyOutcomes';
import MoreCaseStudies from '@/components/MoreCaseStudies/MoreCaseStudies';
import BrandStrip from '@/components/BrandStrip/BrandStrip';
import Footer from '@/components/Footer/Footer';
import { caseStudies } from '@/data/caseStudies';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = caseStudies[slug];
  if (!study) return {};
  return {
    title: `${study.title} | Tom Mitchell`,
    description: study.headline,
  };
}

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default async function CaseStudy({ params }) {
  const { slug } = await params;
  const study = caseStudies[slug];
  
  if (!study) {
    notFound();
  }

  const otherStudies = shuffleArray(
    Object.entries(caseStudies)
      .filter(([s]) => s !== slug)
      .map(([s, data]) => ({ slug: s, ...data }))
  ).slice(0, 2);

  const textColor = study.darkText ? '#1a1a2e' : '#ffffff';

  return (
    <BrandWrapper 
      accentColor={study.accentColor}
      bgColor={study.bgColor}
      textColor={textColor}
      navTextColor={study.navTextColor}
    >
      <main 
        className={styles.caseStudy}
        style={{
          '--accent-color': study.accentColor,
          '--bg-color': study.bgColor,
          '--text-color': textColor,
        }}
      >
        <div className={styles.heroSection}>
          {study.heroBgImage && (
            <img 
              src={study.heroBgImage} 
              alt="" 
              className={styles.heroBgImage} 
            />
          )}
          
          <CaseStudyHero 
            logo={study.logo}
            logoAlt={study.title}
            headline={study.headline}
            accentWord={study.accentWord}
          />

          {study.heroImage && (
            <div className={styles.heroImageWrapper}>
              <img 
                src={study.heroImage} 
                alt="" 
                className={styles.heroImage} 
              />
            </div>
          )}

          <CaseStudyChallenge content={study.challenge} />
        </div>

        <CaseStudyApproach steps={study.approach} />

        <CaseStudySolution 
          content={study.solution}
          images={study.solutionImages}
        />

        <CaseStudyOutcomes 
          heroStat={study.heroStat}
          heroStatLabel={study.heroStatLabel}
          outcomes={study.outcomes} 
        />

        <div className={styles.footerwrapper}>
          <MoreCaseStudies studies={otherStudies} />
          <BrandStrip />        
          <Footer />
        </div>
      </main>
    </BrandWrapper>
  );
}