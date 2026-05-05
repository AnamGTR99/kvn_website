import CubeGrid from '@/components/CubeGrid';
import FloatingParticles from '@/components/FloatingParticles';
import StatsBar from '@/components/StatsBar';
import PreviousWorks from '@/components/PreviousWorks';

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section id="hero">
        {/* Desktop: 3D cube grid | Mobile: lightweight floating particles */}
        <div className="hero-bg-desktop"><CubeGrid /></div>
        <div className="hero-bg-mobile"><FloatingParticles /></div>
        <div id="hero-vignette"></div>

        <div className="hero-centre">
          <h1 className="hero-name">
            Kevin<em>Chiang</em>
          </h1>
          <p className="hero-tagline">Design tools, simplified.</p>
          <div className="hero-meta">
            <span>Melbourne, Australia</span>
            <span>@bykevinchiang</span>
          </div>
          <a href="/contact" className="hero-cta-mobile">Let&apos;s Work</a>
        </div>

        <div className="hero-scroll">
          <div className="sbar"></div>
          <span>scroll</span>
        </div>
      </section>

      {/* STATS BAR */}
      <StatsBar />

      {/* PREVIOUS WORKS */}
      <PreviousWorks />
    </>
  );
}
