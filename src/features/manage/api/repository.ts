import { apiClient } from "../../../pkg/api/client/apiClient";
import { CreateRequest, CreateResponse, DeleteRequest, UpdateRequest, UpdateResponse } from "./types";

export interface QuestRepository {
  create: (params: CreateRequest) => Promise<CreateResponse>;
  update: (params: UpdateRequest) => Promise<UpdateResponse>;
  destroy: (params: DeleteRequest) => Promise<void>;
}

const create: QuestRepository["create"] = async (params: CreateRequest) => {
  const response = await apiClient.post("/quests", params);
  return response;
};

const update: QuestRepository["update"] = async (params: UpdateRequest) => {
  const response = await apiClient.patch(`/quests/${params.id}`, params);
  return response;
};

const destroy: QuestRepository["destroy"] = async (params: DeleteRequest) => {
  await apiClient.destroy(`/quests/${params.id}`);
};

export const questRepository: QuestRepository = {
  create,
  update,
  destroy,
};
