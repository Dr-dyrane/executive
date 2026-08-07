import Link from "next/link";
import { Icon } from "@/components/executive/icon";
import { SourceImage } from "@/components/executive/source-image";
import { alexIruneEditorial } from "@/content/people/alex-irune/editorial";
import { alexIrune } from "@/content/people/alex-irune/profile";
import styles from "./home.module.css";

export default function HomePage() {
  const editorial = alexIruneEditorial;

  return (
    <main className={styles.page}>
      <section className={styles.cover} aria-labelledby="issue-title">
        <SourceImage
          src={alexIrune.heroImage.src}
          alt={alexIrune.heroImage.alt}
          className={styles.image}
          fallbackClassName={styles.fallback}
          fallbackLabel="DYRANE EXECUTIVE"
          eager
        />
        <div className={styles.shade} />
        <div className={styles.masthead}>Dyrane Executive</div>
        <div className={styles.issue}>
          Issue {editorial.issue}<br />
          {editorial.date}<br />
          Public-source edition
        </div>
        <h1 className={styles.title} id="issue-title">
          <small>Technology · Strategy · Operatorship</small>
          Ainojie<br />Alex Irune
        </h1>
        <div className={styles.lines}>
          {editorial.coverLines.map((line) => (
            <a className={styles.line} href={line.href} target={line.href.startsWith("#") ? undefined : "_blank"} rel={line.href.startsWith("#") ? undefined : "noreferrer"} key={line.title}>
              <div>
                <span>{line.label}</span>
                <strong>{line.title}</strong>
              </div>
              <Icon name="arrow" />
            </a>
          ))}
          <Link className={styles.open} href="/people/alex-irune" aria-label="Open issue 001">
            <Icon name="arrow" size={24} />
          </Link>
        </div>
      </section>
      <footer className={styles.footer}>
        <strong>Issue 001 is live</strong>
        <span>People · work · institutions · public record</span>
        <span>Open the cover →</span>
      </footer>
    </main>
  );
}
