import styles from './Hero.module.scss';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.photo}>
        <Image 
          src="/images/me.webp" 
          alt="Tom Mitchell" 
          width={120} 
          height={120}
        />
      </div>
      
      <p className={styles.intro}>Hey, I'm Tom and I love to create</p>
      
      <h1 className={styles.headline}>
        <span className={styles.fuel}>Designs that</span>
        <span className={styles.creativity}>Convert</span>
      </h1>
      
      <p className={styles.tagline}>Backed by research.</p>
    </section>
  );
}