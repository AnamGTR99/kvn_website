import CubeGrid from '@/components/CubeGrid';
import StatsBar from '@/components/StatsBar';
import PreviousWorks from '@/components/PreviousWorks';

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section id="hero">
        <CubeGrid />
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
