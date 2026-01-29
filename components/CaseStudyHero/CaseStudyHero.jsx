import styles from './CaseStudyHero.module.scss';

export default function CaseStudyHero({ logo, logoAlt, headline, accentWord }) {
  // If accentWord provided, wrap it in a span
  let formattedHeadline = headline;
  if (accentWord && headline.includes(accentWord)) {
    const parts = headline.split(accentWord);
    formattedHeadline = (
      <>
        {parts[0]}<span className={styles.accent}>{accentWord}</span>{parts[1]}
      </>
    );
  }

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={logo} alt={logoAlt} />
        </div>
        <h1 className={styles.headline}>{formattedHeadline}</h1>
      </div>
    </section>
  );
}
