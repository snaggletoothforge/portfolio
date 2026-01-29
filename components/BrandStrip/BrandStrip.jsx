import styles from './BrandStrip.module.scss';

const brands = [
  { src: '/images/workedwith/wyevale.png', alt: 'Wyevale Garden Centres' },
  { src: '/images/workedwith/strongbow.png', alt: 'Strongbow' },
  { src: '/images/workedwith/teamgb.png', alt: 'Team GB' },
  { src: '/images/workedwith/cadbury.png', alt: 'Cadbury' },
  { src: '/images/workedwith/sidequest.png', alt: 'SideQuest' },
  { src: '/images/workedwith/mo.png', alt: 'Met Office' },
    { src: '/images/workedwith/dt.png', alt: 'Digitickets' },
    { src: '/images/workedwith/lm.png', alt: 'Landmark' },
    { src: '/images/workedwith/raf.png', alt: 'RAF' },
];

export default function BrandStrip() {
  return (
    <section className={styles.brandStrip}>
      <h2 className={styles.title}>
        <span className={styles.script}>I've been</span> lucky to work with...
      </h2>
      
      <div className={styles.container}>
        <div className={styles.track}>
          {[...brands, ...brands].map((brand, index) => (
            <div key={index} className={styles.logo}>
              <img 
                src={brand.src} 
                alt={brand.alt} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}