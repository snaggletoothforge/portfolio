import styles from './PhotoGrid.module.scss';

export default function PhotoGrid({ items }) {
  return (
    <section className={styles.grid}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          {item.type === 'video' ? (
            <video autoPlay muted loop playsInline>
              <source src={item.src} type="video/mp4" />
            </video>
          ) : (
            <img src={item.src} alt={item.alt || ''} />
          )}
        </div>
      ))}
    </section>
  );
}