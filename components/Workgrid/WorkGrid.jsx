'use client';

import { useEffect, useRef } from 'react';
import styles from './WorkGrid.module.scss';
import CaseStudyCard from '../CaseStudyCard/CaseStudyCard';
import QuoteCard from '../QuoteCard/QuoteCard';
import { caseStudies } from '@/data/caseStudies';

function WorkItem({ item, className }) {
  const ref = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Case study card
  if (item.type === 'casestudy') {
    const study = caseStudies[item.slug];
    if (!study) return null;

    return (
      <div ref={ref} className={`${styles.item} ${styles.caseStudyItem} ${className}`}>
        <CaseStudyCard
          slug={item.slug}
          logo={study.logo}
          logoAlt={study.title}
          logoWidth={study.logoWidth || 150}
          logoHeight={study.logoHeight || 40}
          description={study.cardDescription}
          bgColor={study.bgColor}
          accentColor={study.accentColor}
          image={study.cardImage}
          darkText={study.darkText}
        />
      </div>
    );
  }

  // Quote
  if (item.type === 'quote') {
    return (
      <div ref={ref} className={`${styles.item} ${styles.quoteItem} ${className}`}>
        <QuoteCard
          text={item.text}
          author={item.author}
          role={item.role}
        />
      </div>
    );
  }

  // Video
  if (item.type === 'video') {
    return (
      <div ref={ref} className={`${styles.item} ${className}`}>
        <video autoPlay muted loop playsInline>
          <source src={item.src} type="video/mp4" />
        </video>
      </div>
    );
  }

  // Default: image
  return (
    <div ref={ref} className={`${styles.item} ${className}`}>
      <img src={item.src} alt="" />
    </div>
  );
}

export default function WorkGrid({ items }) {
  const getItemClass = (item) => {
    // Use explicit span if provided (1-4)
    if (item.span === 1) return styles.span1;
    if (item.span === 2) return styles.span2;
    if (item.span === 3) return styles.span3;
    if (item.span === 4) return styles.span4;

    // Case studies default to span 2 (50%)
    if (item.type === 'casestudy') return styles.span2;

    // Quotes default to span 2
    if (item.type === 'quote') return styles.span2;

    // Designs default to span 1 (25%)
    return styles.span1;
  };

  return (
    <section className={styles.grid}>
      {items.map((item, index) => (
        <WorkItem
          key={item.slug || item.src || index}
          item={item}
          className={getItemClass(item)}
        />
      ))}
    </section>
  );
}