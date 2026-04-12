export const metadata = {
  title: 'Urban Station & Community Hub — Kevin Chiang',
  description: 'Final Year Design Studio project at the University of Melbourne',
};

export default function ProjectPage() {
  return (
    <main>
      {/* PROJECT HERO */}
      <div className="site-boundary">
        <div className="page-hero rv">
          <div className="page-hero-text">
            <div className="slbl">Kevin Chiang · Architecture Portfolio</div>
            <h1>
              Urban Station
              <em>&amp; Community Hub</em>
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
              Final Year Design Studio project at the{' '}
              <strong style={{ color: 'var(--fg)', fontWeight: 400 }}>
                University of Melbourne
              </strong>
              , 2026. A public transit station and community program exploring how
              threshold, light, and materiality can transform residual urban space
              into civic life.
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '20px' }}>
              <span className="ptag">University of Melbourne</span>
              <span className="ptag">Architecture</span>
              <span className="ptag">Final Year Studio</span>
              <span className="ptag">2026</span>
            </div>
          </div>
          <div className="page-hero-image">
            <img src="/images/garden-atrium.png" alt="Urban Station project render" />
          </div>
        </div>
      </div>

      {/* PROJECT DETAILS SECTION */}
      <section id="project" className="site-boundary">
        <div className="ph rv">
          <div className="ptr">
            <div>
              <div className="slbl">Project Details</div>
              <h2 className="pbt">
                Design <em>&amp; Deliverables</em>
              </h2>
            </div>
            <div className="pm">
              <p>Rhino · SketchUp · D5 · Revit</p>
              <p>Illustrator · InDesign</p>
            </div>
          </div>
        </div>

        <div className="pdrow rv">
          <p className="pd">
            A public transit station and community program inserted beneath
            elevated infrastructure in an inner-city context. The project explores
            how <strong>threshold, light, and materiality</strong> can transform
            residual urban space into a place of civic life.
            <br />
            <br />
            The design responds to the rawness of existing elevated rail
            infrastructure — brick, concrete, and timber ground the building in
            its industrial surroundings while a central landscaped atrium draws
            natural light deep into the plan, creating a sequence of interlocking
            interior and exterior spaces. The station concourse, community hall,
            and public garden are organised along a single circulation spine,
            allowing commuters and residents to move through the project
            without barriers.
            <br />
            <br />
            Structurally, cross-laminated timber panels span between concrete
            piers that carry the rail load above. The roof folds to create
            clerestory windows on the north façade, flooding the waiting
            platforms with diffused daylight and reducing reliance on artificial
            lighting during operating hours.
          </p>
          <div>
            <div className="ptlbl">Deliverables</div>
            <div className="ptags">
              <span className="ptag">Exploded axonometric</span>
              <span className="ptag">Isometric in site</span>
              <span className="ptag">Interior renders</span>
              <span className="ptag">Exterior renders</span>
              <span className="ptag">Physical models</span>
            </div>
            <div className="ptlbl" style={{ marginTop: '12px' }}>
              Software
            </div>
            <div className="ptags">
              <span className="ptag">Rhino</span>
              <span className="ptag">SketchUp</span>
              <span className="ptag">D5 Render</span>
              <span className="ptag">Revit</span>
              <span className="ptag">Illustrator</span>
              <span className="ptag">InDesign</span>
            </div>
          </div>
        </div>

        {/* IMAGE GALLERY — curated selection */}
        <div className="pgal rv">
          {/* Full-width hero gallery image */}
          <div className="gh">
            <img src="/images/garden-atrium.png" alt="Garden atrium" />
            <div className="glbl">Interior — Garden atrium &amp; courtyard</div>
          </div>

          {/* 2-col row — best renders */}
          <div className="g2">
            <div className="gi">
              <img src="/images/interior-dining.png" alt="Interior dining" />
              <div className="gilbl">Interior — Dining &amp; gathering space</div>
            </div>
            <div className="gi">
              <img src="/images/exterior-entry.png" alt="Exterior entry" />
              <div className="gilbl">Exterior — Entry colonnade</div>
            </div>
          </div>

          {/* Full-width drawing */}
          <div className="gh">
            <img src="/images/axon.png" alt="Axonometric drawing" />
            <div className="glbl">Exploded axonometric</div>
          </div>

          {/* Full-width closing image — physical model */}
          <div className="gh">
            <img src="/images/model-elevation.png" alt="Model elevation" />
            <div className="glbl">Physical model — elevation</div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="contact" className="site-boundary">
        <div className="cgrid rv">
          <div className="cl">
            <h2 className="ct">
              Let&apos;s build
              <em>something.</em>
            </h2>
            <p className="contact-body">
              Whether you&apos;re an architecture software company looking to reach
              students and professionals, or a brand wanting authentic UGC —
              I&apos;d love to hear from you. All pricing discussed on enquiry.
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
