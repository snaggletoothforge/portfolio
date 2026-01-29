import styles from './CaseStudySolution.module.scss';

export default function CaseStudySolution({ content, images }) {
  return (
    <section className={styles.solution}>
      <div className={styles.text}>
        <h2 className={styles.title}>The Solution</h2>
        {content.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {images && (
      <div className={styles.images}>
        {images.map((image, index) => (
          <img key={index} src={image} alt="" />
        ))}
      </div>
      )}
    </section>
  );
}
