import { apiClient } from "../../pkg/api/client/apiClient";
import {
  GetResponse,
  LoginResponse,
  SignupRequest,
  SignupResponse,
  UpdateLoginUserRequest,
  UpdateLoginUserResponse,
} from "./types";

export interface UserRepository {
  login: (params: { email: string; password: string }) => Promise<LoginResponse>;
  signup: (params: SignupRequest) => Promise<SignupResponse>;
  logout: () => Promise<void>;
  get: () => Promise<GetResponse>;
  update: (params: UpdateLoginUserRequest) => Promise<UpdateLoginUserResponse>;
}

const login: UserRepository["login"] = async (params: { email: string; password: string }) => {
  const response = await apiClient.post("/users/login", {
    email: params.email,
    password: params.password,
  });
  return response;
};

const signup: UserRepository["signup"] = async (params: SignupRequest) => {
  const response = await apiClient.post("/users/signup", {
    name: params.name,
    email: params.email,
    password: params.password,
    passwordConfirmation: params.passwordConfirmation,
  });
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
  login,
  signup,
  logout,
  get,
  update,
};
