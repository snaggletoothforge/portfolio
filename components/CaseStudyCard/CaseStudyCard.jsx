import styles from './CaseStudyCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function CaseStudyCard({ 
  slug,
  logo,
  logoAlt,
  logoWidth,
  logoHeight,
  description,
  bgColor,
  accentColor,
  borderColor,
  image,
  imageWide,
  darkText,
}) {
  return (
    <Link 
      href={`/work/${slug}`} 
      className={`${styles.card} ${darkText ? styles.darkText : ''} ${imageWide ? styles.wide : ''}`} 
      style={{
        '--bg-color': bgColor || '#1a1a2e',
        '--accent-color': accentColor || '#E93392',
        '--border-color': borderColor || 'transparent',
      }}
    >
      <div className={styles.content}>
        <div className={styles.logo}>
          <Image 
            src={logo} 
            alt={logoAlt} 
            width={logoWidth}
            height={logoHeight}
            style={{ width: logoWidth, height: 'auto', maxWidth: '100%' }}
          />
        </div>
        
        <p className={styles.description}>{description}</p>
        
        <span className={styles.link}>
          Learn more
          <span className={styles.arrow}>
            <Image 
              src="/images/icons/arrow.svg" 
              alt="" 
              width={16} 
              height={16}
            />
          </span>
        </span>
      </div>
      
      <div className={styles.imageWrapper}>
        <Image 
          src={image} 
          alt=""
          fill
          className={styles.mobileImage}
        />
        {imageWide && (
          <Image 
            src={imageWide} 
            alt=""
            fill
            className={styles.desktopImage}
          />
        )}
      </div>
    </Link>
  );
}