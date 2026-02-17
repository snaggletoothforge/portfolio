import Hero from "@/components/Hero/Hero";
import ContentBox from "@/components/ContentBox/ContentBox";
import Timeline from '@/components/Timeline/Timeline';
import CaseStudies from '@/components/CaseStudies/CaseStudies';
import BrandStrip from '@/components/BrandStrip/BrandStrip';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
              <Hero />
        <section style={{ padding: '0 24px', marginBottom: '32px' }}>
        <ContentBox>
            <p>
              <strong>14 years in, and I still genuinely enjoy this work.</strong> I've led teams, run research panels, shipped design systems, and designed acquisition and conversion experiences across VR gaming, ticketing, property, meteorology and my own subscription platform. I like the full arc of research, design, and enough front end to keep the engineering team on their toes. Have a gander below...
            </p>
          </ContentBox>
        </section>

        <Timeline />
        <CaseStudies />
        <BrandStrip />
        <Footer />
    </main>
  );
}