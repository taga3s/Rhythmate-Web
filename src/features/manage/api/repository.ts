import { apiClient } from "../../../pkg/api/client/apiClient";
import { CreateRequest, CreateResponse, UpdateRequest, UpdateResponse } from "./types";

export interface QuestRepository {
  create: (params: CreateRequest) => Promise<CreateResponse>;
  update: (params: UpdateRequest) => Promise<UpdateResponse>;
}

const create: QuestRepository["create"] = async (params: CreateRequest) => {
  const response = await apiClient.post("/quests", params);
  return response;
};

const update: QuestRepository["update"] = async (params: UpdateRequest) => {
  const response = await apiClient.patch("/quests", params);
  return response;
};

export const questRepository: QuestRepository = {
  create,
  update,
};
