'use client';

import { useState, useEffect } from 'react';
import styles from './Footer.module.scss';

const quotes = [
  {
    text: "He's my favourite person to have in an ideation session as he's endlessly creative, and exceptional at transforming rough fragments of ideas into fully fleshed out UI gold!",
    author: "Ryan Smee",
    location: "Frontend Engineer, SideQuest"
  },
    {
    text: "He is one of the most grounded and effective leaders I’ve worked with, consistently forward-thinking, which creates a sense of clarity and confidence for the people around him",
    author: "Amy Rushton",
    location: "UX Designer, Landmark"
  },
  // Add more quotes here later
];

export default function Footer() {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    if (quotes.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.inner}>
        <div className={styles.quotes}>
          <div className={styles.dots}>
            {quotes.map((_, index) => (
              <span 
                key={index} 
                className={`${styles.dot} ${index === currentQuote ? styles.active : ''}`}
                onClick={() => setCurrentQuote(index)}
              />
            ))}
          </div>
          
          <blockquote className={styles.quote}>
            <p>"{quotes[currentQuote].text}"</p>
            <cite>{quotes[currentQuote].author}, {quotes[currentQuote].location}</cite>
          </blockquote>
        </div>

        <div className={styles.divider} />

        <div className={styles.contact}>
          <h2 className={styles.title}>
            <span className={styles.script}>Like</span> what you see? Get in touch!
          </h2>
          
          <div className={styles.links}>
            <a href="https://www.linkedin.com/in/tmitchell90" target="_blank" rel="noopener noreferrer" className={styles.link}>
              <img src="/images/icons/linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="mailto:checkout@thatnomadchaps.design" className={styles.link}>
              <img src="/images/icons/mail.svg" alt="Email" />
            </a>
            <a href="/Tom-Mitchell-CV.pdf" download className={styles.link}>
              <img src="/images/icons/cv.svg" alt="Download CV" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}