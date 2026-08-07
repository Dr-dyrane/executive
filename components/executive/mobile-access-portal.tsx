"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Icon, type IconName } from "@/components/executive/icon";
import { alexIrune } from "@/content/people/alex-irune/profile";

type MobileAction = {
  label: string;
  href: string;
  icon: IconName;
  external?: boolean;
};

const actions: readonly MobileAction[] = [
  {
    label: "Email",
    href: `mailto:${alexIrune.contact.officialEmail}`,
    icon: "mail",
  },
  {
    label: "Call",
    href: `tel:${alexIrune.contact.officialPhone.replace(/[^+\d]/g, "")}`,
    icon: "phone",
  },
  {
    label: "LinkedIn",
    href: alexIrune.social[1].href,
    icon: "linkedin",
    external: true,
  },
  {
    label: "Instagram",
    href: alexIrune.social[0].href,
    icon: "instagram",
    external: true,
  },
  {
    label: "Now",
    href: "#now",
    icon: "calendar",
  },
  {
    label: "Meet",
    href: "#rooms",
    icon: "ticket",
  },
];

export function MobileAccessPortal() {
  const [host, setHost] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const publication = document.querySelector<HTMLElement>('[aria-label="Publication details"]');
    if (!publication?.parentElement) return;

    const existing = publication.parentElement.querySelector<HTMLElement>("[data-mobile-access-host]");
    if (existing) {
      setHost(existing);
      return;
    }

    const portalHost = document.createElement("div");
    portalHost.dataset.mobileAccessHost = "true";
    publication.insertAdjacentElement("afterend", portalHost);
    setHost(portalHost);

    return () => {
      setHost(null);
      portalHost.remove();
    };
  }, []);

  if (!host) return null;

  return createPortal(
    <nav data-mobile-access aria-label="Quick access">
      {actions.map((action) => (
        <a
          href={action.href}
          target={action.external ? "_blank" : undefined}
          rel={action.external ? "noreferrer" : undefined}
          key={action.label}
        >
          <Icon name={action.icon} size={17} />
          <span>{action.label}</span>
        </a>
      ))}
    </nav>,
    host,
  );
}
