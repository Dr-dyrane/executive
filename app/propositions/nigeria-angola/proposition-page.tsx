import Link from "next/link";
import { Icon } from "@/components/executive/icon";
import { IssueExperience } from "@/components/executive/issue-experience";
import { nigeriaAngolaCorridor } from "@/content/propositions/nigeria-angola";
import compact from "./compact.module.css";
import styles from "./proposition.module.css";

const sections = [
  { id: "cover", label: "Cover", icon: "compass" },
  { id: "mandate", label: "Plan", icon: "arrow" },
  { id: "model", label: "Process", icon: "users" },
  { id: "sprint", label: "30 days", icon: "calendar" },
  { id: "decision", label: "Decide", icon: "check" },
  { id: "sources", label: "Sources", icon: "source" },
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
    <main className={`${styles.page} ${compact.root}`} id="main-content" tabIndex={-1} data-experience-root>
      <IssueExperience sections={sections} issueLabel={`Proposal ${proposition.number}`} />

      <header className={styles.topbar}>
        <div className={styles.topbarInner}>
          <Link className={styles.brand} href="/">Dyrane Strategic Ventures</Link>
          <nav className={styles.nav} aria-label="Proposal navigation">
            <a href="#mandate">Plan</a>
            <a href="#model">Process</a>
            <a href="#sprint">30 days</a>
            <a href="#decision">Decide</a>
          </nav>
          <Link className={styles.returnLink} href="/people/alex-irune">
            Alex Irune <Icon name="arrow" size={15} />
          </Link>
        </div>
      </header>

      <section className={styles.hero} id="cover" aria-labelledby="proposition-title">
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroStamp}>
          <span>KON 13 supplier plan · {proposition.number}</span>
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
            <p className={compact.heroSummary}>{proposition.summary}</p>
          </div>
          <CorridorField />
        </div>

        <div className={styles.coverRail} aria-label="Open the proposal">
          <a href="#mandate">
            <div>
              <span>Outcome</span>
              <strong className={`${compact.coverLine} font-display`}>30 days · 2 options</strong>
            </div>
            <Icon name="arrow" />
          </a>
          <a href="#model">
            <div>
              <span>Method</span>
              <strong className={`${compact.coverLine} font-display`}>Need · Search · Verify · Pair</strong>
            </div>
            <Icon name="arrow" />
          </a>
        </div>
      </section>

      <section className={styles.mandate} id="mandate" aria-labelledby="mandate-title">
        <div className={styles.shell}>
          <div className={styles.sectionLabel}>Plan</div>
          <h2 className={`${styles.displayTitle} ${compact.displayTitle} font-display`} id="mandate-title">{proposition.mandate}</h2>

          <div className={styles.mandateGrid}>
            <p className={styles.objective}>{proposition.objective}</p>
            <dl className={styles.specification}>
              {proposition.specification.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd className={`${compact.specValue} font-display`}>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className={styles.model} id="model" aria-labelledby="model-title">
        <div className={styles.shell}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>Process</div>
            <h2 className={`${styles.sectionTitle} ${compact.sectionTitle} font-display`} id="model-title">
              Oando sets the need.<br />Dyrane builds the options.
            </h2>
          </div>

          <div className={styles.field} aria-label="KON 13 ownership structure">
            {proposition.field.map(([name, share, role]) => (
              <div className={styles.fieldItem} key={name}>
                <span>{role}</span>
                <strong className="font-display">{share}</strong>
                <b className={compact.fieldName}>{name}</b>
              </div>
            ))}
          </div>

          <div className={styles.flow} aria-label="Four-step supplier process">
            {proposition.flow.map(([index, title, detail]) => (
              <div className={styles.flowStep} key={index}>
                <span>{index}</span>
                <h3 className={`${compact.cardTitle} font-display`}>{title}</h3>
                <p className={compact.cardDetail}>{detail}</p>
              </div>
            ))}
          </div>

          <div className={styles.lanes}>
            <div className={styles.sectionLabel}>Priority services</div>
            <div className={styles.laneWords}>
              {proposition.lanes.map((lane) => <span className={`${compact.lane} font-display`} key={lane}>{lane}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sprint} id="sprint" aria-labelledby="sprint-title">
        <div className={styles.shell}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>30 days</div>
            <h2 className={`${styles.sectionTitle} ${compact.sectionTitle} font-display`} id="sprint-title">
              30 days.<br />Two options.
            </h2>
          </div>

          <div className={styles.timeline}>
            {proposition.sprint.map((phase) => (
              <article className={styles.phase} key={phase.index}>
                <div className={styles.phaseIndex}>{phase.index}</div>
                <div className={styles.phaseDays}>{phase.days}</div>
                <h3 className={`${compact.cardTitle} font-display`}>{phase.title}</h3>
                <p className={compact.cardDetail}>{phase.output}</p>
              </article>
            ))}
          </div>

          <div className={styles.scorecard} aria-label="Deliverables">
            {proposition.scorecard.map(([value, label]) => (
              <div key={label}>
                <strong className="font-display">{value}</strong>
                <span className={compact.scoreLabel}>{label}</span>
              </div>
            ))}
          </div>

          <div className={styles.governance}>
            <div>
              <div className={styles.sectionLabel}>Checks</div>
              <h3 className={`${compact.governanceTitle} font-display`}>Verified.<br />Safe.<br />Capable.</h3>
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
            <div className={styles.sectionLabel}>Decision</div>
            <h2 className={`${styles.decisionTitle} ${compact.decisionTitle} font-display`} id="decision-title">{proposition.decision.title}</h2>
            <p className={compact.decisionCopy}>{proposition.decision.return}</p>
          </div>

          <div className={styles.decisionGrid}>
            <div className={styles.inputs}>
              <span>From Oando</span>
              {proposition.decision.inputs.map((input) => <strong className={`${compact.input} font-display`} key={input}>{input}</strong>)}
            </div>

            <div className={styles.roles}>
              <span>Roles</span>
              {proposition.roles.map(([name, role]) => (
                <div key={name}>
                  <b className={compact.roleName}>{name}</b>
                  <small className={compact.roleCopy}>{role}</small>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.commercial}>
            <div className={styles.sectionLabel}>Fees</div>
            <div className={styles.commercialRows}>
              {proposition.commercial.map(([label, value]) => (
                <div key={label}>
                  <span>{label}</span>
                  <strong className={`${compact.fee} font-display`}>{value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.guardrail}>
            <strong className={`${compact.guardrail} font-display`}>Oando decides.</strong>
            <strong className={`${compact.guardrail} font-display`}>Partners verified.</strong>
            <strong className={`${compact.guardrail} font-display`}>No contracts promised.</strong>
          </div>
        </div>
      </section>

      <section className={styles.sources} id="sources" aria-labelledby="sources-title">
        <div className={styles.shell}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>Sources</div>
            <h2 className={`${styles.sectionTitle} ${compact.sectionTitle} font-display`} id="sources-title">The basis.</h2>
          </div>

          <div className={styles.sourceList}>
            {proposition.sources.map((source, index) => (
              <a href={source.href} target="_blank" rel="noreferrer" key={source.label}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <strong className={compact.sourceTitle}>{source.label}</strong>
                  <small className={compact.sourceDetail}>{source.detail}</small>
                </div>
                <Icon name="source" />
              </a>
            ))}
          </div>

          <footer className={styles.footer}>
            <Link href="/people/alex-irune">Alex Irune</Link>
            <span>Dyrane · KON 13 plan</span>
            <a href="#cover">Top ↑</a>
          </footer>
        </div>
      </section>
    </main>
  );
}
