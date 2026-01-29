import styles from './MediaFeature.module.scss';

export default function MediaFeature({ src, type = 'image', caption }) {
  return (
    <section className={styles.feature}>
      {type === 'video' ? (
        <video autoPlay muted loop playsInline>
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <img src={src} alt="" />
      )}
      {caption && <p className={styles.caption}>{caption}</p>}
    </section>
  );
}