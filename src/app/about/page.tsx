import Image from "next/image";

export default function AboutPage() {
  return (
    <main>
      {/* HERO SECTION */}
      <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Taiwan Skyline Background */}
        <div className="tw-skyline-bg">
          <svg viewBox="0 0 1200 340" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="tron-sweep" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="35%" stopColor="white" stopOpacity="0" />
                <stop offset="45%" stopColor="white" stopOpacity="0.6" />
                <stop offset="50%" stopColor="white" stopOpacity="1" />
                <stop offset="55%" stopColor="white" stopOpacity="0.6" />
                <stop offset="65%" stopColor="white" stopOpacity="0" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
                <animateTransform
                  attributeName="gradientTransform"
                  type="translate"
                  values="-1 0; 1 0"
                  dur="3.5s"
                  repeatCount="indefinite"
                />
              </linearGradient>
            </defs>
            <g stroke="url(#tron-sweep)" strokeWidth="1" fill="none">
              {/* Mountain backdrop (Yangmingshan / hills behind Taipei) */}
              <path d="M0 230 Q60 185 120 200 Q180 160 260 180 Q340 140 420 170 Q480 145 540 155 Q600 130 660 142 Q740 120 800 140 Q860 125 920 150 Q980 130 1050 160 Q1100 145 1150 170 Q1180 160 1200 180" />

              {/* Ground / baseline */}
              <line x1="0" y1="310" x2="1200" y2="310" />

              {/* === TAIPEI 101 (center landmark — bamboo-segmented tower) === */}
              {/* Main shaft */}
              <rect x="575" y="58" width="30" height="252" />
              {/* Spire */}
              <line x1="590" y1="58" x2="590" y2="22" />
              <line x1="586" y1="42" x2="594" y2="42" />
              <line x1="584" y1="50" x2="596" y2="50" />
              {/* 8 tapered sections (bamboo segments) */}
              <path d="M568 100 L575 100 L575 130 L568 130" />
              <path d="M605 100 L612 100 L612 130 L605 130" />
              <path d="M569 132 L575 132 L575 160 L569 160" />
              <path d="M605 132 L611 132 L611 160 L605 160" />
              <path d="M570 162 L575 162 L575 188 L570 188" />
              <path d="M605 162 L610 162 L610 188 L605 188" />
              <path d="M571 190 L575 190 L575 214 L571 214" />
              <path d="M605 190 L609 190 L609 214 L605 214" />
              <path d="M572 216 L575 216 L575 238 L572 238" />
              <path d="M605 216 L608 216 L608 238 L605 238" />
              {/* Section divider lines */}
              <line x1="566" y1="100" x2="614" y2="100" />
              <line x1="567" y1="130" x2="613" y2="130" />
              <line x1="568" y1="160" x2="612" y2="160" />
              <line x1="569" y1="188" x2="611" y2="188" />
              <line x1="570" y1="214" x2="610" y2="214" />
              <line x1="571" y1="238" x2="609" y2="238" />
              {/* Base podium */}
              <rect x="562" y="240" width="56" height="70" />
              <line x1="562" y1="260" x2="618" y2="260" />
              <line x1="562" y1="280" x2="618" y2="280" />
              {/* Window columns on podium */}
              <line x1="572" y1="240" x2="572" y2="310" />
              <line x1="582" y1="240" x2="582" y2="310" />
              <line x1="598" y1="240" x2="598" y2="310" />
              <line x1="608" y1="240" x2="608" y2="310" />

              {/* === Taipei Nan Shan Plaza (left of 101, tall modern tower) === */}
              <rect x="490" y="155" width="28" height="155" />
              <line x1="490" y1="180" x2="518" y2="180" />
              <line x1="490" y1="210" x2="518" y2="210" />
              <line x1="490" y1="240" x2="518" y2="240" />
              <line x1="490" y1="270" x2="518" y2="270" />
              <line x1="504" y1="155" x2="504" y2="310" />
              {/* Antenna */}
              <line x1="504" y1="155" x2="504" y2="140" />

              {/* === Shin Kong Life Tower (far left area) === */}
              <rect x="195" y="165" width="20" height="145" />
              <line x1="195" y1="190" x2="215" y2="190" />
              <line x1="195" y1="220" x2="215" y2="220" />
              <line x1="195" y1="250" x2="215" y2="250" />
              <line x1="195" y1="280" x2="215" y2="280" />
              <line x1="205" y1="165" x2="205" y2="310" />
              {/* Spire */}
              <line x1="205" y1="165" x2="205" y2="145" />

              {/* === Farglory Financial Center === */}
              <rect x="240" y="195" width="30" height="115" />
              <line x1="240" y1="220" x2="270" y2="220" />
              <line x1="240" y1="250" x2="270" y2="250" />
              <line x1="240" y1="280" x2="270" y2="280" />
              <line x1="250" y1="195" x2="250" y2="310" />
              <line x1="260" y1="195" x2="260" y2="310" />

              {/* === Mid-left cluster (commercial buildings) === */}
              <rect x="290" y="220" width="24" height="90" />
              <line x1="290" y1="245" x2="314" y2="245" />
              <line x1="290" y1="270" x2="314" y2="270" />
              <line x1="302" y1="220" x2="302" y2="310" />

              <rect x="320" y="235" width="20" height="75" />
              <line x1="320" y1="260" x2="340" y2="260" />
              <line x1="320" y1="285" x2="340" y2="285" />
              <line x1="330" y1="235" x2="330" y2="310" />

              {/* === Building cluster near 101 (left side) === */}
              <rect x="360" y="210" width="26" height="100" />
              <line x1="360" y1="235" x2="386" y2="235" />
              <line x1="360" y1="260" x2="386" y2="260" />
              <line x1="360" y1="285" x2="386" y2="285" />
              <line x1="373" y1="210" x2="373" y2="310" />

              <rect x="395" y="225" width="22" height="85" />
              <line x1="395" y1="250" x2="417" y2="250" />
              <line x1="395" y1="275" x2="417" y2="275" />

              <rect x="425" y="205" width="28" height="105" />
              <line x1="425" y1="230" x2="453" y2="230" />
              <line x1="425" y1="255" x2="453" y2="255" />
              <line x1="425" y1="280" x2="453" y2="280" />
              <line x1="439" y1="205" x2="439" y2="310" />

              <rect x="458" y="230" width="20" height="80" />
              <line x1="458" y1="255" x2="478" y2="255" />
              <line x1="458" y1="280" x2="478" y2="280" />

              {/* === Buildings right of 101 === */}
              <rect x="635" y="210" width="26" height="100" />
              <line x1="635" y1="235" x2="661" y2="235" />
              <line x1="635" y1="260" x2="661" y2="260" />
              <line x1="635" y1="285" x2="661" y2="285" />
              <line x1="648" y1="210" x2="648" y2="310" />

              <rect x="670" y="230" width="22" height="80" />
              <line x1="670" y1="255" x2="692" y2="255" />
              <line x1="670" y1="280" x2="692" y2="280" />
              <line x1="681" y1="230" x2="681" y2="310" />

              <rect x="700" y="215" width="30" height="95" />
              <line x1="700" y1="240" x2="730" y2="240" />
              <line x1="700" y1="265" x2="730" y2="265" />
              <line x1="700" y1="290" x2="730" y2="290" />
              <line x1="710" y1="215" x2="710" y2="310" />
              <line x1="720" y1="215" x2="720" y2="310" />

              {/* === Taipei World Trade Center area === */}
              <rect x="745" y="240" width="35" height="70" />
              <line x1="745" y1="260" x2="780" y2="260" />
              <line x1="745" y1="280" x2="780" y2="280" />
              <line x1="755" y1="240" x2="755" y2="310" />
              <line x1="765" y1="240" x2="765" y2="310" />

              {/* === Far right buildings (Neihu / Songshan area) === */}
              <rect x="810" y="235" width="22" height="75" />
              <line x1="810" y1="260" x2="832" y2="260" />
              <line x1="810" y1="285" x2="832" y2="285" />
              <line x1="821" y1="235" x2="821" y2="310" />

              <rect x="845" y="225" width="26" height="85" />
              <line x1="845" y1="250" x2="871" y2="250" />
              <line x1="845" y1="275" x2="871" y2="275" />
              <line x1="858" y1="225" x2="858" y2="310" />

              <rect x="885" y="245" width="20" height="65" />
              <line x1="885" y1="270" x2="905" y2="270" />
              <line x1="895" y1="245" x2="895" y2="310" />

              <rect x="920" y="250" width="24" height="60" />
              <line x1="920" y1="275" x2="944" y2="275" />
              <line x1="932" y1="250" x2="932" y2="310" />

              {/* === Grand Hotel (traditional Chinese roof on right hillside) === */}
              <path d="M980 260 Q990 240 1000 245 L1000 310" />
              <path d="M1040 260 Q1030 240 1020 245 L1020 310" />
              <line x1="980" y1="260" x2="1040" y2="260" />
              {/* Curved roof */}
              <path d="M975 260 Q1010 235 1045 260" />
              {/* Second tier roof */}
              <path d="M985 245 Q1010 225 1035 245" />
              {/* Top finial */}
              <line x1="1010" y1="225" x2="1010" y2="215" />

              {/* === Small buildings far right === */}
              <rect x="1070" y="260" width="18" height="50" />
              <line x1="1070" y1="280" x2="1088" y2="280" />
              <line x1="1079" y1="260" x2="1079" y2="310" />

              <rect x="1100" y="268" width="22" height="42" />
              <line x1="1100" y1="288" x2="1122" y2="288" />
              <line x1="1111" y1="268" x2="1111" y2="310" />

              <rect x="1135" y="272" width="16" height="38" />
              <line x1="1135" y1="290" x2="1151" y2="290" />

              {/* === Far left buildings (Banqiao area) === */}
              <rect x="60" y="240" width="22" height="70" />
              <line x1="60" y1="265" x2="82" y2="265" />
              <line x1="60" y1="285" x2="82" y2="285" />
              <line x1="71" y1="240" x2="71" y2="310" />

              <rect x="95" y="250" width="18" height="60" />
              <line x1="95" y1="275" x2="113" y2="275" />
              <line x1="104" y1="250" x2="104" y2="310" />

              <rect x="125" y="235" width="24" height="75" />
              <line x1="125" y1="260" x2="149" y2="260" />
              <line x1="125" y1="285" x2="149" y2="285" />
              <line x1="137" y1="235" x2="137" y2="310" />

              <rect x="160" y="255" width="18" height="55" />
              <line x1="160" y1="278" x2="178" y2="278" />
              <line x1="169" y1="255" x2="169" y2="310" />

              {/* === Keelung River line (subtle water reflection) === */}
              <path d="M0 315 Q150 318 300 316 Q450 319 600 317 Q750 320 900 316 Q1050 319 1200 317" strokeDasharray="4 8" />
            </g>
          </svg>
        </div>

        {/* Hero vignette overlay */}
        <div id="hero-vignette" className="absolute inset-0 z-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(10,11,13,0.0) 0%, rgba(10,11,13,0.5) 60%, rgba(10,11,13,0.85) 100%)'
        }}></div>

        {/* Hero text */}
        <div className="hero-centre relative z-10 text-center">
          <h1 className="text-7xl mb-4">About</h1>
          <p className="about-subtitle">Architecture student &amp; content creator at @bykevinchiang</p>
        </div>
      </section>

      {/* PROFILE SECTION */}
      <section className="about-profile rv">
        <div className="about-photo">
          <img
            src="/images/about-header.jpeg"
            alt="Kevin Chiang"
            width={280}
            height={373}
          />
        </div>
        <div>
          <h2>Kevin Chiang</h2>
          <p className="about-location">Melbourne, Australia</p>
          <div className="about-bullets">
            <div className="about-bullet">Final year architecture @ University of Melbourne</div>
            <div className="about-bullet">Content creator — 125K avg. views / reel</div>
            <div className="about-bullet">99%+ non-follower reach (discovery)</div>
            <div className="about-bullet">Partners: SUAPP.ai · Foyr Neo · Facade Tools</div>
          </div>
        </div>
      </section>

      {/* THE STORY SECTION */}
      <section className="about-story rv">
        <h2 className="about-story-label">The Story</h2>
        <div className="about-story-text">
          <p>Architecture school teaches you to design. Nobody teaches you the tools. I'm fixing that.</p>
          <p>I'm Kevin — a final year architecture student at the University of Melbourne and content creator based in Melbourne, Australia. I share the tips, workflows, and honest software reviews I wish someone had shown me in first year — so you can spend less time learning the hard way, and more time designing things that actually matter.</p>
          <p>I work across the full design stack: Rhino, SketchUp, Revit, Twinmotion, D5, Illustrator, InDesign, and CapCut. When I recommend a tool, it's because I've used it in my own projects.</p>
        </div>
      </section>

      {/* WHAT I DO SECTION */}
      <section className="about-wid rv">
        <h2 className="about-wid-label">What I Do</h2>
        <div className="about-wid-grid">
          <div className="about-wid-card">
            <h3>Content Creation</h3>
            <p>Short-form vertical video — tutorials, workflow demos, and honest reviews of architecture software. 125K average views per reel with a 13.6% interaction rate.</p>
          </div>
          <div className="about-wid-card">
            <h3>Architecture</h3>
            <p>Final year design studio at the University of Melbourne. Working across Rhino, SketchUp, Revit, D5 Render, Illustrator, and InDesign — from concept to presentation.</p>
          </div>
          <div className="about-wid-card">
            <h3>Brand Partnerships</h3>
            <p>Sponsored reels, affiliate content, and UGC packages for architecture software companies looking to reach students and professionals authentically.</p>
          </div>
        </div>
      </section>

      {/* GET IN TOUCH SECTION */}
      <section className="about-touch rv">
        <h2 className="about-touch-label">Get In Touch</h2>
        <div className="about-touch-links">
          <a href="mailto:contact@bykevinchiang.com">contact@bykevinchiang.com</a>
          <a href="https://www.instagram.com/bykevinchiang/" target="_blank" rel="noopener noreferrer">instagram</a>
          <a href="https://bykevinchiang.com" target="_blank" rel="noopener noreferrer">bykevinchiang.com</a>
        </div>
      </section>
    </main>
  );
}
