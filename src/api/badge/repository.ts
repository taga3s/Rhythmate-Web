import { apiClient } from "../../pkg/api/client/apiClient";
import type {
  AchieveBadgeRequest,
  AchieveBadgeResponse,
  ListResponse,
  PinBadgeRequest,
  PinBadgeResponse,
  UnpinBadgeRequest,
  UnpinBadgeResponse,
} from "./type";

export interface BadgeRepository {
  list: () => Promise<ListResponse>;
  achieve: (params: AchieveBadgeRequest) => Promise<AchieveBadgeResponse>;
  pin: (params: PinBadgeRequest) => Promise<PinBadgeResponse>;
  unpin: (params: UnpinBadgeRequest) => Promise<UnpinBadgeResponse>;
}

const list: BadgeRepository["list"] = async () => {
  const response = await apiClient.get("/badge");
  return response;
};

const achieve: BadgeRepository["achieve"] = async (params: AchieveBadgeRequest) => {
  const response = await apiClient.patch(`/badge/${params.badgeId}`);
  return response;
};

const pin: BadgeRepository["pin"] = async (params: PinBadgeRequest) => {
  const response = await apiClient.patch(`/badge/pin/${params.badgeId}`);
  return response;
};

const unpin: BadgeRepository["unpin"] = async (params: UnpinBadgeRequest) => {
  const response = await apiClient.patch(`/badge/unpin/${params.badgeId}`);
  return response;
};

export const badgeRepository: BadgeRepository = {
  list,
  achieve,
  pin,
  unpin,
};
