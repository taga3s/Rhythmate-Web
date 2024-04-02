import { apiClient } from "../../pkg/api/client/apiClient";
import { ListResponse, PinBadgeRequest, PinBadgeResponse, UnpinBadgeRequest, UnpinBadgeResponse } from "./type";

export interface BadgeRepository {
  list: () => Promise<ListResponse>;
  pin: (params: PinBadgeRequest) => Promise<PinBadgeResponse>;
  unpin: (params: UnpinBadgeRequest) => Promise<UnpinBadgeResponse>;
}

const list: BadgeRepository["list"] = async () => {
  const response = await apiClient.get("/badge");
  console.log(response);
  return response;
};

const pin: BadgeRepository["pin"] = async (params: PinBadgeRequest) => {
  const response = await apiClient.patch(`/badge/pin/${params.id}`);
  return response;
};

const unpin: BadgeRepository["unpin"] = async (params: UnpinBadgeRequest) => {
  const response = await apiClient.patch(`/badge/unpin/${params.id}`);
  return response;
};

export const badgeRepository: BadgeRepository = {
  list,
  pin,
  unpin,
};
