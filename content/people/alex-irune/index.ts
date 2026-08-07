import { alexIruneEditorial } from "./editorial";
import { alexIrune } from "./profile";
import { alexIrunePublicRooms } from "./public-rooms";

export const alexIruneIssue = {
  slug: alexIrune.slug,
  profile: alexIrune,
  editorial: alexIruneEditorial,
  publicRooms: alexIrunePublicRooms,
} as const;

export type AlexIruneIssue = typeof alexIruneIssue;
