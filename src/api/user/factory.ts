import { toUser } from "./model";
import { userRepository } from "./repository";
import { AuthParams, SignupParams, UpdateLoginUserParams } from "./types";

export const createFactory = () => {
  const repository = userRepository;
  return {
    auth: async (params: AuthParams) => {
      await repository.auth(params);
    },
    signup: async (params: SignupParams) => {
      await repository.signup(params);
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
