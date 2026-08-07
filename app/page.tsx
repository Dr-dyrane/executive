import Link from "next/link";
import { Icon } from "@/components/executive/icon";
import { IssueExperience } from "@/components/executive/issue-experience";
import { SourceImage } from "@/components/executive/source-image";
import { alexIruneEditorial } from "@/content/people/alex-irune/editorial";
import { alexIrunePresentation } from "@/content/people/alex-irune/presentation";
import styles from "./home.module.css";

const coverSections = [{ id: "cover", label: "Cover", icon: "compass" }] as const;

export default function HomePage() {
  const editorial = alexIruneEditorial;
  const hero = editorial.hero;
  const presentation = alexIrunePresentation;

  return (
    <main
      className={styles.page}
      id="main-content"
      tabIndex={-1}
      data-experience-root
    >
      <IssueExperience
        sections={coverSections}
        issueLabel={`Issue ${editorial.issue}`}
        showDock={false}
      />

      <section className={styles.cover} id="cover" aria-labelledby="issue-title">
        <SourceImage
          src={hero.src}
          fallbackSrcs={hero.fallbackSrcs}
          alt={hero.alt}
          className={styles.image}
          fallbackClassName={styles.fallback}
          fallbackLabel="ALEX IRUNE"
          style={{ objectPosition: hero.position }}
          eager
        />
        <div className={styles.shade} />
        <div className={styles.issue}>
          Issue {editorial.issue}<br />
          {editorial.date}<br />
          {presentation.permission}
        </div>
        <h1 className={`${styles.title} font-display`} id="issue-title">
          <small>{hero.label}</small>
          Ainojie<br />Alex Irune
        </h1>
        <div className={styles.lines}>
          <a className={styles.line} href={hero.href} target="_blank" rel="noreferrer">
            <div>
              <span>Cover story</span>
              <strong className="font-display">{hero.title}</strong>
            </div>
            <Icon name="source" />
          </a>
          {editorial.coverLines.map((line) => {
            const href = line.href.startsWith("#") ? `/people/alex-irune${line.href}` : line.href;
            const external = href.startsWith("http");
            return (
              <a className={styles.line} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} key={line.title}>
                <div>
                  <span>{line.label}</span>
                  <strong className="font-display">{line.title}</strong>
                </div>
                <Icon name="arrow" />
              </a>
            );
          })}
          <Link className={styles.open} href="/people/alex-irune" aria-label="Open issue 001">
            <Icon name="arrow" size={24} />
          </Link>
        </div>
      </section>
      <footer className={styles.footer}>
        <strong>{presentation.platform}</strong>
        <span>{presentation.permission}</span>
        <Link href="/propositions/nigeria-angola">Strategic proposition →</Link>
      </footer>
    </main>
  );
}
