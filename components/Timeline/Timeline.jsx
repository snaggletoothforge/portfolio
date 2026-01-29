import styles from './Timeline.module.scss';
import Image from 'next/image';

const jobs = [
  {
    logo: '/images/logos/st.webp',
    company: 'Snaggletooth',
    title: 'Creator',
    dates: 'Now'
  },
  {
    logo: '/images/logos/sq.webp',
    company: 'SideQuest VR',
    title: 'Lead UX',
    dates: '2023 - 2026'
  },
  {
    logo: '/images/logos/lm.webp',
    company: 'Landmark',
    title: 'Senior UX',
    dates: '2021 - 2023'
  },
  {
    logo: '/images/logos/mo.webp',
    company: 'Met Office',
    title: 'Lead UX',
    dates: '2019 - 2021'
  },
  {
    logo: '/images/logos/dt.webp',
    company: 'DigiTickets',
    title: 'Lead UX',
    dates: '2016 - 2019'
  },
  {
    logo: '/images/logos/wsv.webp',
    company: 'Website Vision',
    title: 'Designer',
    dates: '2012 - 2016'
  },
];

export default function Timeline() {
  return (
    <section className={styles.timeline}>
      <h2 className={styles.title}>
        <span className={styles.script}>How</span> I got here...
      </h2>
      
      <div className={styles.track}>
        <div className={styles.jobs}>
          {jobs.map((job, index) => (
            <div key={index} className={styles.job}>
              <div className={styles.logo}>
                <Image 
                  src={job.logo} 
                  alt={job.company} 
                  width={60} 
                  height={60}
                />
              </div>
              <span className={styles.jobTitle}>{job.title}</span>
              <span className={styles.company}>{job.company}</span>
              <span className={styles.dates}>{job.dates}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}