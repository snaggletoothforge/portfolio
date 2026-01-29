import AboutHero from '@/components/AboutHero/AboutHero';
import PhotoGrid from '@/components/PhotoGrid/PhotoGrid';
import AboutSection from '@/components/AboutSection/AboutSection';
import MediaFeature from '@/components/MediaFeature/MediaFeature';
import BrandStrip from '@/components/BrandStrip/BrandStrip';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: "About | Tom Mitchell",
  description: "Rollercoaster enthusiast. Travelling full-time with my wife, our dogs, and a Starlink dish strapped to the roof.",
};

export default function About() {
  return (
    <main>
      <AboutHero />
      <PhotoGrid 
        items={[
            { src: '/images/about/us.png', type: 'image' },
            { src: '/images/about/van.png', type: 'image' },
            { src: '/images/about/van-workspace.mp4', type: 'video' }
        ]}
        />
      
      <AboutSection 
        title="I took the"
        titleHighlight="plunge..."
        videoSrc="/images/about/ruby.mp4"
        imagePosition="right"
        isVideo={true}
      >
        <p><strong>After my wife Tarah underwent brain surgery, we decided to do the thing everyone talks about but never does - travel while working.</strong></p>
        <p>So far, we've loved it and it's worked out perfectly. Powered by Starlink and solar, with a van big enough for my own office space, we get to see some amazing parts of the world whilst working and engaging with some amazing people.</p>
        <p>I'd actually been fully remote since COVID shook things up - mostly from home for years. Which made me question: if this is working, why can't we be anywhere? So while I'm still a UK citizen, paying taxes and keeping UK hours when needed, I get to wake up to some pretty incredible places.</p>
      </AboutSection>

      <AboutSection 
        title="14 years and"
        titleHighlight="still curious"
        videoSrc="/images/about/bike.mp4"
        imagePosition="left"
        isVideo={true}
      >
        <p><strong>I've worked across ticketing, property, meteorology and VR gaming. I've led teams, run guilds, shipped design systems - but I still get just as excited being heads-down in the detail.
</strong></p>
        <p>I never picked a lane. Research, design, front-end - I stayed close to all of it because that's what keeps it interesting. I play D&D most weekends and kept running into problems tracking campaigns, so I built my own platform to fix it. That's just how my brain works - if something's broken, I want to understand why and fix it.
</p>
      </AboutSection>

      <MediaFeature 
        src="/images/about/us-wide.jpg"
        type="image"
      />

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

</p>
      </AboutSection>

      <BrandStrip />
      <Footer />
    </main>
  );
}