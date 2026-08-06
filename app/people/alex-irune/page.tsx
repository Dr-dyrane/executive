import { alexIrune } from "@/content/people/alex-irune/profile";

export default function AlexIrunePage() {
  const profile = alexIrune;

  return (
    <main>
      <header className="topbar">
        <div className="shell topbar-inner">
          <div className="brand">DYRANE / EIP–001</div>
          <nav className="nav" aria-label="Profile navigation">
            <a href="#story">Story</a>
            <a href="#now">Now</a>
            <a href="#network">Network</a>
            <a href="#sources">Sources</a>
          </nav>
        </div>
      </header>

      <section className="hero shell">
        <div className="hero-grid">
          <div className="hero-copy">
            <div>
              <div className="kicker">{profile.eyebrow}</div>
              <h1>Ainojie<br />“Alex”<br />Irune</h1>
            </div>
            <div>
              <p>{profile.thesis}</p>
              <div className="pills">
                {profile.roles.map((role, index) => (
                  <span className={`pill ${index === 0 ? "gold" : ""}`} key={role}>{role}</span>
                ))}
              </div>
            </div>
          </div>

          <a className="hero-visual" href={profile.heroImage.source} target="_blank" rel="noreferrer">
            <img src={profile.heroImage.src} alt={profile.heroImage.alt} />
            <div className="caption">Official profile · source ↗</div>
          </a>
        </div>
      </section>

      <section className="manifesto shell" id="story">
        <div className="manifesto-copy">
          {profile.manifesto.map(([lead, tail]) => (
            <div key={lead}>{lead} <span className="faded">{tail}</span></div>
          ))}
        </div>
      </section>

      <section className="chapter shell">
        <div className="story-grid">
          <a className="visual" href={profile.featuredVisual.source} target="_blank" rel="noreferrer">
            <img src={profile.featuredVisual.src} alt={profile.featuredVisual.alt} />
            <div className="visual-copy">
              <div className="eyebrow">{profile.featuredVisual.label}</div>
              <h3>{profile.featuredVisual.headline}</h3>
            </div>
          </a>
          <div className="quote">
            <blockquote>“Capital follows opportunity, not need.”</blockquote>
            <small>Publicly recurring thesis in recent energy-sector commentary. Keep the underlying source record attached before using it as hero quotation copy.</small>
          </div>
        </div>
      </section>

      <section className="chapter shell" id="now">
        <div className="chapter-head">
          <div className="eyebrow">2026 / now</div>
          <div>
            <h2>The current signal is execution.</h2>
            <p className="intro">Recent public activity clusters around indigenous operators, production growth, disciplined capital, domestic gas, governance and institutional capability.</p>
          </div>
        </div>
        <div className="signal-grid">
          {profile.signals.map((signal, index) => (
            <article className={`signal ${index === 0 ? "feature" : ""}`} key={signal.title}>
              <div>
                <div className="eyebrow">{signal.date} · {signal.label}</div>
                <h3>{signal.title}</h3>
                <p>{signal.body}</p>
              </div>
              <a href={signal.href} target="_blank" rel="noreferrer">Source ↗</a>
            </article>
          ))}
        </div>
      </section>

      <section className="chapter shell" id="network">
        <div className="chapter-head">
          <div className="eyebrow">Relationship intelligence</div>
          <div>
            <h2>Map the institution, not the gossip.</h2>
            <p className="intro">Only documented professional, corporate, board, industry and public-sector relationships belong here. No private daily routine, private relationship or non-public location inference.</p>
          </div>
        </div>
        <div className="people-grid">
          {profile.relationships.map((relationship) => (
            <article className="person" key={`${relationship.type}-${relationship.name}`}>
              <div className="eyebrow">{relationship.type}</div>
              <h3>{relationship.name}</h3>
              <p>{relationship.body}</p>
              <a href={relationship.href} target="_blank" rel="noreferrer">Evidence ↗</a>
            </article>
          ))}
        </div>
      </section>

      <section className="chapter shell" id="sources">
        <div className="chapter-head">
          <div className="eyebrow">Source ledger</div>
          <div>
            <h2>Everything remains auditable.</h2>
            <p className="intro">Primary corporate material is preferred; press and event sources add current context. Public claims should retain provenance internally.</p>
          </div>
        </div>
        <div className="source-grid">
          {profile.sources.map(([title, detail, href]) => (
            <a className="source" href={href} target="_blank" rel="noreferrer" key={title}>
              <div><b>{title}</b><small>{detail}</small></div>
              <span>↗</span>
            </a>
          ))}
        </div>
      </section>

      <footer className="footer shell">
        DYRANE / Executive Intelligence Profile 001 — public-source research draft. Image and publication rights remain with their respective rights holders. Private relationships, private contact data, non-public locations and private schedule inference are excluded.
      </footer>
    </main>
  );
}
