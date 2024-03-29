export type ListResponse = {
  status: string;
  badges: {
    id: string;
    badge_id: string;
    obtained_at: string;
    is_pinned: boolean;
  }[];
};

export type PinBadgeRequest = {
  id: string;
};

export type PinBadgeResponse = {
  status: string;
  id: string;
  badge_id: string;
  obtained_at: string;
  is_pinned: boolean;
};

export type UnpinBadgeRequest = {
  id: string;
};

export type UnpinBadgeResponse = {
  status: string;
  id: string;
  badge_id: string;
  obtained_at: string;
  is_pinned: boolean;
};
