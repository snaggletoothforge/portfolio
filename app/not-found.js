import Link from 'next/link';
import Image from 'next/image';
import styles from './not-found.module.scss';

export default function NotFound() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <Image 
          src="/images/pizza404.png" 
          alt="" 
          width={300} 
          height={300}
          className={styles.image}
        />
        <h1 className={styles.title}>
          <span className={styles.script}>Oops,</span> wrong slice
        </h1>
        <p className={styles.text}>This page has gone missing. Even the pizza is confused.</p>
        <Link href="/" className={styles.button}>
          Take me home
        </Link>
      </div>
    </main>
  );
}