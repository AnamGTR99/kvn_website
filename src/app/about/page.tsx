export default function AboutPage() {
  return (
    <main>
      {/* HERO — 3 columns: photo | taipei 101 | text */}
      <section className="about-hero">
        {/* Faint skyline behind everything */}
        <div className="tw-skyline-bg">
          <svg viewBox="0 0 1200 340" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="tron-sweep-bg" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="35%" stopColor="white" stopOpacity="0" />
                <stop offset="45%" stopColor="white" stopOpacity="0.5" />
                <stop offset="50%" stopColor="white" stopOpacity="0.8" />
                <stop offset="55%" stopColor="white" stopOpacity="0.5" />
                <stop offset="65%" stopColor="white" stopOpacity="0" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
                <animateTransform attributeName="gradientTransform" type="translate" values="-1 0; 1 0" dur="8s" repeatCount="indefinite" />
              </linearGradient>
            </defs>
            <g stroke="rgba(180,200,230,0.45)" strokeWidth="0.8" fill="none">
              <line x1="0" y1="310" x2="1200" y2="310" />
              <rect x="490" y="155" width="28" height="155" />
              <line x1="504" y1="155" x2="504" y2="310" />
              <rect x="195" y="165" width="20" height="145" />
              <line x1="205" y1="165" x2="205" y2="310" />
              <rect x="240" y="195" width="30" height="115" />
              <rect x="290" y="220" width="24" height="90" />
              <rect x="320" y="235" width="20" height="75" />
              <rect x="360" y="210" width="26" height="100" />
              <rect x="425" y="205" width="28" height="105" />
              <rect x="635" y="210" width="26" height="100" />
              <rect x="700" y="215" width="30" height="95" />
              <rect x="745" y="240" width="35" height="70" />
              <rect x="845" y="225" width="26" height="85" />
              <rect x="920" y="250" width="24" height="60" />
              <rect x="60" y="240" width="22" height="70" />
              <rect x="125" y="235" width="24" height="75" />
              <path d="M0 315 Q150 318 300 316 Q450 319 600 317 Q750 320 900 316 Q1050 319 1200 317" strokeDasharray="4 8" />
            </g>
            <g stroke="url(#tron-sweep-bg)" strokeWidth="0.7" fill="none">
              <line x1="0" y1="310" x2="1200" y2="310" />
              <rect x="490" y="155" width="28" height="155" />
              <rect x="195" y="165" width="20" height="145" />
              <rect x="240" y="195" width="30" height="115" />
              <rect x="290" y="220" width="24" height="90" />
              <rect x="320" y="235" width="20" height="75" />
              <rect x="360" y="210" width="26" height="100" />
              <rect x="425" y="205" width="28" height="105" />
              <rect x="635" y="210" width="26" height="100" />
              <rect x="700" y="215" width="30" height="95" />
              <rect x="745" y="240" width="35" height="70" />
              <rect x="845" y="225" width="26" height="85" />
              <rect x="920" y="250" width="24" height="60" />
              <rect x="60" y="240" width="22" height="70" />
              <rect x="125" y="235" width="24" height="75" />
            </g>
          </svg>
        </div>

        <div className="about-vignette"></div>

        {/* "About" heading top-left */}
        <div className="about-wrapper" style={{ paddingBottom: 0 }}>
          <div className="about-header rv">
            <h1>About</h1>
          </div>
        </div>

        {/* 3-column layout */}
        <div className="about-trio">
          {/* LEFT — Photo */}
          <div className="about-trio-photo rv">
            <img
              src="/images/about-header.jpeg"
              alt="Kevin Chiang"
              width={320}
              height={426}
            />
          </div>

          {/* CENTER — Taipei 101 centerpiece */}
          <div className="about-trio-tower rv">
            <svg viewBox="0 0 120 520" xmlns="http://www.w3.org/2000/svg" className="taipei101-svg">
              <defs>
                <linearGradient id="tron-sweep-101" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="rgba(200,220,255,0.3)" stopOpacity="1" />
                  <stop offset="30%" stopColor="rgba(200,220,255,0.3)" stopOpacity="1" />
                  <stop offset="45%" stopColor="rgba(200,220,255,1)" stopOpacity="1" />
                  <stop offset="50%" stopColor="white" stopOpacity="1" />
                  <stop offset="55%" stopColor="rgba(200,220,255,1)" stopOpacity="1" />
                  <stop offset="70%" stopColor="rgba(200,220,255,0.3)" stopOpacity="1" />
                  <stop offset="100%" stopColor="rgba(200,220,255,0.3)" stopOpacity="1" />
                  <animateTransform attributeName="gradientTransform" type="translate" values="0 1; 0 -1" dur="5s" repeatCount="indefinite" />
                </linearGradient>
              </defs>

              {/* Base solid layer */}
              <g stroke="rgba(200,220,255,0.45)" strokeWidth="1.2" fill="none">
                {/* Spire */}
                <line x1="60" y1="0" x2="60" y2="65" />
                <line x1="55" y1="28" x2="65" y2="28" />
                <line x1="53" y1="40" x2="67" y2="40" />
                <line x1="51" y1="52" x2="69" y2="52" />
                {/* Main shaft */}
                <rect x="42" y="65" width="36" height="330" />
                {/* Bamboo segment flanges — 8 tiers */}
                <path d="M32 110 L42 110 L42 148 L32 148" />
                <path d="M78 110 L88 110 L88 148 L78 148" />
                <path d="M33 150 L42 150 L42 186 L33 186" />
                <path d="M78 150 L87 150 L87 186 L78 186" />
                <path d="M34 188 L42 188 L42 222 L34 222" />
                <path d="M78 188 L86 188 L86 222 L78 222" />
                <path d="M35 224 L42 224 L42 256 L35 256" />
                <path d="M78 224 L85 224 L85 256 L78 256" />
                <path d="M36 258 L42 258 L42 288 L36 288" />
                <path d="M78 258 L84 258 L84 288 L78 288" />
                {/* Horizontal dividers */}
                <line x1="30" y1="110" x2="90" y2="110" />
                <line x1="31" y1="148" x2="89" y2="148" />
                <line x1="32" y1="186" x2="88" y2="186" />
                <line x1="33" y1="222" x2="87" y2="222" />
                <line x1="34" y1="256" x2="86" y2="256" />
                <line x1="35" y1="288" x2="85" y2="288" />
                <line x1="36" y1="318" x2="84" y2="318" />
                <line x1="37" y1="345" x2="83" y2="345" />
                {/* Podium */}
                <rect x="28" y="395" width="64" height="100" />
                <line x1="28" y1="425" x2="92" y2="425" />
                <line x1="28" y1="455" x2="92" y2="455" />
                {/* Podium verticals */}
                <line x1="42" y1="395" x2="42" y2="495" />
                <line x1="55" y1="395" x2="55" y2="495" />
                <line x1="65" y1="395" x2="65" y2="495" />
                <line x1="78" y1="395" x2="78" y2="495" />
                {/* Ground */}
                <line x1="10" y1="495" x2="110" y2="495" />
              </g>

              {/* Tron sweep layer — vertical sweep up the tower */}
              <g stroke="url(#tron-sweep-101)" strokeWidth="1.2" fill="none">
                <line x1="60" y1="0" x2="60" y2="65" />
                <line x1="55" y1="28" x2="65" y2="28" />
                <line x1="53" y1="40" x2="67" y2="40" />
                <line x1="51" y1="52" x2="69" y2="52" />
                <rect x="42" y="65" width="36" height="330" />
                <path d="M32 110 L42 110 L42 148 L32 148" />
                <path d="M78 110 L88 110 L88 148 L78 148" />
                <path d="M33 150 L42 150 L42 186 L33 186" />
                <path d="M78 150 L87 150 L87 186 L78 186" />
                <path d="M34 188 L42 188 L42 222 L34 222" />
                <path d="M78 188 L86 188 L86 222 L78 222" />
                <path d="M35 224 L42 224 L42 256 L35 256" />
                <path d="M78 224 L85 224 L85 256 L78 256" />
                <path d="M36 258 L42 258 L42 288 L36 288" />
                <path d="M78 258 L84 258 L84 288 L78 288" />
                <line x1="30" y1="110" x2="90" y2="110" />
                <line x1="31" y1="148" x2="89" y2="148" />
                <line x1="32" y1="186" x2="88" y2="186" />
                <line x1="33" y1="222" x2="87" y2="222" />
                <line x1="34" y1="256" x2="86" y2="256" />
                <line x1="35" y1="288" x2="85" y2="288" />
                <line x1="36" y1="318" x2="84" y2="318" />
                <line x1="37" y1="345" x2="83" y2="345" />
                <rect x="28" y="395" width="64" height="100" />
                <line x1="28" y1="425" x2="92" y2="425" />
                <line x1="28" y1="455" x2="92" y2="455" />
                <line x1="42" y1="395" x2="42" y2="495" />
                <line x1="55" y1="395" x2="55" y2="495" />
                <line x1="65" y1="395" x2="65" y2="495" />
                <line x1="78" y1="395" x2="78" y2="495" />
                <line x1="10" y1="495" x2="110" y2="495" />
              </g>
            </svg>
          </div>

          {/* RIGHT — Name + info */}
          <div className="about-trio-info rv">
            <h2>Kevin Chiang</h2>
            <p className="about-location">Melbourne, Australia</p>
            <p className="about-subtitle">Architecture student &amp; content creator<br />@bykevinchiang</p>
            <div className="about-bullets">
              <div className="about-bullet">Final year architecture @ University of Melbourne</div>
              <div className="about-bullet">Content creator — 125K avg. views / reel</div>
              <div className="about-bullet">99%+ non-follower reach (discovery)</div>
              <div className="about-bullet">Partners: SUAPP.ai · Foyr Neo · Facade Tools</div>
            </div>
          </div>
        </div>
      </section>

      {/* THE STORY SECTION */}
      <section className="about-wrapper">
        <div className="about-story rv">
          <h2 className="about-story-label">The Story</h2>
          <div className="about-story-text">
            <p>Architecture school teaches you to design. Nobody teaches you the tools. I&apos;m fixing that.</p>
            <p>I&apos;m Kevin — a final year architecture student at the University of Melbourne and content creator based in Melbourne, Australia. I share the tips, workflows, and honest software reviews I wish someone had shown me in first year — so you can spend less time learning the hard way, and more time designing things that actually matter.</p>
            <p>I work across the full design stack: Rhino, SketchUp, Revit, Twinmotion, D5, Illustrator, InDesign, and CapCut. When I recommend a tool, it&apos;s because I&apos;ve used it in my own projects.</p>
          </div>
        </div>

        {/* WHAT I DO SECTION */}
        <div className="about-wid rv">
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
        </div>

        {/* GET IN TOUCH SECTION */}
        <div className="about-touch rv">
          <h2 className="about-touch-label">Get In Touch</h2>
          <div className="about-touch-links">
            <a href="mailto:contact@bykevinchiang.com">contact@bykevinchiang.com</a>
            <a href="https://www.instagram.com/bykevinchiang/" target="_blank" rel="noopener noreferrer">instagram</a>
            <a href="https://bykevinchiang.com" target="_blank" rel="noopener noreferrer">bykevinchiang.com</a>
          </div>
        </div>
      </section>
    </main>
  );
}
