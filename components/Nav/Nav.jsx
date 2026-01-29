'use client';

import { usePathname, useRouter } from 'next/navigation';
import styles from './Nav.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  
  const links = [
    { href: '/', label: 'Home' },
    { href: '/work', label: 'Work' },
    { href: '/about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleContactClick = (e) => {
    e.preventDefault();
    
    const contactSection = document.getElementById('contact');
    
    if (contactSection) {
      // We're on a page with the footer, scroll to it
      contactSection.classList.add('animate-in');
      contactSection.scrollIntoView({ behavior: 'smooth' });
      
      // Remove the class after animation completes
      setTimeout(() => {
        contactSection.classList.remove('animate-in');
      }, 1000);
    } else {
      // We're on a page without the footer, navigate home first
      router.push('/#contact');
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navInner}>
        <div className={styles.links}>
          {links.slice(0, 2).map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={pathname === link.href ? styles.active : ''}
            >
              {link.label}
              {pathname === link.href && <span className={styles.dot} />}
            </Link>
          ))}
        </div>
        
        <div className={styles.photo}>
          <div className={styles.photoInner}>
            <div className={styles.front}>
              <Image 
                src="/images/me.webp" 
                alt="Tom Mitchell" 
                width={90} 
                height={90}
              />
            </div>
            <div className={styles.back}>
              <Image 
                src="/images/me-flipped.png" 
                alt="Tom Mitchell" 
                width={110} 
                height={110}
              />
            </div>
          </div>
        </div>
        
        <div className={styles.links}>
          {links.slice(2).map((link) => (
            link.href === '#contact' ? (
              <a 
                key={link.href}
                href={link.href}
                onClick={handleContactClick}
              >
                {link.label}
              </a>
            ) : (
              <Link 
                key={link.href} 
                href={link.href}
                className={pathname === link.href ? styles.active : ''}
              >
                {link.label}
                {pathname === link.href && <span className={styles.dot} />}
              </Link>
            )
          ))}
        </div>
      </div>
    </nav>
  );
}