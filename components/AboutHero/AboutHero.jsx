import styles from './AboutHero.module.scss';

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.headline}>
        Rollercoaster enthusiast. Travelling full-time with my wife, our dogs, <span className={styles.highlight}>and a Starlink dish strapped to the roof...</span>
      </h1>
      <p className={styles.subtitle}>Currently travelling around Morocco</p>
    </section>
  );
}