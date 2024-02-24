import { apiClient } from "../../../pkg/api/client/apiClient";
import { GetResponse } from "./types";

export interface QuestRepository {
  get: () => Promise<GetResponse>;
}

const get: QuestRepository["get"] = async () => {
  const response = await apiClient.get("/quests");
  return response;
};

export const questRepository: QuestRepository = {
  get,
};
