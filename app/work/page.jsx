// Control the order and mix of designs and case studies
// Types: 'image', 'video', 'casestudy'
// Sizes (optional): 'third', 'twoThirds', 'full' - case studies default to twoThirds
import styles from './work.module.scss';
import WorkGrid from '@/components/Workgrid/Workgrid';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: "Work | Tom Mitchell",
  description: "Design work and case studies by Tom Mitchell",
};

const workItems = [
  // Row 1: Snaggletooth intro
    { type: 'casestudy', slug: 'snaggletooth' },
      { type: 'video', src: '/images/designs/refined/optimised/trimmed-card-hover.webm', span: 2 },
  { type: 'image', src: '/images/designs/refined/optimised/st-wide.webp', span: 4 },
  { type: 'image', src: '/images/designs/refined/optimised/1.webp', span: 2 },
  { type: 'video', src: '/images/designs/refined/optimised/loading.webm', span: 2 },
  { type: 'image', src: '/images/designs/refined/optimised/brumble-large.webp', span: 4 },
      { type: 'casestudy', slug: 'sidequest' },
                       { type: 'image', src: '/images/designs/refined/optimised/design-system.webp', span: 2 },
             { type: 'image', src: '/images/designs/refined/optimised/sq-wide.webp', span: 4 },
         { type: 'video', src: '/images/designs/refined/optimised/trimmed.webm', span: 1 },
  { type: 'quote', text: "Tom is a brilliant designer and UX researcher. He's my favourite person to have in an ideation session, exceptional at transforming rough fragments of ideas into fully fleshed out UI gold!", author: 'Ryan Smee', role: 'Frontend Developer, SideQuest' },
                   { type: 'video', src: '/images/designs/refined/optimised/psloader.webm', span: 1 },
{ type: 'image', src: '/images/designs/refined/optimised/personas.webp', span: 4 },
        { type: 'image', src: '/images/designs/refined/optimised/mobile-about-mockup.webp', span: 2 },
        { type: 'video', src: '/images/designs/refined/optimised/hover-invr.webm', span: 2 },
        { type: 'image', src: '/images/designs/refined/optimised/banternav.webp', span: 4 },
         { type: 'image', src: '/images/designs/refined/optimised/cookies.webp', span: 2 },
         { type: 'video', src: '/images/designs/refined/optimised/smooth-dv-trim.webm', span: 2 },
        { type: 'video', src: '/images/designs/refined/optimised/sq-account.webm', span: 4 },

    
    { type: 'quote', text: "Tom is one of the most grounded and effective leaders I've worked with. His work is high quality and thoughtful, with strong attention to detail and craft.", author: 'Amy Rushton', role: 'UX Designer, Landmark' },

  { type: 'casestudy', slug: 'metoffice' },
    { type: 'casestudy', slug: 'landmark' },
      { type: 'casestudy', slug: 'digitickets' },
];

export default function Work() {
  return (
    <main>
      <section className={styles.hero}>
        <h1 className={styles.title}>
          <span className={styles.script}>Have a</span> Goosey Gander
        </h1>
        <p className={styles.subtitle}>Here's a little snippet of what I get up to...</p>
      </section>

      <WorkGrid items={workItems} />

      <Footer />
    </main>
  );
}