import { Icon } from "@/components/executive/icon";
import { PublicRooms } from "@/components/executive/public-rooms";
import { SourceImage } from "@/components/executive/source-image";
import { alexIruneEditorial } from "@/content/people/alex-irune/editorial";
import { alexIrune } from "@/content/people/alex-irune/profile";
import { alexIrunePublicRooms } from "@/content/people/alex-irune/public-rooms";
import styles from "./profile.module.css";

const storyLayoutClass = {
  lead: styles.storyLead,
  portrait: styles.storyPortrait,
  landscape: styles.storyLandscape,
  square: styles.storySquare,
  map: styles.storyMap,
} as const;

export default function AlexIrunePage() {
  const profile = alexIrune;
  const editorial = alexIruneEditorial;
  const hero = editorial.hero;

  return (
    <main className={styles.page}>
      <header className={styles.topbar}>
        <div className={styles.topbarInner}>
          <a className={styles.wordmark} href="/">Dyrane Executive</a>
          <nav className={styles.nav} aria-label="Issue navigation">
            <a href="#portfolio">Portfolio</a>
            <a href="#career">Index</a>
            <a href="#now">Now</a>
            <a href="#access">Access</a>
            <a href="#rooms">Rooms</a>
            <a href="#sources">Sources</a>
          </nav>
        </div>
      </header>

      <section className={styles.cover} aria-labelledby="cover-title">
        <SourceImage
          src={hero.src}
          fallbackSrcs={hero.fallbackSrcs}
          alt={hero.alt}
          className={styles.coverImage}
          fallbackClassName={styles.coverFallback}
          fallbackLabel="ALEX IRUNE"
          style={{ objectPosition: hero.position }}
          eager
        />
        <div className={styles.coverShade} />
        <div className={`${styles.coverMasthead} font-display`}>Dyrane Executive</div>
        <div className={styles.coverIssue}>
          No. {editorial.issue}<br />
          {editorial.date}<br />
          {editorial.edition}
        </div>
        <a
          className={`${styles.sourceButton} ${styles.coverSource}`}
          href={hero.href}
          target="_blank"
          rel="noreferrer"
          aria-label="Open NOG Energy Week cover source"
          title="NOG Energy Week cover source"
        >
          <Icon name="source" />
        </a>
        <h1 className={`${styles.coverTitle} font-display`} id="cover-title">
          <span>{hero.label}</span>
          Ainojie<br />Alex Irune
        </h1>
        <div className={styles.coverLines} aria-label="Issue cover stories">
          <a className={styles.coverLine} href={hero.href} target="_blank" rel="noreferrer">
            <div>
              <small>Cover story</small>
              <strong className="font-display">{hero.title}</strong>
            </div>
            <Icon name="source" />
          </a>
          {editorial.coverLines.map((line) => {
            const external = !line.href.startsWith("#");
            return (
              <a
                className={styles.coverLine}
                href={line.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                key={line.title}
              >
                <div>
                  <small>{line.label}</small>
                  <strong className="font-display">{line.title}</strong>
                </div>
                <Icon name="arrow" />
              </a>
            );
          })}
        </div>
      </section>

      <div className={`${styles.issueBar} ${styles.shell}`} aria-label="Issue metadata">
        <strong>Issue {editorial.issue}</strong>
        <span>NOG cover story</span>
        <span>{editorial.visualStories.length} visual stories</span>
        <span>Every image opens its source</span>
      </div>

      <section className={`${styles.opening} ${styles.shell}`} id="portfolio">
        <div className={styles.openingGrid}>
          <h2 className={`${styles.displaySerif} font-display`}>Technology.<br />Strategy.<br />Operatorship.</h2>
          <div className={styles.roles} aria-label="Current roles">
            {profile.roles.map((role) => <div className={styles.role} key={role}>{role}</div>)}
          </div>
        </div>
      </section>

      <section className={`${styles.facts} ${styles.shell}`} aria-label="Profile facts">
        {profile.facts.map((fact) => (
          <a href={fact.href} target="_blank" rel="noreferrer" className={styles.fact} key={fact.label}>
            <small>{fact.label}</small>
            <strong className="font-display">{fact.value}</strong>
            <span>{fact.detail}</span>
          </a>
        ))}
      </section>

      <section className={`${styles.photoEssay} ${styles.shell}`} aria-labelledby="visual-title">
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLabel}>The portfolio</div>
          <h2 className={`${styles.sectionTitle} font-display`} id="visual-title">Eight frames.<br />One operating story.</h2>
        </div>
        <div className={styles.storyGrid}>
          {editorial.visualStories.map((story) => (
            <a
              className={`${styles.story} ${storyLayoutClass[story.layout]}`}
              href={story.href}
              target="_blank"
              rel="noreferrer"
              key={`${story.label}-${story.title}`}
              aria-label={`${story.title}. Open source.`}
            >
              <SourceImage
                src={story.src}
                fallbackSrcs={story.fallbackSrcs}
                alt={story.alt}
                className={styles.storyImage}
                fallbackClassName={styles.storyFallback}
                fallbackLabel={story.label}
                style={{ objectPosition: story.position }}
              />
              <div className={styles.storyShade} />
              <div className={styles.storyCopy}>
                <div className={styles.storyLabel}>{story.label}</div>
                <h3 className="font-display">{story.title}</h3>
              </div>
              <span className={`${styles.sourceButton} ${styles.storySource}`} aria-hidden="true">
                <Icon name="source" />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className={styles.paper} id="career">
        <div className={`${styles.paperInner} ${styles.shell}`}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>Career index</div>
            <h2 className={`${styles.sectionTitle} font-display`}>From code<br />to control.</h2>
          </div>
          <div className={styles.indexList}>
            {profile.career.map((item, index) => (
              <a
                className={styles.indexRow}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                title={item.body}
                key={`${item.period}-${item.title}`}
              >
                <span className={styles.indexNumber}>{String(index + 1).padStart(2, "0")}</span>
                <span className={styles.indexDate}>{item.period}</span>
                <h3 className="font-display">{item.title}</h3>
                <Icon name="arrow" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.headlines} ${styles.shell}`} id="now">
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLabel}>Now / 2026</div>
          <h2 className={`${styles.sectionTitle} font-display`}>The current<br />headlines.</h2>
        </div>
        <div className={styles.headlineGrid}>
          {profile.signals.map((signal) => (
            <article className={styles.headline} key={`${signal.date}-${signal.title}`} title={signal.body}>
              <div>
                <div className={styles.indexEyebrow}>{signal.date} · {signal.label}</div>
                <h3 className="font-display">{signal.title}</h3>
              </div>
              <div className={styles.headlineFooter}>
                <span>Public record</span>
                <a
                  className={styles.iconButton}
                  href={signal.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open source for ${signal.title}`}
                >
                  <Icon name="source" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.paper} id="access">
        <div className={`${styles.access} ${styles.shell}`}>
          <div className={styles.sectionLabel}>Public access</div>
          <div className={`${styles.contactWord} font-display`}>
            <a href={`mailto:${profile.contact.officialEmail}`}>{profile.contact.officialEmail}</a>
            <a href={`tel:${profile.contact.officialPhone.replace(/[^+\d]/g, "")}`}>{profile.contact.officialPhone}</a>
          </div>
          <div className={styles.accessMeta}>
            <div>
              <div className={styles.metaLabel}>Office</div>
              <p className={styles.office}>{profile.contact.office}</p>
            </div>
            <div className={styles.quickLinks} aria-label="Public contact and social links">
              <a className={styles.quickLink} href={`mailto:${profile.contact.officialEmail}`}>
                <Icon name="mail" /> Email
              </a>
              <a className={styles.quickLink} href={`tel:${profile.contact.officialPhone.replace(/[^+\d]/g, "")}`}>
                <Icon name="phone" /> Call
              </a>
              <a className={styles.quickLink} href={profile.social[0].href} target="_blank" rel="noreferrer">
                <Icon name="instagram" /> Instagram
              </a>
              <a className={styles.quickLink} href={profile.social[1].href} target="_blank" rel="noreferrer">
                <Icon name="linkedin" /> LinkedIn
              </a>
              <a className={styles.quickLink} href={profile.contact.officialContactHref} target="_blank" rel="noreferrer">
                <Icon name="compass" /> Office
              </a>
            </div>
          </div>
          <div className={styles.calendar} aria-label="Public calendar">
            {profile.publicSchedule.map((item) => (
              <a className={styles.calendarRow} href={item.href} target="_blank" rel="noreferrer" key={`${item.date}-${item.event}`}>
                <span>{item.date}</span>
                <strong>{item.event}</strong>
                <Icon name="calendar" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.socialPoster} ${styles.shell}`} aria-labelledby="social-title">
        <div className={styles.sectionLabel}>Public voice</div>
        <h2 className={`${styles.sectionTitle} font-display`} id="social-title">Follow the signal.</h2>
        <div className={styles.socialList}>
          {profile.social.map((account) => (
            <a
              className={styles.socialLink}
              href={account.href}
              target="_blank"
              rel="noreferrer"
              key={account.label}
              title={account.note}
            >
              <span className={styles.socialPlatform}>
                <Icon name={account.label === "Instagram" ? "instagram" : account.label === "LinkedIn" ? "linkedin" : "compass"} size={28} />
              </span>
              <h3 className="font-display">{account.handle}</h3>
              <Icon name="arrow" />
            </a>
          ))}
        </div>
      </section>

      <PublicRooms rooms={alexIrunePublicRooms} />

      <section className={styles.paper} id="network">
        <div className={`${styles.network} ${styles.shell}`}>
          <div className={styles.sectionLabel}>Institutional network</div>
          <h2 className={`${styles.sectionTitle} font-display`}>The names<br />around the work.</h2>
          <div className={styles.nameWall}>
            {profile.relationships.map((relationship) => (
              <a
                className={`${styles.nameLink} font-display`}
                href={relationship.href}
                target="_blank"
                rel="noreferrer"
                title={`${relationship.type}: ${relationship.body}`}
                key={`${relationship.type}-${relationship.name}`}
              >
                {relationship.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.stakeholders} ${styles.shell}`} aria-labelledby="stakeholder-title">
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLabel}>OML 145 / Chevron context</div>
          <h2 className={`${styles.sectionTitle} font-display`} id="stakeholder-title">Asset first.<br />Names second.</h2>
        </div>
        <div className={styles.stakeholderGrid}>
          {profile.chevronNetwork.map((stakeholder) => (
            <a
              className={styles.stakeholder}
              href={stakeholder.href}
              target="_blank"
              rel="noreferrer"
              title={stakeholder.body}
              key={stakeholder.name}
            >
              <div className={styles.indexEyebrow}>{stakeholder.role}</div>
              <h3 className="font-display">{stakeholder.name}</h3>
            </a>
          ))}
        </div>
      </section>

      <section className={`${styles.sourceIndex} ${styles.shell}`} id="sources">
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLabel}>Source index</div>
          <h2 className={`${styles.sectionTitle} font-display`}>Open every<br />footnote.</h2>
        </div>
        <div className={styles.sourceList}>
          {profile.sources.map(([title, detail, href], index) => (
            <a className={styles.sourceEntry} href={href} target="_blank" rel="noreferrer" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <b>{title}</b>
                <small>{detail}</small>
              </div>
              <Icon name="arrow" />
            </a>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        Dyrane Executive · Issue {editorial.issue} · Public sources only · No private contact, private location or inferred personal schedule.
      </footer>
    </main>
  );
}
