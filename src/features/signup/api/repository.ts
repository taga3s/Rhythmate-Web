import { apiClient } from "../../../pkg/api/client/apiClient";
import { SignupRequest, SignupResponse } from "./types";

export interface UserRepository {
  signup: (params: SignupRequest) => Promise<SignupResponse>;
}

const signup: UserRepository["signup"] = async (params: SignupRequest) => {
  const response = await apiClient.post("/users/signup", {
    name: params.name,
    email: params.email,
    password: params.password,
    passwordConfirmation: params.passwordConfirmation,
  });
  return response;
};

export const userRepository: UserRepository = {
  signup,
};
