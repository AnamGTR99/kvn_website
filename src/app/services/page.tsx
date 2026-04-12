import Link from 'next/link';

export const metadata = {
  title: 'Services — Kevin Chiang',
  description: 'Architecture-focused content creation and sponsorship services',
};

export default function ServicesPage() {
  return (
    <main>
      {/* PAGE HERO */}
      <div className="site-boundary">
        <div className="page-hero rv">
          <div className="slbl">Kevin Chiang · Services</div>
          <h1 className="hero-name">
            Sponsored <em>Content</em>
          </h1>
          <p
            style={{
              fontSize: '14px',
              color: 'var(--fd)',
              letterSpacing: '.08em',
              marginTop: '20px',
              lineHeight: '1.6',
              maxWidth: '640px',
            }}
          >
            I create high-quality, architecture-focused content for software companies and brands. Whether you're looking for sponsored reels, affiliate partnerships, or UGC packages — I can help you reach students and professionals authentically.
          </p>
        </div>
      </div>

      {/* STATS BAR */}
      <div className="stats-bar">
        <div className="sb">
          <span className="sb-n">125K</span>
          <span className="sb-l">Avg. views / reel</span>
          <span className="sb-s">across 50 sponsored reels</span>
        </div>
        <div className="sb">
          <span className="sb-n">7.3K</span>
          <span className="sb-l">Avg. saves / reel</span>
          <span className="sb-s">high-intent signal</span>
        </div>
        <div className="sb">
          <span className="sb-n">87K</span>
          <span className="sb-l">Avg. reach / reel</span>
          <span className="sb-s">unique accounts</span>
        </div>
        <div className="sb">
          <span className="sb-n">13.6%</span>
          <span className="sb-l">Avg. interaction rate</span>
          <span className="sb-s">industry avg. 1–3%</span>
        </div>
      </div>

      {/* SERVICES SECTION */}
      <section id="services" className="site-boundary">
        <div className="svcgrid rv">
          <div className="svc">
            <div className="svcn">01 —</div>
            <div className="svcname">
              Sponsored <em>Reels</em>
            </div>
            <div className="svcd">
              Short-form vertical video showcasing your architecture software — tutorials, workflow demos, or honest reviews.
            </div>
            <a href="mailto:contact@bykevinchiang.com" className="svca">
              Enquire ↗
            </a>
          </div>

          <div className="svc">
            <div className="svcn">02 —</div>
            <div className="svcname">
              Affiliate <em>Content</em>
            </div>
            <div className="svcd">
              Ongoing commission partnership — I integrate your tool naturally, driving conversions through tracked links or discount codes.
            </div>
            <a href="mailto:contact@bykevinchiang.com" className="svca">
              Enquire ↗
            </a>
          </div>

          <div className="svc">
            <div className="svcn">03 —</div>
            <div className="svcname">
              UGC <em>Packages</em>
            </div>
            <div className="svcd">
              Video assets made for your brand's own channels — architecture-native content you own fully.
            </div>
            <a href="mailto:contact@bykevinchiang.com" className="svca">
              Enquire ↗
            </a>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="contact" className="site-boundary">
        <div className="cgrid rv">
          <div className="cl">
            <h2 className="ct">
              Let's <em>Work!</em>
            </h2>
            <p className="cb">
              Whether you're an architecture software company looking to reach students and professionals, or a brand wanting authentic UGC — I'd love to hear from you. All pricing discussed on enquiry.
            </p>
            <div className="clinks">
              <a
                href="https://www.instagram.com/bykevinchiang/"
                target="_blank"
                rel="noopener noreferrer"
                className="clink"
              >
                @bykevinchiang
              </a>
              <a href="mailto:contact@bykevinchiang.com" className="clink">
                contact@bykevinchiang.com
              </a>
              <a
                href="https://bykevinchiang.com"
                target="_blank"
                rel="noopener noreferrer"
                className="clink"
              >
                bykevinchiang.com
              </a>
            </div>
          </div>
          <div className="cr">
            <div className="cform">
              <input type="text" placeholder="Your name" />
              <input type="text" placeholder="Company / brand" />
              <input type="email" placeholder="Email address" />
              <textarea placeholder="Tell me about your project..."></textarea>
              <button className="cbtn">Send enquiry</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
