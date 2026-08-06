import type { PublicRoom } from "@/content/people/alex-irune/public-rooms";
import styles from "./public-rooms.module.css";

type PublicRoomsProps = {
  rooms: readonly PublicRoom[];
};

const statusClass: Record<PublicRoom["confidence"], string> = {
  confirmed: styles.statusConfirmed,
  context: styles.statusContext,
  unverified: styles.statusUnverified,
};

const statusLabel: Record<PublicRoom["confidence"], string> = {
  confirmed: "Confirmed",
  context: "Context",
  unverified: "Unverified",
};

export function PublicRooms({ rooms }: PublicRoomsProps) {
  return (
    <section className="chapter shell" id="rooms">
      <div className="chapter-head">
        <div className="eyebrow">The rooms</div>
        <div>
          <h2>Where public work becomes human connection.</h2>
          <p className="intro">
            A source-linked map of conferences, gala evenings, mentorship dinners and executive rooms in
            Irune&apos;s public professional circuit. Each entry separates confirmed presence from ecosystem
            context and unverified attendance.
          </p>
        </div>
      </div>

      <div className={styles.stage}>
        {rooms.map((room, index) => (
          <article className={styles.room} key={`${room.name}-${room.timing}`}>
            <div className={styles.topline}>
              <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
              <span className={`${styles.status} ${statusClass[room.confidence]}`}>
                {statusLabel[room.confidence]}
              </span>
            </div>

            <div className={styles.format}>{room.format}</div>
            <h3>{room.name}</h3>
            <div className={styles.location}>{room.location}</div>
            <p className={styles.summary}>{room.summary}</p>

            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <span>Presence</span>
                <strong>{room.presence}</strong>
              </div>
              <div className={styles.metaItem}>
                <span>Access</span>
                <strong>{room.access}</strong>
              </div>
              <div className={styles.metaItem}>
                <span>Purpose</span>
                <strong>{room.purpose}</strong>
              </div>
            </div>

            {room.people?.length ? (
              <div className={styles.people} aria-label={`${room.name} people and public profiles`}>
                {room.people.map((person) => (
                  <div className={styles.person} key={person.name}>
                    <div className={styles.personRole}>{person.role}</div>
                    <h4>{person.name}</h4>
                    <div className={styles.linkRow}>
                      {person.links.map((link) => (
                        <a
                          className={styles.link}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          key={`${person.name}-${link.label}`}
                        >
                          {link.label} ↗
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}

            {room.links?.length ? (
              <div className={styles.linkRow} aria-label={`${room.name} public links`}>
                {room.links.map((link) => (
                  <a
                    className={styles.link}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    key={`${room.name}-${link.label}`}
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            ) : null}

            <div className={styles.footer}>
              <span className={styles.timing}>{room.timing}</span>
              <a className={styles.source} href={room.sourceHref} target="_blank" rel="noreferrer">
                {room.sourceLabel} ↗
              </a>
            </div>
          </article>
        ))}
      </div>

      <p className={styles.boundary}>
        These are public professional and social settings—not a live-location feed. A venue appears only when
        a source documents the event, recognition or institutional circuit; recurring personal attendance is
        never inferred from a single gathering.
      </p>
    </section>
  );
}
