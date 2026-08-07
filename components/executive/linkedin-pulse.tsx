import { Icon } from "@/components/executive/icon";
import { SourceImage } from "@/components/executive/source-image";
import type { alexIruneLinkedIn } from "@/content/people/alex-irune/linkedin";
import styles from "./linkedin-signal.module.css";

type LinkedInPulseProps = {
  data: typeof alexIruneLinkedIn;
};

const layoutClass = {
  lead: styles.storyLead,
  portrait: styles.storyPortrait,
  wide: styles.storyWide,
  split: styles.storySplit,
  finale: styles.storyFinale,
} as const;

export function LinkedInPulse({ data }: LinkedInPulseProps) {
  return (
    <section
      className={styles.signal}
      id="linkedin"
      data-lumen-zone="signal"
      aria-labelledby="linkedin-signal-title"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <div className={styles.brand}>
            <Icon name="linkedin" size={20} />
            <span>LinkedIn / Signal</span>
          </div>
          <a
            className={styles.profileLink}
            href={data.profile.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${data.profile.name} on LinkedIn`}
          >
            <span>Profile</span>
            <Icon name="arrow" size={17} />
          </a>
        </header>

        <div className={styles.titleStage}>
          <h2 className="font-display" id="linkedin-signal-title">
            <span>Signal.</span>
            <em>Received.</em>
          </h2>
          <div className={styles.orbit} aria-hidden="true" />
        </div>

        <div className={styles.feed} aria-label="Selected LinkedIn stories">
          {data.stories.map((story) => {
            const mediaClass = story.media.length === 3
              ? styles.mediaTriple
              : story.media.length === 2
                ? styles.mediaDouble
                : styles.mediaSingle;

            return (
              <a
                className={`${styles.story} ${layoutClass[story.layout]}`}
                href={story.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${story.title} Open LinkedIn post.`}
                key={`${story.period}-${story.title}`}
              >
                <div className={`${styles.media} ${mediaClass}`}>
                  {story.media.map((item, index) => (
                    <SourceImage
                      src={item.src}
                      fallbackSrcs={item.fallbackSrcs}
                      alt={item.alt}
                      className={styles.image}
                      fallbackClassName={styles.imageFallback}
                      fallbackLabel={story.signal}
                      style={{ objectPosition: item.position }}
                      key={`${story.title}-${index}`}
                    />
                  ))}
                </div>
                <div className={styles.shade} />
                <div className={styles.meta}>
                  <span>{story.period}</span>
                  <span>{story.signal}</span>
                </div>
                <h3 className="font-display">{story.title}</h3>
                <span className={styles.open} aria-hidden="true">
                  <Icon name="arrow" size={19} />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
