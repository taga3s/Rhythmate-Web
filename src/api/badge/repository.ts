import { apiClient } from "../../api/client/apiClient";
import type {
  AchieveBadgeRequest,
  AchieveBadgeResponse,
  ListBadgesResponse,
  PinBadgeRequest,
  PinBadgeResponse,
  UnpinBadgeRequest,
  UnpinBadgeResponse,
} from "./types";

export interface BadgeRepository {
  list: () => Promise<ListBadgesResponse>;
  achieve: (params: AchieveBadgeRequest) => Promise<AchieveBadgeResponse>;
  pin: (params: PinBadgeRequest) => Promise<PinBadgeResponse>;
  unpin: (params: UnpinBadgeRequest) => Promise<UnpinBadgeResponse>;
}

const list: BadgeRepository["list"] = async () => {
  const response = await apiClient.get("/badge");
  return response;
};

const achieve: BadgeRepository["achieve"] = async (params: AchieveBadgeRequest) => {
  const response = await apiClient.patch(`/badge/${params.badge_id}`);
  return response;
};

const pin: BadgeRepository["pin"] = async (params: PinBadgeRequest) => {
  const response = await apiClient.patch(`/badge/pin/${params.badge_id}`);
  return response;
};

const unpin: BadgeRepository["unpin"] = async (params: UnpinBadgeRequest) => {
  const response = await apiClient.patch(`/badge/unpin/${params.badge_id}`);
  return response;
};

export const badgeRepository: BadgeRepository = {
  list,
  achieve,
  pin,
  unpin,
};
