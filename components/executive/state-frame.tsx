import type { ReactNode } from "react";
import styles from "./state-frame.module.css";

type StateFrameProps = {
  code: string;
  eyebrow: string;
  title: ReactNode;
  body: string;
  actions?: ReactNode;
  busy?: boolean;
};

export function StateFrame({ code, eyebrow, title, body, actions, busy = false }: StateFrameProps) {
  return (
    <main className={styles.page} aria-busy={busy}>
      <div className={styles.masthead}>Dyrane Executive</div>
      <div className={styles.code}>{code}</div>
      <section className={styles.copy} aria-live={busy ? "polite" : undefined}>
        <div className={styles.eyebrow}>{eyebrow}</div>
        <h1 className="font-display">{title}</h1>
        <p>{body}</p>
        {actions ? <div className={styles.actions}>{actions}</div> : null}
      </section>
      <div className={styles.light} aria-hidden="true" />
    </main>
  );
}
