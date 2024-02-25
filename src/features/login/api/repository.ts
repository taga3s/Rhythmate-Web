import { apiClient } from "../../../pkg/api/client/apiClient";
import { LoginResponse } from "./types";

export interface UserRepository {
  login: (params: { email: string; password: string }) => Promise<LoginResponse>;
}

const login: UserRepository["login"] = async (params: { email: string; password: string }) => {
  const response = await apiClient.post("/users/login", {
    email: params.email,
    password: params.password,
  });
  return response;
};

export const userRepository: UserRepository = {
  login,
};
