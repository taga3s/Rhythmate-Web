import { toUser } from "./model";
import { userRepository } from "./repository";
import { AuthParams, DeleteLoginUserParams, UpdateLoginUserParams } from "./types";

export const createFactory = () => {
  const repository = userRepository;
  return {
    auth: async (params: AuthParams) => {
      await repository.auth(params);
    },
    isAuthenticated: async () => {
      const response = await repository.isAuthenticated();
      return response;
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
    deleteLoginUser: async (params: DeleteLoginUserParams) => {
      const response = await repository.destroy(params);
      return response;
    }
  };
};
