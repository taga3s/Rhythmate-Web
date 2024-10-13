import type { FrameColor, ImageType } from "./types";

export type Badge = {
  id: string;
  name: string;
  description: string;
  imageType: ImageType;
  frameColor: FrameColor;
  obtainedAt: string;
  isPinned: boolean;
  unlockable: boolean;
};

export const toBadge = (obj: {
  badge_id: string;
  name: string;
  description: string;
  image_type: ImageType;
  frame_color: FrameColor;
  obtained_at: string;
  is_pinned: boolean;
  unlockable: boolean;
}): Badge => {
  return {
    id: obj.badge_id,
    name: obj.name,
    description: obj.description,
    imageType: obj.image_type,
    frameColor: obj.frame_color,
    obtainedAt: obj.obtained_at,
    isPinned: obj.is_pinned,
    unlockable: obj.unlockable,
  };
};
