import { apiClient } from "../../api/client/apiClient";
import type {
  CreateQuestRequest,
  CreateQuestResponse,
  DeleteQuestRequest,
  FinishQuestRequest,
  FinishQuestResponse,
  ForceFinishQuestRequest,
  ForceFinishQuestResponse,
  ListQuestsResponse,
  StartQuestRequest,
  StartQuestResponse,
  UpdateQuestRequest,
  UpdateQuestResponse,
} from "./types";

export interface QuestRepository {
  list: () => Promise<ListQuestsResponse>;
  create: (params: CreateQuestRequest) => Promise<CreateQuestResponse>;
  destroy: (params: DeleteQuestRequest) => Promise<void>;
  update: (params: UpdateQuestRequest) => Promise<UpdateQuestResponse>;
  start: (params: StartQuestRequest) => Promise<StartQuestResponse>;
  finish: (params: FinishQuestRequest) => Promise<FinishQuestResponse>;
  forceFinish: (params: ForceFinishQuestRequest) => Promise<ForceFinishQuestResponse>;
}

const list: QuestRepository["list"] = async () => {
  const response = await apiClient.get("/quests");
  return response;
};

const create: QuestRepository["create"] = async (params: CreateQuestRequest) => {
  const response = await apiClient.post("/quests", params);
  return response;
};

const destroy: QuestRepository["destroy"] = async (params: DeleteQuestRequest) => {
  await apiClient.destroy(`/quests/${params.id}`);
};

const update: QuestRepository["update"] = async (params: UpdateQuestRequest) => {
  const response = await apiClient.patch(`/quests/${params.id}`, params);
  return response;
};

const start: QuestRepository["start"] = async (params: StartQuestRequest) => {
  const response = await apiClient.patch(`/quests/start/${params.id}`);
  return response;
};

const finish: QuestRepository["finish"] = async (params: FinishQuestRequest) => {
  const response = await apiClient.patch(`/quests/finish/${params.id}`);
  return response;
};

const forceFinish: QuestRepository["finish"] = async (params: ForceFinishQuestRequest) => {
  const response = await apiClient.patch(`/quests/force-finish/${params.id}`);
  return response;
};

export const questRepository: QuestRepository = {
  list,
  create,
  destroy,
  update,
  start,
  finish,
  forceFinish,
};
