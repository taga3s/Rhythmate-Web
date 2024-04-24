import { apiClient } from "../../pkg/api/client/apiClient";
import type {
  CreateRequest,
  CreateResponse,
  DeleteRequest,
  DeleteResponse,
  ListTagsResponse,
  UpdateRequest,
  UpdateResponse,
} from "./type";

export interface TagRepository {
  list: () => Promise<ListTagsResponse>;
  create: (params: CreateRequest) => Promise<CreateResponse>;
  destroy: (params: DeleteRequest) => Promise<DeleteResponse>;
  update: (params: UpdateRequest) => Promise<UpdateResponse>;
}

const list: TagRepository["list"] = async () => {
  const response = await apiClient.get("/tags");
  return response;
};

const create: TagRepository["create"] = async (params: CreateRequest) => {
  const response = await apiClient.post("/tags", params);
  return response;
};

const destroy: TagRepository["destroy"] = async (params: DeleteRequest) => {
  const response = await apiClient.destroy(`/tags/${params.id}`);
  return response;
};

const update: TagRepository["update"] = async (params: UpdateRequest) => {
  const response = await apiClient.patch(`/tags/${params.id}`, params);
  return response;
};

export const tagRepository: TagRepository = {
  list,
  create,
  destroy,
  update,
};
