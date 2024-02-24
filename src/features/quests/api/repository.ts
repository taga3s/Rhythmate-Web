import { apiClient } from "../../../pkg/api/client/apiClient";
import { FinishRequest, FinishResponse, GetResponse, StartRequest, StartResponse } from "./types";

export interface QuestRepository {
  get: () => Promise<GetResponse>;
  start: (params: StartRequest) => Promise<StartResponse>;
  finish: (params: FinishRequest) => Promise<FinishResponse>;
}

const get: QuestRepository["get"] = async () => {
  const response = await apiClient.get("/quests");
  return response;
};

const start: QuestRepository["start"] = async (params: StartRequest) => {
  const response = await apiClient.patch(`/quests/start/${params.id}`);
  return response;
};

const finish: QuestRepository["finish"] = async (params: FinishRequest) => {
  const response = await apiClient.patch(`/quests/finish/${params.id}`);
  return response;
};

export const questRepository: QuestRepository = {
  get,
  start,
  finish,
};
