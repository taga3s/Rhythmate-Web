export type Badge = {
  id: string;
  badgeId: string;
  obtainedAt: string;
  isPinned: boolean;
};

export const toBadge = (obj: {
  id: string;
  badge_id: string;
  obtained_at: string;
  is_pinned: boolean;
}): Badge => {
  return {
    id: obj.id,
    badgeId: obj.badge_id,
    obtainedAt: obj.obtained_at,
    isPinned: obj.is_pinned,
  };
};
