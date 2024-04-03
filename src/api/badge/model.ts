export type Badge = {
  id: string;
  badgeId: string;
  name: string;
  description: string;
  imageType: string;
  obtainedAt: string;
  isPinned: boolean;
};

export const toBadge = (obj: {
  id: string;
  badge_id: string;
  name: string;
  description: string;
  image_type: string;
  obtained_at: string;
  is_pinned: boolean;
}): Badge => {
  return {
    id: obj.id,
    badgeId: obj.badge_id,
    name: obj.name,
    description: obj.description,
    imageType: obj.image_type,
    obtainedAt: obj.obtained_at,
    isPinned: obj.is_pinned,
  };
};
