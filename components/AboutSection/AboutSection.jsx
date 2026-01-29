import styles from './AboutSection.module.scss';

export default function AboutSection({ 
  title, 
  titleHighlight, 
  children, 
  imageSrc, 
  videoSrc,
  imagePosition = 'right',
  isVideo = false 
}) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        {title} <span className={styles.highlight}>{titleHighlight}</span>
      </h2>
      
      <div className={`${styles.content} ${imagePosition === 'left' ? styles.imageLeft : ''}`}>
        <div className={styles.text}>
          {children}
        </div>
        
        <div className={styles.media}>
          {isVideo ? (
            <video autoPlay muted loop playsInline>
              <source src={videoSrc} type="video/mp4" />
            </video>
          ) : (
            <img src={imageSrc} alt="" />
          )}
        </div>
      </div>
    </section>
  );
}