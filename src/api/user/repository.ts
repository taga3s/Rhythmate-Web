import { apiClient } from "../../pkg/api/client/apiClient";
import type {
  AuthRequest,
  AuthResponse,
  GetLoginUserResponse,
  IsAuthenticatedResponse,
  UpdateLoginUserRequest,
  UpdateLoginUserResponse,
} from "./types";

export interface UserRepository {
  auth: (params: AuthRequest) => Promise<AuthResponse>;
  isAuthenticated: () => Promise<IsAuthenticatedResponse>;
  logout: () => Promise<void>;
  get: () => Promise<GetLoginUserResponse>;
  update: (params: UpdateLoginUserRequest) => Promise<UpdateLoginUserResponse>;
  destroy: () => Promise<void>;
}

const auth: UserRepository["auth"] = async (params: AuthRequest) => {
  const response = await apiClient.post("/users/auth", {
    idToken: params.id_token,
  });
  return response;
};

const isAuthenticated: UserRepository["isAuthenticated"] = async () => {
  const response = await apiClient.get("/users/is-authenticated");
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

const destroy: UserRepository["destroy"] = async () => {
  const response = await apiClient.destroy("/users/me");
  return response;
};

export const userRepository: UserRepository = {
  auth,
  isAuthenticated,
  logout,
  get,
  update,
  destroy,
};
