import { apiClient } from "../../api/client/apiClient";
import type {
  CreateTagRequest,
  CreateTagResponse,
  DeleteTagRequest,
  DeleteTagResponse,
  ListTagsResponse,
  UpdateTagRequest,
  UpdateTagResponse,
} from "./type";

export interface TagRepository {
  list: () => Promise<ListTagsResponse>;
  create: (params: CreateTagRequest) => Promise<CreateTagResponse>;
  destroy: (params: DeleteTagRequest) => Promise<DeleteTagResponse>;
  update: (params: UpdateTagRequest) => Promise<UpdateTagResponse>;
}

const list: TagRepository["list"] = async () => {
  const response = await apiClient.get("/tags");
  return response;
};

const create: TagRepository["create"] = async (params: CreateTagRequest) => {
  const response = await apiClient.post("/tags", params);
  return response;
};

const destroy: TagRepository["destroy"] = async (params: DeleteTagRequest) => {
  const response = await apiClient.destroy(`/tags/${params.id}`);
  return response;
};

const update: TagRepository["update"] = async (params: UpdateTagRequest) => {
  const response = await apiClient.patch(`/tags/${params.id}`, params);
  return response;
};

export const tagRepository: TagRepository = {
  list,
  create,
  destroy,
  update,
};
