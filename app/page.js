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
              <strong>14 years in, and I still genuinely enjoy this work.</strong> I've led teams, run guilds & shipped design systems across ticketing, property, meteorology, and VR gaming. I like the full arc of research, design, and enough front-end to concern the engineering team. Have a gander below...
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