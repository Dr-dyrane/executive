import { Icon } from "@/components/executive/icon";
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
    <section className={styles.section} id="rooms">
      <div className={styles.shell}>
        <header className={styles.header}>
          <div className={styles.kicker}>Public circuit</div>
          <h2 className="font-display">The rooms.</h2>
        </header>

        <div className={styles.stage}>
          {rooms.map((room, index) => (
            <article
              className={styles.room}
              key={`${room.name}-${room.timing}`}
              aria-label={`${room.name}. ${room.summary}`}
            >
              <div className={styles.topline}>
                <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
                <span className={`${styles.status} ${statusClass[room.confidence]}`}>
                  <span className={styles.statusDot} />
                  {statusLabel[room.confidence]}
                </span>
              </div>

              <div className={styles.format}>{room.format}</div>
              <h3 className="font-display">{room.name}</h3>

              <div className={styles.placeLine}>
                <span><Icon name="location" />{room.location}</span>
                <span><Icon name="calendar" />{room.timing}</span>
              </div>

              <div className={styles.facts}>
                <span title="Documented presence"><Icon name="check" />{room.presence}</span>
                <span title="Access route"><Icon name="ticket" />{room.access}</span>
                <span title="Networking purpose"><Icon name="users" />{room.purpose}</span>
              </div>

              {room.people?.length ? (
                <div className={styles.people} aria-label={`${room.name} participants`}>
                  {room.people.map((person) => (
                    <div className={styles.person} key={person.name}>
                      <small>{person.role}</small>
                      <strong className="font-display">{person.name}</strong>
                      <div className={styles.links}>
                        {person.links.map((link) => (
                          <a href={link.href} target="_blank" rel="noreferrer" key={`${person.name}-${link.label}`}>
                            {link.label}<Icon name="arrow" size={14} />
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}

              <footer className={styles.footer}>
                <div className={styles.links}>
                  {room.links?.map((link) => (
                    <a href={link.href} target="_blank" rel="noreferrer" key={`${room.name}-${link.label}`}>
                      {link.label}<Icon name="arrow" size={14} />
                    </a>
                  ))}
                </div>
                <a
                  className={styles.source}
                  href={room.sourceHref}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${room.sourceLabel} for ${room.name}`}
                  title={room.sourceLabel}
                >
                  <Icon name="source" />
                </a>
              </footer>
            </article>
          ))}
        </div>

        <p className={styles.boundary}>Lagos · Abuja · Cape Town</p>
      </div>
    </section>
  );
}
