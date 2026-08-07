"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { alexIruneLinkedIn } from "@/content/people/alex-irune/linkedin";
import { LinkedInPulse } from "./linkedin-pulse";

export function LinkedInPulsePortal() {
  const [host, setHost] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let frame = 0;
    let observer: MutationObserver | undefined;

    const mount = () => {
      const access = document.getElementById("access");
      const target = access?.firstElementChild instanceof HTMLElement
        ? access.firstElementChild
        : access;

      if (!(target instanceof HTMLElement)) return false;

      const existing = target.querySelector<HTMLElement>("[data-linkedin-pulse-host]");
      if (existing) {
        setHost(existing);
        return true;
      }

      const portalHost = document.createElement("div");
      portalHost.dataset.linkedinPulseHost = "true";
      const calendar = target.querySelector('[aria-label="Calendar"]');

      if (calendar) {
        target.insertBefore(portalHost, calendar);
      } else {
        target.appendChild(portalHost);
      }

      setHost(portalHost);
      return true;
    };

    if (!mount()) {
      frame = window.requestAnimationFrame(() => {
        if (mount()) return;
        observer = new MutationObserver(() => {
          if (mount()) observer?.disconnect();
        });
        observer.observe(document.body, { childList: true, subtree: true });
      });
    }

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
      setHost(null);
      document.querySelector("[data-linkedin-pulse-host]")?.remove();
    };
  }, []);

  return host ? createPortal(<LinkedInPulse data={alexIruneLinkedIn} />, host) : null;
}
