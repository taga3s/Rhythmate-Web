import { apiClient } from "../../../pkg/api/client/apiClient";
import {
  FinishRequest,
  FinishResponse,
  ForceFinishRequest,
  ForceFinishResponse,
  ListResponse,
  StartRequest,
  StartResponse,
} from "./types";

export interface QuestRepository {
  list: () => Promise<ListResponse>;
  start: (params: StartRequest) => Promise<StartResponse>;
  finish: (params: FinishRequest) => Promise<FinishResponse>;
  forceFinish: (params: ForceFinishRequest) => Promise<ForceFinishResponse>;
}

const list: QuestRepository["list"] = async () => {
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

const forceFinish: QuestRepository["finish"] = async (params: ForceFinishRequest) => {
  const response = await apiClient.patch(`/quests/force-finish/${params.id}`);
  return response;
};

export const questRepository: QuestRepository = {
  list,
  start,
  finish,
  forceFinish,
};
