export type ImageType = "bow" | "cat" | "crown" | "gem" | "horse" | "shield" | "sword";
export type FrameColor = "bronze" | "silver" | "gold";

type BaseResponse = {
  badge_id: string;
  name: string;
  description: string;
  image_type: ImageType;
  frame_color: FrameColor;
  unlockable: boolean;
  obtained_at: string;
  is_pinned: boolean;
};

export type ListResponse = {
  status: string;
  badgesWithDetail: BaseResponse[];
};

export type AchieveBadgeParams = {
  badgeId: string;
};

export type AchieveBadgeRequest = {
  badgeId: string;
};

export type AchieveBadgeResponse = BaseResponse & {
  status: string;
};

export type PinBadgeParams = {
  badgeId: string;
};

export type PinBadgeRequest = {
  badgeId: string;
};

export type PinBadgeResponse = BaseResponse & {
  status: string;
};

export type UnpinBadgeParams = {
  badgeId: string;
};

export type UnpinBadgeRequest = {
  badgeId: string;
};

export type UnpinBadgeResponse = BaseResponse & {
  status: string;
};
