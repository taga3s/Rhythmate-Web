import { apiClient } from "../../pkg/api/client/apiClient";
import {
  AuthRequest,
  AuthResponse,
  GetResponse,
  IsAuthenticatedResponse,
  UpdateLoginUserRequest,
  UpdateLoginUserResponse,
} from "./types";

export interface UserRepository {
  auth: (params: AuthRequest) => Promise<AuthResponse>;
  isAuthenticated: () => Promise<IsAuthenticatedResponse>;
  logout: () => Promise<void>;
  get: () => Promise<GetResponse>;
  update: (params: UpdateLoginUserRequest) => Promise<UpdateLoginUserResponse>;
}

const auth: UserRepository["auth"] = async (params: AuthRequest) => {
  const response = await apiClient.post("/users/auth", {
    idToken: params.idToken,
  });
  return response;
};

const isAuthenticated: UserRepository["isAuthenticated"] = async () => {
  const response = await apiClient.get("/users/authenticated");
  return response;
};

const logout: UserRepository["logout"] = async () => {
  await apiClient.post("/users/logout");
};

const get: UserRepository["get"] = async () => {
  const response = await apiClient.get("/users/me");
  return response;
};

const update: UserRepository["update"] = async (params: UpdateLoginUserRequest) => {
  const response = await apiClient.patch("/users/me", params);
  return response;
};

export const userRepository: UserRepository = {
  auth,
  isAuthenticated,
  logout,
  get,
  update,
};
