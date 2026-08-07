import { alexIruneEditorial } from "./editorial";
import { alexIruneLinkedIn } from "./linkedin";
import { alexIrune } from "./profile";
import { alexIrunePublicRooms } from "./public-rooms";

export const alexIruneIssue = {
  slug: alexIrune.slug,
  profile: alexIrune,
  editorial: alexIruneEditorial,
  linkedin: alexIruneLinkedIn,
  publicRooms: alexIrunePublicRooms,
} as const;

export type AlexIruneIssue = typeof alexIruneIssue;
