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
      
      <p className={styles.intro}>Hey, I'm Tom and I love to</p>
      
      <h1 className={styles.headline}>
        <span className={styles.fuel}>Fuel</span>
        <span className={styles.creativity}>Creativity</span>
      </h1>
      
      <p className={styles.tagline}>with research.</p>
    </section>
  );
}