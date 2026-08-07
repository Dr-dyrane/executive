import Link from "next/link";
import { Icon } from "@/components/executive/icon";
import { IssueExperience } from "@/components/executive/issue-experience";
import { bayelsaGasIndustry } from "@/content/propositions/bayelsa-gas-industry";
import styles from "./brief.module.css";

const sections = [
  { id: "cover", label: "Cover", icon: "compass" },
  { id: "opportunity", label: "Plan", icon: "arrow" },
  { id: "model", label: "Model", icon: "users" },
  { id: "sprint", label: "45 days", icon: "calendar" },
  { id: "decision", label: "Decide", icon: "check" },
  { id: "sources", label: "Sources", icon: "source" },
] as const;

function EnergyField() {
  return (
    <div className={styles.energyField} aria-hidden="true">
      <svg viewBox="0 0 760 640" role="presentation">
        <defs>
          <linearGradient id="energy-link" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#e3bd72" />
            <stop offset="0.52" stopColor="#77d7b0" />
            <stop offset="1" stopColor="#9dcfff" />
          </linearGradient>
          <radialGradient id="energy-core">
            <stop offset="0" stopColor="#fff8de" />
            <stop offset="0.22" stopColor="#e3bd72" stopOpacity="0.84" />
            <stop offset="1" stopColor="#e3bd72" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g className={styles.energyGrid}>
          <ellipse cx="380" cy="320" rx="300" ry="220" />
          <ellipse cx="380" cy="320" rx="212" ry="154" />
          <path d="M80 320H680M380 80V560" />
        </g>

        <g className={styles.energyLinks}>
          <path d="M174 190L380 320L580 176" />
          <path d="M380 320L586 470" />
          <path d="M380 320L178 478" />
        </g>

        <circle cx="380" cy="320" r="78" fill="url(#energy-core)" opacity="0.44" />
        <circle cx="380" cy="320" r="11" fill="#f0ca7d" />
        <circle cx="174" cy="190" r="8" fill="#e3bd72" />
        <circle cx="580" cy="176" r="8" fill="#77d7b0" />
        <circle cx="586" cy="470" r="8" fill="#9dcfff" />
        <circle cx="178" cy="478" r="8" fill="#c6a8ff" />

        <g className={styles.energyLabels}>
          <text x="335" y="294">DEMAND</text>
          <text x="132" y="164">GAS</text>
          <text x="546" y="150">POWER</text>
          <text x="546" y="510">INDUSTRY</text>
          <text x="120" y="520">CAPITAL</text>
          <text x="326" y="594">BAYELSA · 002</text>
        </g>
      </svg>
    </div>
  );
}

export default function BayelsaGasIndustryPage() {
  const venture = bayelsaGasIndustry;

  return (
    <main className={styles.page} id="main-content" tabIndex={-1} data-experience-root>
      <IssueExperience sections={sections} issueLabel={`Venture ${venture.number}`} />

      <header className={styles.topbar}>
        <Link className={styles.brand} href="/propositions">Dyrane Strategic Ventures</Link>
        <nav className={styles.nav} aria-label="Proposal navigation">
          <a href="#opportunity">Plan</a>
          <a href="#model">Model</a>
          <a href="#sprint">45 days</a>
          <a href="#decision">Decide</a>
        </nav>
        <Link className={styles.profileLink} href="/people/alex-irune">
          Alex Irune <Icon name="arrow" size={15} />
        </Link>
      </header>

      <section className={styles.hero} id="cover" aria-labelledby="venture-title">
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroMeta}>
          <span>Demand creation · {venture.number}</span>
          <span>{venture.preparedFor}</span>
        </div>

        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <h1 className="font-display" id="venture-title">
              <small>Bayelsa · Nigeria</small>
              Bayelsa<br />
              <span>Gas</span> × <em>Industry</em>
            </h1>
            <p className={`${styles.subtitle} font-display`}>{venture.subtitle}.</p>
            <p className={styles.summary}>{venture.summary}</p>
          </div>
          <EnergyField />
        </div>

        <div className={styles.coverRail} aria-label="Open the proposal">
          <a href="#opportunity">
            <div>
              <span>Outcome</span>
              <strong className="font-display">45 days · 3 letters</strong>
            </div>
            <Icon name="arrow" />
          </a>
          <a href="#model">
            <div>
              <span>Method</span>
              <strong className="font-display">Target · Recruit · Validate · Structure</strong>
            </div>
            <Icon name="arrow" />
          </a>
        </div>
      </section>

      <section className={styles.opportunity} id="opportunity" aria-labelledby="opportunity-title">
        <div className={styles.shell}>
          <div className={styles.label}>Plan</div>
          <h2 className={`${styles.displayTitle} font-display`} id="opportunity-title">{venture.mandate}</h2>

          <div className={styles.split}>
            <p className={styles.objective}>{venture.objective}</p>
            <dl className={styles.specs}>
              {venture.specification.map(([label, value]) => (
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
          <header className={styles.sectionHeader}>
            <div className={styles.label}>Commercial system</div>
            <h2 className={`${styles.sectionTitle} font-display`} id="model-title">
              Gas.<br />Power.<br /><span>Industry.</span>
            </h2>
          </header>

          <div className={styles.system} aria-label="Commercial system roles">
            {venture.system.map(([name, signal, role]) => (
              <div className={styles.systemItem} key={name}>
                <span>{role}</span>
                <strong className="font-display">{signal}</strong>
                <b>{name}</b>
              </div>
            ))}
          </div>

          <div className={styles.flow} aria-label="Four-step manufacturer process">
            {venture.flow.map(([index, title, detail]) => (
              <div className={styles.flowStep} key={index}>
                <span>{index}</span>
                <h3 className="font-display">{title}</h3>
                <p>{detail}</p>
              </div>
            ))}
          </div>

          <div className={styles.sectors}>
            <div className={styles.label}>First targets</div>
            <div>
              {venture.sectors.map((sector) => <span className="font-display" key={sector}>{sector}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sprint} id="sprint" aria-labelledby="sprint-title">
        <div className={styles.shell}>
          <header className={styles.sectionHeader}>
            <div className={styles.label}>45-day market test</div>
            <h2 className={`${styles.sectionTitle} font-display`} id="sprint-title">Three letters.<br />One decision.</h2>
          </header>

          <div className={styles.timeline}>
            {venture.sprint.map((phase) => (
              <article className={styles.phase} key={phase.index}>
                <div className={styles.phaseIndex}>{phase.index}</div>
                <div className={styles.phaseDays}>{phase.days}</div>
                <h3 className="font-display">{phase.title}</h3>
                <p>{phase.output}</p>
              </article>
            ))}
          </div>

          <div className={styles.scorecard} aria-label="Venture deliverables">
            {venture.scorecard.map(([value, label]) => (
              <div key={label}>
                <strong className="font-display">{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div className={styles.gates}>
            <div>
              <div className={styles.label}>Only proceed when</div>
              <h3 className="font-display">Demand is real.</h3>
            </div>
            <ul>
              {venture.gates.map((gate) => <li key={gate}><Icon name="check" size={18} />{gate}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.decision} id="decision" aria-labelledby="decision-title">
        <div className={styles.shell}>
          <div className={styles.label}>The ask</div>
          <h2 className={`${styles.decisionTitle} font-display`} id="decision-title">{venture.decision.title}</h2>
          <p className={styles.decisionCopy}>{venture.decision.return}</p>

          <div className={styles.decisionGrid}>
            <div className={styles.inputs}>
              <span>Needed</span>
              {venture.decision.inputs.map((input) => <strong className="font-display" key={input}>{input}</strong>)}
            </div>

            <div className={styles.roles}>
              <span>Roles</span>
              {venture.roles.map(([name, role]) => (
                <div key={name}>
                  <b>{name}</b>
                  <small>{role}</small>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.commercial}>
            <div className={styles.label}>Commercial model</div>
            <div>
              {venture.commercial.map(([label, value]) => (
                <article key={label}>
                  <span>{label}</span>
                  <strong className="font-display">{value}</strong>
                </article>
              ))}
            </div>
          </div>

          <div className={styles.guardrails}>
            <strong className="font-display">No inflated demand.</strong>
            <strong className="font-display">No hidden tenant fees.</strong>
            <strong className="font-display">No build before proof.</strong>
          </div>
        </div>
      </section>

      <section className={styles.sources} id="sources" aria-labelledby="sources-title">
        <div className={styles.shell}>
          <header className={styles.sectionHeader}>
            <div className={styles.label}>Evidence</div>
            <h2 className={`${styles.sectionTitle} font-display`} id="sources-title">Why now.</h2>
          </header>

          <div className={styles.sourceList}>
            {venture.sources.map((source, index) => (
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
            <Link href="/propositions">All ventures</Link>
            <span>Dyrane Strategic Ventures · 002</span>
            <a href="#cover">Back to cover ↑</a>
          </footer>
        </div>
      </section>
    </main>
  );
}
