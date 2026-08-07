import { Icon } from "@/components/executive/icon";
import type { alexIruneLinkedIn } from "@/content/people/alex-irune/linkedin";
import styles from "./linkedin-pulse.module.css";

type LinkedInPulseProps = {
  data: typeof alexIruneLinkedIn;
};

export function LinkedInPulse({ data }: LinkedInPulseProps) {
  return (
    <section className={styles.panel} aria-labelledby="linkedin-pulse-title">
      <header className={styles.header}>
        <div className={styles.brand}>
          <Icon name="linkedin" size={20} />
          <span>LinkedIn</span>
        </div>
        <a className={styles.profileLink} href={data.profile.href} target="_blank" rel="noreferrer">
          Open profile <Icon name="arrow" size={16} />
        </a>
      </header>

      <div className={styles.lead}>
        <h2 className="font-display" id="linkedin-pulse-title">Ideas in motion.</h2>
        <div className={styles.stats} aria-label={`LinkedIn profile snapshot observed ${data.profile.observed}`}>
          <div>
            <strong className="font-display">{data.profile.followers}</strong>
            <span>followers</span>
          </div>
          <div>
            <strong className="font-display">{data.profile.connections}</strong>
            <span>connections</span>
          </div>
          <div>
            <strong className="font-display">{data.profile.articles}</strong>
            <span>articles</span>
          </div>
        </div>
      </div>

      <div className={styles.themes} aria-label="Recurring LinkedIn themes">
        {data.themes.map((theme) => <span key={theme}>{theme}</span>)}
      </div>

      <div className={styles.feed}>
        {data.posts.map((post, index) => (
          <a
            className={`${styles.post} ${index === 0 ? styles.featured : ""}`}
            href={post.href}
            target="_blank"
            rel="noreferrer"
            key={`${post.period}-${post.title}`}
          >
            <div className={styles.postMeta}>
              <span>{post.period}</span>
              <span>{post.theme}</span>
            </div>
            <h3 className="font-display">{post.title}</h3>
            <p>{post.deck}</p>
            <span className={styles.postArrow} aria-hidden="true"><Icon name="arrow" /></span>
          </a>
        ))}
      </div>

      <footer className={styles.network}>
        <div className={styles.networkLabel}>Public conversations</div>
        <div className={styles.people}>
          {data.people.map((person) => (
            <a href={person.href} target="_blank" rel="noreferrer" key={person.name}>
              <strong className="font-display">{person.name}</strong>
              <span>{person.context}</span>
            </a>
          ))}
        </div>
        <small>Snapshot observed {data.profile.observed}. Counts may change on LinkedIn.</small>
      </footer>
    </section>
  );
}
