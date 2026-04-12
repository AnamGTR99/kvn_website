import Image from 'next/image';

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
              Final Year Design Studio project at the <strong style={{ color: 'var(--fg)', fontWeight: 400 }}>University of Melbourne</strong>, 2026. A public transit station and community program exploring how threshold, light, and materiality can transform residual urban space into civic life.
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '20px' }}>
              <span
                style={{
                  fontSize: '9px',
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                  padding: '4px 10px',
                  border: '0.5px solid var(--ln)',
                  color: 'var(--fd)',
                  borderRadius: '2px',
                }}
              >
                University of Melbourne
              </span>
              <span
                style={{
                  fontSize: '9px',
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                  padding: '4px 10px',
                  border: '0.5px solid var(--ln)',
                  color: 'var(--fd)',
                  borderRadius: '2px',
                }}
              >
                Architecture
              </span>
              <span
                style={{
                  fontSize: '9px',
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                  padding: '4px 10px',
                  border: '0.5px solid var(--ln)',
                  color: 'var(--fd)',
                  borderRadius: '2px',
                }}
              >
                Final Year Studio
              </span>
              <span
                style={{
                  fontSize: '9px',
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                  padding: '4px 10px',
                  border: '0.5px solid var(--ln)',
                  color: 'var(--fd)',
                  borderRadius: '2px',
                }}
              >
                2026
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* PROJECT DETAILS SECTION */}
      <div className="site-boundary" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="ptr rv">
          <div>
            <div className="slbl" style={{ marginBottom: '16px' }}>
              Project Details
            </div>
            <h2 className="pbt">
              Design <em>&amp; Deliverables</em>
            </h2>
          </div>
          <div className="pm">
            <p>Rhino · SketchUp · D5 · Revit</p>
            <p>Illustrator · InDesign</p>
          </div>
        </div>

        <div className="pdrow rv">
          <p className="pd">
            A public transit station and community program inserted beneath elevated infrastructure in an inner-city context. The project explores how <strong>threshold, light, and materiality</strong> can transform residual urban space into a place of civic life.
            <br />
            <br />
            Brick, concrete, and timber respond to the rawness of the infrastructure above, while a central landscaped atrium draws natural light deep into the plan.
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
      </div>

      {/* IMAGE GALLERY */}
      <div className="pgal rv">
        <img src="/images/ptag.png" alt="Urban Station - Parametric Analysis" />
      </div>

      <div className="site-boundary" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="pg">
          <img src="/images/exterior-entry.png" alt="Exterior Entry View" />
        </div>
      </div>

      <div className="pgal rv">
        <img src="/images/interior-dining.png" alt="Interior Dining Space" />
      </div>

      <div className="site-boundary" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="pg">
          <img src="/images/garden-atrium.png" alt="Garden Atrium" />
        </div>
      </div>

      <div className="pgal rv">
        <img src="/images/context-model.png" alt="Context Model" />
      </div>

      <div className="site-boundary" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="pg">
          <img src="/images/massing-model.png" alt="Massing Model" />
        </div>
      </div>

      <div className="pgal rv">
        <img src="/images/model-detail.png" alt="Model Detail" />
      </div>

      <div className="site-boundary" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="pg">
          <img src="/images/axon.png" alt="Axonometric Drawing" />
        </div>
      </div>

      <div className="pgal rv">
        <img src="/images/gilbl.png" alt="Gold Lion Building - Context" />
      </div>
    </main>
  );
}
