import { apiClient } from "../../pkg/api/client/apiClient";
import {
  CreateRequest,
  CreateResponse,
  DeleteRequest,
  FinishRequest,
  FinishResponse,
  ForceFinishRequest,
  ForceFinishResponse,
  ListResponse,
  StartRequest,
  StartResponse,
  UpdateRequest,
  UpdateResponse,
} from "./types";

export interface QuestRepository {
  list: () => Promise<ListResponse>;
  create: (params: CreateRequest) => Promise<CreateResponse>;
  destroy: (params: DeleteRequest) => Promise<void>;
  update: (params: UpdateRequest) => Promise<UpdateResponse>;
  start: (params: StartRequest) => Promise<StartResponse>;
  finish: (params: FinishRequest) => Promise<FinishResponse>;
  forceFinish: (params: ForceFinishRequest) => Promise<ForceFinishResponse>;
}

const list: QuestRepository["list"] = async () => {
  const response = await apiClient.get("/quests");
  return response;
};

const create: QuestRepository["create"] = async (params: CreateRequest) => {
  const response = await apiClient.post("/quests", params);
  return response;
};

const destroy: QuestRepository["destroy"] = async (params: DeleteRequest) => {
  await apiClient.destroy(`/quests/${params.id}`);
};

const update: QuestRepository["update"] = async (params: UpdateRequest) => {
  const response = await apiClient.patch(`/quests/${params.id}`, params);
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
  create,
  destroy,
  update,
  start,
  finish,
  forceFinish,
};
