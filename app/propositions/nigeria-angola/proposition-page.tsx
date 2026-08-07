import Link from "next/link";
import { Icon } from "@/components/executive/icon";
import { IssueExperience } from "@/components/executive/issue-experience";
import { nigeriaAngolaCorridor } from "@/content/propositions/nigeria-angola";
import styles from "./proposition.module.css";

const sections = [
  { id: "cover", label: "Cover", icon: "compass" },
  { id: "mandate", label: "Proposal", icon: "arrow" },
  { id: "model", label: "Process", icon: "users" },
  { id: "sprint", label: "30 days", icon: "calendar" },
  { id: "decision", label: "The ask", icon: "check" },
  { id: "sources", label: "Evidence", icon: "source" },
] as const;

function CorridorField() {
  return (
    <div className={styles.corridorField} aria-hidden="true">
      <svg viewBox="0 0 760 640" role="presentation">
        <defs>
          <linearGradient id="corridor-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#6de1ad" />
            <stop offset="0.54" stopColor="#e6d59d" />
            <stop offset="1" stopColor="#e77b53" />
          </linearGradient>
          <radialGradient id="node-glow">
            <stop offset="0" stopColor="#fff" stopOpacity="0.92" />
            <stop offset="0.22" stopColor="#d9ae67" stopOpacity="0.72" />
            <stop offset="1" stopColor="#d9ae67" stopOpacity="0" />
          </radialGradient>
          <filter id="soft-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className={styles.gridLines}>
          <path d="M70 80H690M70 200H690M70 320H690M70 440H690M70 560H690" />
          <path d="M120 42V598M260 42V598M400 42V598M540 42V598M680 42V598" />
          <ellipse cx="380" cy="320" rx="294" ry="222" />
          <ellipse cx="380" cy="320" rx="210" ry="158" />
        </g>

        <path className={styles.routeGhost} d="M174 176C248 164 282 220 344 270C418 330 438 432 572 468" />
        <path className={styles.route} d="M174 176C248 164 282 220 344 270C418 330 438 432 572 468" />

        <g transform="translate(174 176)">
          <circle r="45" fill="url(#node-glow)" opacity="0.34" />
          <circle r="8" fill="#7ce5b5" filter="url(#soft-glow)" />
          <circle r="3" fill="#f6fff9" />
        </g>

        <g transform="translate(572 468)">
          <circle r="56" fill="url(#node-glow)" opacity="0.42" />
          <circle r="9" fill="#e98960" filter="url(#soft-glow)" />
          <circle r="3" fill="#fff7f1" />
        </g>

        <g className={styles.fieldLabels}>
          <text x="116" y="145">LAGOS</text>
          <text x="116" y="163">NIGERIA</text>
          <text x="596" y="452">LUANDA</text>
          <text x="596" y="470">ANGOLA</text>
          <text x="492" y="530">KON 13 · KWANZA</text>
        </g>

        <g className={styles.signalMarks}>
          <circle cx="294" cy="226" r="3" />
          <circle cx="372" cy="298" r="3" />
          <circle cx="438" cy="374" r="3" />
          <circle cx="498" cy="430" r="3" />
        </g>
      </svg>
      <div className={styles.fieldCode}>NGA / AGO · 001</div>
    </div>
  );
}

export default function NigeriaAngolaPropositionPage() {
  const proposition = nigeriaAngolaCorridor;

  return (
    <main className={styles.page} id="main-content" tabIndex={-1} data-experience-root>
      <IssueExperience sections={sections} issueLabel={`Proposal ${proposition.number}`} />

      <header className={styles.topbar}>
        <div className={styles.topbarInner}>
          <Link className={styles.brand} href="/">Dyrane Strategic Ventures</Link>
          <nav className={styles.nav} aria-label="Proposal navigation">
            <a href="#mandate">Proposal</a>
            <a href="#model">How it works</a>
            <a href="#sprint">30 days</a>
            <a href="#decision">The ask</a>
          </nav>
          <Link className={styles.returnLink} href="/people/alex-irune">
            Alex Irune <Icon name="arrow" size={15} />
          </Link>
        </div>
      </header>

      <section className={styles.hero} id="cover" aria-labelledby="proposition-title">
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroStamp}>
          <span>Business development proposal {proposition.number}</span>
          <span>{proposition.preparedFor}</span>
        </div>

        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <h1 className="font-display" id="proposition-title">
              <small>KON 13 · Kwanza Basin</small>
              Nigeria<br />
              <em>×</em> Angola
            </h1>
            <p className={`${styles.heroSubtitle} font-display`}>{proposition.subtitle}.</p>
          </div>
          <CorridorField />
        </div>

        <div className={styles.coverRail} aria-label="Open the proposal">
          <a href="#mandate">
            <div>
              <span>What we are proposing</span>
              <strong className="font-display">{proposition.line}</strong>
            </div>
            <Icon name="arrow" />
          </a>
          <a href="#model">
            <div>
              <span>How it works</span>
              <strong className="font-display">Understand · Find · Verify · Present</strong>
            </div>
            <Icon name="arrow" />
          </a>
        </div>
      </section>

      <section className={styles.mandate} id="mandate" aria-labelledby="mandate-title">
        <div className={styles.shell}>
          <div className={styles.sectionLabel}>The proposal</div>
          <h2 className={`${styles.displayTitle} font-display`} id="mandate-title">{proposition.mandate}</h2>

          <div className={styles.mandateGrid}>
            <p className={styles.objective}>{proposition.objective}</p>
            <dl className={styles.specification}>
              {proposition.specification.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd className="font-display">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className={styles.model} id="model" aria-labelledby="model-title">
        <div className={styles.shell}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>How it works</div>
            <h2 className={`${styles.sectionTitle} font-display`} id="model-title">
              Oando leads the block.<br />We build the supplier network around it.
            </h2>
          </div>

          <div className={styles.field} aria-label="KON 13 ownership structure">
            {proposition.field.map(([name, share, role]) => (
              <div className={styles.fieldItem} key={name}>
                <span>{role}</span>
                <strong className="font-display">{share}</strong>
                <b>{name}</b>
              </div>
            ))}
          </div>

          <div className={styles.flow} aria-label="Four-step supplier partnership process">
            {proposition.flow.map(([index, title, detail]) => (
              <div className={styles.flowStep} key={index}>
                <span>{index}</span>
                <h3 className="font-display">{title}</h3>
                <p>{detail}</p>
              </div>
            ))}
          </div>

          <div className={styles.lanes}>
            <div className={styles.sectionLabel}>Where we start</div>
            <div className={styles.laneWords}>
              {proposition.lanes.map((lane) => <span className="font-display" key={lane}>{lane}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sprint} id="sprint" aria-labelledby="sprint-title">
        <div className={styles.shell}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>The 30-day plan</div>
            <h2 className={`${styles.sectionTitle} font-display`} id="sprint-title">
              Four weeks<br />to ready options.
            </h2>
          </div>

          <div className={styles.timeline}>
            {proposition.sprint.map((phase) => (
              <article className={styles.phase} key={phase.index}>
                <div className={styles.phaseIndex}>{phase.index}</div>
                <div className={styles.phaseDays}>{phase.days}</div>
                <h3 className="font-display">{phase.title}</h3>
                <p>{phase.output}</p>
              </article>
            ))}
          </div>

          <div className={styles.scorecard} aria-label="What Dyrane will deliver">
            {proposition.scorecard.map(([value, label]) => (
              <div key={label}>
                <strong className="font-display">{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div className={styles.governance}>
            <div>
              <div className={styles.sectionLabel}>Minimum standards</div>
              <h3 className="font-display">Every company must be real, capable and compliant.</h3>
            </div>
            <ul>
              {proposition.gates.map((gate) => <li key={gate}><Icon name="check" size={18} />{gate}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.decision} id="decision" aria-labelledby="decision-title">
        <div className={styles.shell}>
          <div className={styles.decisionHero}>
            <div className={styles.sectionLabel}>The ask</div>
            <h2 className={`${styles.decisionTitle} font-display`} id="decision-title">{proposition.decision.title}</h2>
            <p>{proposition.decision.return}</p>
          </div>

          <div className={styles.decisionGrid}>
            <div className={styles.inputs}>
              <span>What we need from Oando</span>
              {proposition.decision.inputs.map((input) => <strong className="font-display" key={input}>{input}</strong>)}
            </div>

            <div className={styles.roles}>
              <span>Who does what</span>
              {proposition.roles.map(([name, role]) => (
                <div key={name}>
                  <b>{name}</b>
                  <small>{role}</small>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.commercial}>
            <div className={styles.sectionLabel}>How Dyrane is paid</div>
            <div className={styles.commercialRows}>
              {proposition.commercial.map(([label, value]) => (
                <div key={label}>
                  <span>{label}</span>
                  <strong className="font-display">{value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.guardrail}>
            <strong className="font-display">Oando keeps procurement control.</strong>
            <strong className="font-display">Every partner is independently checked.</strong>
            <strong className="font-display">No supplier is promised a contract.</strong>
          </div>
        </div>
      </section>

      <section className={styles.sources} id="sources" aria-labelledby="sources-title">
        <div className={styles.shell}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>Evidence</div>
            <h2 className={`${styles.sectionTitle} font-display`} id="sources-title">Why this proposal is timely.</h2>
          </div>

          <div className={styles.sourceList}>
            {proposition.sources.map((source, index) => (
              <a href={source.href} target="_blank" rel="noreferrer" key={source.label}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <strong>{source.label}</strong>
                  <small>{source.detail}</small>
                </div>
                <Icon name="source" />
              </a>
            ))}
          </div>

          <footer className={styles.footer}>
            <Link href="/people/alex-irune">Return to Alex Irune</Link>
            <span>Dyrane Strategic Ventures · KON 13 supplier plan</span>
            <a href="#cover">Back to cover ↑</a>
          </footer>
        </div>
      </section>
    </main>
  );
}
