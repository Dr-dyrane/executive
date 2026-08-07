import type { SVGProps } from "react";

export type IconName =
  | "arrow"
  | "calendar"
  | "check"
  | "compass"
  | "instagram"
  | "linkedin"
  | "location"
  | "mail"
  | "pause"
  | "phone"
  | "play"
  | "source"
  | "ticket"
  | "users";

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
};

export function Icon({ name, size = 18, ...props }: IconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    focusable: false,
    ...props,
  };

  switch (name) {
    case "arrow":
      return (
        <svg {...common}>
          <path d="M7 17 17 7" />
          <path d="M8 7h9v9" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common}>
          <path d="M6 3v3M18 3v3M4 9h16" />
          <rect x="4" y="5" width="16" height="15" rx="3" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="m8 12 2.5 2.5L16 9" />
        </svg>
      );
    case "compass":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="m15.5 8.5-2.1 4.9-4.9 2.1 2.1-4.9 4.9-2.1Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="3.6" />
          <circle cx="17.4" cy="6.7" r=".7" fill="currentColor" stroke="none" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
          <path d="M8 10v6M8 7.7v.1M11.5 16v-3.3c0-1.7 1-2.8 2.5-2.8s2.5 1 2.5 2.8V16M11.5 10.2V16" />
        </svg>
      );
    case "location":
      return (
        <svg {...common}>
          <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.4" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="3" />
          <path d="m4.5 7 7.5 6 7.5-6" />
        </svg>
      );
    case "pause":
      return (
        <svg {...common}>
          <rect x="7" y="5" width="3.5" height="14" rx="1" />
          <rect x="13.5" y="5" width="3.5" height="14" rx="1" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M7.3 4.2 9.4 8l-2 2.2c1.3 2.8 3.5 5 6.3 6.3l2.2-2 3.8 2.1c.3.2.5.6.4 1-.4 2-2 3.2-4 3-7-.8-12-5.8-12.8-12.8-.2-2 1-3.7 3-4 .4-.1.8.1 1 .4Z" />
        </svg>
      );
    case "play":
      return (
        <svg {...common}>
          <path d="m9 6 9 6-9 6V6Z" />
        </svg>
      );
    case "source":
      return (
        <svg {...common}>
          <path d="M8 4h8l3 3v13H5V4h3Z" />
          <path d="M14 4v5h5M8 13h8M8 16h6" />
        </svg>
      );
    case "ticket":
      return (
        <svg {...common}>
          <path d="M4 8a2 2 0 0 0 0 4v5h16v-5a2 2 0 0 0 0-4V5H4v3Z" />
          <path d="M14 8v1M14 12v1M14 16v1" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <circle cx="9" cy="9" r="3" />
          <circle cx="17" cy="10" r="2" />
          <path d="M3.5 19c.5-3.2 2.5-5 5.5-5s5 1.8 5.5 5M14.5 15c2.7-.5 5 .8 6 3" />
        </svg>
      );
  }
}
