import { apiClient } from "../../../../pkg/api/client/apiClient";
import { GetResponse, UpdateLoginUserRequest, UpdateLoginUserResponse } from "./types";

export interface UserRepository {
  get: () => Promise<GetResponse>;
  update: (params: UpdateLoginUserRequest) => Promise<UpdateLoginUserResponse>;
  logout: () => Promise<void>;
}

const get: UserRepository["get"] = async () => {
  const response = await apiClient.get("/users/me");
  return response;
};

const update: UserRepository["update"] = async (params: UpdateLoginUserRequest) => {
  const response = await apiClient.patch("/users/me", params);
  return response;
};

const logout: UserRepository["logout"] = async () => {
  await apiClient.post("/users/logout");
};

export const userRepository: UserRepository = {
  get,
  update,
  logout,
};
