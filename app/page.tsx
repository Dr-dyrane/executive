import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="hero shell">
        <div className="hero-grid">
          <div className="hero-copy">
            <div>
              <div className="kicker">Dyrane Executive Intelligence</div>
              <h1>People,<br />in context.</h1>
            </div>
            <div>
              <p>Evidence-backed executive profiles built from public records, current activity, institutional relationships and source-linked visual storytelling.</p>
              <div className="pills">
                <span className="pill gold">EIP–001 live</span>
                <span className="pill">Public sources only</span>
              </div>
            </div>
          </div>
          <Link className="hero-visual" href="/people/alex-irune">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5327163be4b0c0f6fcfec90e/d7900c8f-e6f7-492a-8743-ea5c4d5087c0/Alex-MD.png"
              alt="Dr. Ainojie Alex Irune"
            />
            <div className="caption">Ainojie “Alex” Irune · open profile →</div>
          </Link>
        </div>
      </section>

      <section className="manifesto shell">
        <div className="manifesto-copy">
          Not a résumé directory.<br />
          <span className="faded">A living map of leadership, work and influence.</span>
        </div>
      </section>
    </main>
  );
}
