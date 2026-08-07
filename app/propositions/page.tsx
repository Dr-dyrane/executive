import Link from "next/link";
import { Icon } from "@/components/executive/icon";
import { IssueExperience } from "@/components/executive/issue-experience";
import styles from "./page.module.css";

const sections = [{ id: "cover", label: "Ventures", icon: "compass" }] as const;

function SupplyField() {
  return (
    <svg className={styles.field} viewBox="0 0 620 360" aria-hidden="true">
      <defs>
        <linearGradient id="supply-route" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#72e5b7" />
          <stop offset="0.52" stopColor="#e4d49c" />
          <stop offset="1" stopColor="#ed825c" />
        </linearGradient>
      </defs>
      <g className={styles.fieldGrid}>
        <path d="M34 72H586M34 180H586M34 288H586" />
        <path d="M108 28V332M310 28V332M512 28V332" />
      </g>
      <path className={styles.fieldGlow} d="M104 92C212 86 252 158 322 190C396 224 424 276 518 282" />
      <path className={styles.supplyRoute} d="M104 92C212 86 252 158 322 190C396 224 424 276 518 282" />
      <circle cx="104" cy="92" r="9" fill="#72e5b7" />
      <circle cx="518" cy="282" r="10" fill="#ed825c" />
      <g className={styles.fieldText}>
        <text x="68" y="64">NIGERIA</text>
        <text x="460" y="326">ANGOLA</text>
      </g>
    </svg>
  );
}

function DemandField() {
  return (
    <svg className={styles.field} viewBox="0 0 620 360" aria-hidden="true">
      <defs>
        <radialGradient id="demand-node">
          <stop offset="0" stopColor="#fff4d6" />
          <stop offset="0.2" stopColor="#d9ae67" stopOpacity="0.9" />
          <stop offset="1" stopColor="#d9ae67" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g className={styles.fieldGrid}>
        <ellipse cx="310" cy="180" rx="242" ry="132" />
        <ellipse cx="310" cy="180" rx="162" ry="88" />
        <path d="M68 180H552M310 40V320" />
      </g>
      <g className={styles.demandLinks}>
        <path d="M150 108L310 180L468 102" />
        <path d="M310 180L476 260" />
        <path d="M310 180L158 268" />
      </g>
      <circle cx="310" cy="180" r="54" fill="url(#demand-node)" opacity="0.5" />
      <circle cx="310" cy="180" r="9" fill="#f2cc7d" />
      <circle cx="150" cy="108" r="6" fill="#7fe1bb" />
      <circle cx="468" cy="102" r="6" fill="#e98960" />
      <circle cx="476" cy="260" r="6" fill="#9dcfff" />
      <circle cx="158" cy="268" r="6" fill="#c6a8ff" />
      <g className={styles.fieldText}>
        <text x="276" y="158">ENERGY</text>
        <text x="108" y="88">GAS</text>
        <text x="442" y="82">POWER</text>
        <text x="454" y="294">INDUSTRY</text>
        <text x="108" y="302">CAPITAL</text>
      </g>
    </svg>
  );
}

export default function PropositionsPage() {
  return (
    <main className={styles.page} id="main-content" tabIndex={-1} data-experience-root>
      <IssueExperience sections={sections} issueLabel="Strategic Ventures" showDock={false} />

      <header className={styles.topbar}>
        <Link href="/" className={styles.brand}>Dyrane Strategic Ventures</Link>
        <Link href="/people/alex-irune" className={styles.profileLink}>
          Alex Irune <Icon name="arrow" size={15} />
        </Link>
      </header>

      <section className={styles.hero} id="cover" aria-labelledby="ventures-title">
        <div className={styles.heroMeta}>Executive enterprise · 2026</div>
        <h1 className="font-display" id="ventures-title">
          Build the<br />
          <span>missing market.</span>
        </h1>
        <div className={styles.heroWords} aria-label="Dyrane venture capabilities">
          <strong className={styles.green}>Supply.</strong>
          <strong className={styles.gold}>Demand.</strong>
          <strong>Transactions.</strong>
        </div>
      </section>

      <section className={styles.ventures} aria-label="Strategic venture portfolio">
        <Link className={`${styles.venture} ${styles.supply}`} href="/propositions/nigeria-angola">
          <SupplyField />
          <div className={styles.ventureIndex}>01</div>
          <div className={styles.ventureType}>Market access</div>
          <h2 className="font-display">
            <span>Nigeria</span> × <em>Angola</em>
          </h2>
          <p>KON 13 supplier plan</p>
          <div className={styles.metrics}>
            <span>30 days</span>
            <span>20 firms</span>
            <span>2 options</span>
          </div>
          <span className={styles.open}><Icon name="arrow" size={20} /></span>
        </Link>

        <Link className={`${styles.venture} ${styles.demand}`} href="/propositions/bayelsa-gas-industry">
          <DemandField />
          <div className={styles.ventureIndex}>02</div>
          <div className={styles.ventureType}>Demand creation</div>
          <h2 className="font-display">
            Bayelsa <span>Gas</span> × <em>Industry</em>
          </h2>
          <p>Anchor tenant plan</p>
          <div className={styles.metrics}>
            <span>45 days</span>
            <span>25 firms</span>
            <span>3 letters</span>
          </div>
          <span className={styles.open}><Icon name="arrow" size={20} /></span>
        </Link>
      </section>

      <footer className={styles.footer}>
        <span>Dyrane Strategic Ventures</span>
        <strong>Assets → markets → deals</strong>
        <Link href="/">Dyrane Xclusive</Link>
      </footer>
    </main>
  );
}
