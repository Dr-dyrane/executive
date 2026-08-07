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

type LumenTone = {
  primary: string;
  secondary: string;
  originX: string;
  originY: string;
  alpha: string;
};

const DEFAULT_LUMEN: LumenTone = {
  primary: "216 173 104",
  secondary: "255 244 222",
  originX: "68%",
  originY: "24%",
  alpha: "0.18",
};

const LUMEN_TONES: Record<string, LumenTone> = {
  cover: DEFAULT_LUMEN,
  profile: {
    primary: "255 244 222",
    secondary: "216 173 104",
    originX: "20%",
    originY: "38%",
    alpha: "0.15",
  },
  portfolio: {
    primary: "238 244 248",
    secondary: "216 173 104",
    originX: "64%",
    originY: "34%",
    alpha: "0.13",
  },
  career: {
    primary: "216 173 104",
    secondary: "171 119 52",
    originX: "18%",
    originY: "48%",
    alpha: "0.14",
  },
  now: {
    primary: "234 183 93",
    secondary: "255 234 186",
    originX: "76%",
    originY: "30%",
    alpha: "0.22",
  },
  access: {
    primary: "255 244 222",
    secondary: "216 173 104",
    originX: "56%",
    originY: "40%",
    alpha: "0.17",
  },
  linkedin: {
    primary: "102 190 255",
    secondary: "157 120 255",
    originX: "72%",
    originY: "34%",
    alpha: "0.2",
  },
  rooms: {
    primary: "232 168 92",
    secondary: "133 84 47",
    originX: "28%",
    originY: "52%",
    alpha: "0.17",
  },
  network: {
    primary: "198 213 224",
    secondary: "122 145 160",
    originX: "72%",
    originY: "42%",
    alpha: "0.13",
  },
  sources: {
    primary: "142 142 142",
    secondary: "216 173 104",
    originX: "50%",
    originY: "70%",
    alpha: "0.07",
  },
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
    root.dataset.lumenSection = sections[0]?.id ?? "cover";

    return () => {
      delete root.dataset.calm;
      delete root.dataset.experienceReady;
      delete root.dataset.lumenSection;
      [
        "--lumen-primary",
        "--lumen-secondary",
        "--lumen-origin-x",
        "--lumen-origin-y",
        "--lumen-alpha",
        "--lumen-shift-x",
        "--lumen-shift-y",
      ].forEach((property) => root.style.removeProperty(property));
    };
  }, [sections]);

  useEffect(() => {
    const root = document.documentElement;
    const tone = LUMEN_TONES[activeId] ?? DEFAULT_LUMEN;

    root.dataset.lumenSection = activeId;
    root.style.setProperty("--lumen-primary", tone.primary);
    root.style.setProperty("--lumen-secondary", tone.secondary);
    root.style.setProperty("--lumen-origin-x", tone.originX);
    root.style.setProperty("--lumen-origin-y", tone.originY);
    root.style.setProperty("--lumen-alpha", tone.alpha);
  }, [activeId]);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.calm = String(calm);

    if (calm) {
      root.style.setProperty("--lumen-shift-x", "0px");
      root.style.setProperty("--lumen-shift-y", "0px");
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

      const x = ((event.clientX / Math.max(window.innerWidth, 1)) - 0.5) * 12;
      const y = ((event.clientY / Math.max(window.innerHeight, 1)) - 0.5) * 10;
      root.style.setProperty("--lumen-shift-x", `${x.toFixed(2)}px`);
      root.style.setProperty("--lumen-shift-y", `${y.toFixed(2)}px`);
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
    const observed = new Set<HTMLElement>();
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-20% 0px -58%", threshold: [0.08, 0.2, 0.45, 0.7] },
    );

    const observeAvailableSections = () => {
      sections.forEach((section) => {
        const target = document.getElementById(section.id);
        if (!(target instanceof HTMLElement) || observed.has(target)) return;
        observed.add(target);
        observer.observe(target);
      });
    };

    observeAvailableSections();
    const mutationObserver = new MutationObserver(observeAvailableSections);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
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
        data-lumen-field
        aria-hidden="true"
      />
      <div className={styles.progressTrack} aria-hidden="true">
        <span className={styles.progressValue} style={progressStyle} />
      </div>

      {showDock ? (
        <aside className={styles.dock} aria-label="Issue chapters" data-lumen-active={activeId}>
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
