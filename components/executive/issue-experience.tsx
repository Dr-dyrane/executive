"use client";

import type { CSSProperties } from "react";
import { useEffect, useMemo, useState } from "react";
import { Icon, type IconName } from "@/components/executive/icon";
import styles from "./issue-experience.module.css";

export type IssueSection = {
  id: string;
  label: string;
  icon: IconName;
};

type IssueExperienceProps = {
  sections: readonly IssueSection[];
  issueLabel: string;
  showDock?: boolean;
};

export function IssueExperience({
  sections,
  issueLabel,
  showDock = true,
}: IssueExperienceProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "cover");
  const [progress, setProgress] = useState(0);
  const [calm, setCalm] = useState(false);
  const activeLabel = useMemo(
    () => sections.find((section) => section.id === activeId)?.label ?? issueLabel,
    [activeId, issueLabel, sections],
  );

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.calm = "false";
    root.dataset.experienceReady = "true";

    return () => {
      delete root.dataset.calm;
      delete root.dataset.experienceReady;
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.calm = String(calm);

    if (calm) {
      document
        .querySelectorAll<HTMLElement>("[data-experience-root] [data-reveal-item='true']")
        .forEach((target) => {
          target.dataset.inView = "true";
        });
    }
  }, [calm]);

  useEffect(() => {
    const root = document.documentElement;

    const updateScroll = () => {
      const scrollable = Math.max(root.scrollHeight - window.innerHeight, 1);
      const nextProgress = Math.min(Math.max(window.scrollY / scrollable, 0), 1);
      const coverHeight = document.getElementById("cover")?.offsetHeight ?? window.innerHeight;
      const coverShift = Math.min(Math.max(window.scrollY / Math.max(coverHeight, 1), 0), 1);

      setProgress(nextProgress);
      root.style.setProperty("--issue-progress", String(nextProgress));
      root.style.setProperty("--cover-shift", String(coverShift));
    };

    const updatePointer = (event: PointerEvent) => {
      if (calm || event.pointerType === "touch") return;
      root.style.setProperty("--ambient-x", `${event.clientX}px`);
      root.style.setProperty("--ambient-y", `${event.clientY}px`);
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll, { passive: true });
    window.addEventListener("pointermove", updatePointer, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
      window.removeEventListener("pointermove", updatePointer);
    };
  }, [calm]);

  useEffect(() => {
    const targets = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => Boolean(element));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-20% 0px -58%", threshold: [0.08, 0.2, 0.45, 0.7] },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-experience-root] section:not(#cover)"),
    );

    targets.forEach((target) => {
      target.dataset.revealItem = "true";
      if (calm || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        target.dataset.inView = "true";
      }
    });

    if (calm || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset.inView = "true";
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.04 },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [calm]);

  const progressStyle = { "--progress": progress } as CSSProperties;

  return (
    <>
      <a className={styles.skipLink} href="#main-content">Skip to issue</a>
      <div
        className={styles.ambient}
        data-experience-ambient
        data-experience-grain
        aria-hidden="true"
      />
      <div className={styles.progressTrack} aria-hidden="true">
        <span className={styles.progressValue} style={progressStyle} />
      </div>

      {showDock ? (
        <aside className={styles.dock} aria-label="Issue chapters">
          <div className={styles.dockHead}>
            <span className={styles.liveDot} data-experience-pulse aria-hidden="true" />
            <span>{issueLabel}</span>
          </div>

          <nav className={styles.chapterNav} aria-label="Quick issue navigation">
            {sections.map((section) => {
              const active = section.id === activeId;
              return (
                <a
                  className={`${styles.chapterLink} ${active ? styles.chapterLinkActive : ""}`}
                  href={`#${section.id}`}
                  aria-current={active ? "location" : undefined}
                  aria-label={`Go to ${section.label}`}
                  title={section.label}
                  key={section.id}
                >
                  <Icon name={section.icon} size={17} />
                  <span>{section.label}</span>
                </a>
              );
            })}
          </nav>

          <button
            className={`${styles.calmButton} ${calm ? styles.calmButtonActive : ""}`}
            type="button"
            aria-pressed={calm}
            onClick={() => setCalm((value) => !value)}
            title={calm ? "Switch to live mode" : "Switch to calm mode"}
            aria-label={calm ? "Switch to live mode" : "Switch to calm mode"}
          >
            <Icon name={calm ? "pause" : "play"} size={15} />
            <span>{calm ? "Calm" : "Live"}</span>
          </button>

          <div className={styles.currentChapter} aria-live="polite">
            <span>{Math.round(progress * 100)}%</span>
            <strong>{activeLabel}</strong>
          </div>
        </aside>
      ) : null}
    </>
  );
}
