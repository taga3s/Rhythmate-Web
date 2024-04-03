export type ListResponse = {
  status: string;
  badgesWithDetail: {
    id: string;
    badge_id: string;
    name: string;
    description: string;
    image_type: string;
    obtained_at: string;
    is_pinned: boolean;
  }[];
};

export type PinBadgeParams = {
  id: string;
};

export type PinBadgeRequest = {
  id: string;
};

export type PinBadgeResponse = {
  status: string;
  id: string;
  badge_id: string;
  name: string;
  description: string;
  image_type: string;
  obtained_at: string;
  is_pinned: boolean;
};

export type UnpinBadgeParams = {
  id: string;
};

export type UnpinBadgeRequest = {
  id: string;
};

export type UnpinBadgeResponse = {
  status: string;
  id: string;
  badge_id: string;
  name: string;
  description: string;
  image_type: string;
  obtained_at: string;
  is_pinned: boolean;
};
