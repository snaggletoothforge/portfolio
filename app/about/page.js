import AboutHero from '@/components/AboutHero/AboutHero';
import PhotoGrid from '@/components/PhotoGrid/PhotoGrid';
import AboutSection from '@/components/AboutSection/AboutSection';
import MediaFeature from '@/components/MediaFeature/MediaFeature';
import BrandStrip from '@/components/BrandStrip/BrandStrip';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: "About | Tom Mitchell",
  description: "Rollercoaster enthusiast. Travelling full-time with my wife, our four dogs, and a Starlink dish strapped to the roof.",
};

export default function About() {
  return (
    <main>
      <AboutHero />

            <MediaFeature 
        src="/images/about/us-wide.jpg"
        type="image"
      />

      
      <AboutSection 
        title="I took the"
        titleHighlight="plunge..."
        videoSrc="/images/about/ruby.mp4"
        imagePosition="right"
        isVideo={true}
      >
        <p><strong>After my wife Tarah underwent brain surgery, we decided to do the thing everyone talks about but never does - travel while working.</strong></p>
        <p>So far, we've loved it and it's worked out perfectly. Powered by Starlink and solar, with a van big enough for my own office space, three rescue dogs and my pup Ruby, we get to see some amazing parts of the world whilst working and engaging with some amazing people.</p>
        <p>I'd actually been fully remote since COVID shook things up, mostly from home for years. Which made me question: if this is working, why can't we be anywhere? So while I'm still a UK citizen, paying taxes and keeping UK hours when needed, I get to wake up to some pretty incredible places.</p>

      </AboutSection>

                  <MediaFeature 
        src="/images/about/meanddog.jpeg"
        type="image"
      />

      <AboutSection 
        title="14 years and"
        titleHighlight="still curious"
        videoSrc="/images/about/bike.mp4"
        imagePosition="left"
        isVideo={true}
      >
        <p><strong>I've worked across ticketing, property, meteorology and VR gaming. I've led teams, built research panels, shipped design systems, and designed acquisition and conversion experiences. But I still get just as excited being heads down in the detail.
</strong></p>
        <p>Design is my real passion, but I've found that having knowledge and understanding in research and engineering drives empathy. Empathy for the users, empathy for the teams I work with, and in turn, better design outcomes. I love picking things apart, learning from all angles and redesigning them. For example, I play D&D with my friends and kept getting lost with story plots, character knowledge and who did what when. Turns out everyone else felt the same. With my abilities I thought why not give it a go, so I built Snaggletooth Forge to fix it.</p>
      </AboutSection>

            <AboutSection 
        title="I love how efficient "
        titleHighlight="remote setups are"
        imageSrc="/images/about/us-pyramids.jpg"
        imagePosition="right"
        isVideo={false}
      >
        <p><strong>I've worked with teams across the USA, Spain, Ireland, Canada, even Australia..
</strong></p>
        <p> I travelled to Northern Ireland to run an in-person research event for SideQuest, engaged with meteorologists in Africa whilst at the Met Office, and learnt from conveyancers all over the United Kingdom with Landmark. If anything, online communication makes it even more efficient.
I keep UK hours when needed, but I've found that remote work across time zones just makes you better at communicating clearly and working autonomously.
</p>
      </AboutSection>

      <BrandStrip />
      <Footer />
    </main>
  );
}