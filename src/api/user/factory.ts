import { toUser } from "./model";
import { userRepository } from "./repository";
import { LoginParams, SignupParams, UpdateLoginUserParams } from "./types";

export const createFactory = () => {
  const repository = userRepository;
  return {
    signup: async (params: SignupParams) => {
      await repository.signup(params);
    },
    login: async (params: LoginParams) => {
      await repository.login(params);
    },
    logout: async () => await repository.logout(),
    getLoginUser: async () => {
      const response = await repository.get();
      return toUser(response);
    },
    updateLoginUser: async (params: UpdateLoginUserParams) => {
      const response = await repository.update(params);
      return toUser(response);
    },
  };
};
