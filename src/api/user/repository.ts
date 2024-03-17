import { apiClient } from "../../pkg/api/client/apiClient";
import {
  AuthRequest,
  AuthResponse,
  GetResponse,
  SignupRequest,
  SignupResponse,
  UpdateLoginUserRequest,
  UpdateLoginUserResponse,
} from "./types";

export interface UserRepository {
  auth: (params: AuthRequest) => Promise<AuthResponse>;
  signup: (params: SignupRequest) => Promise<SignupResponse>;
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
  auth,
  signup,
  logout,
  get,
  update,
};
