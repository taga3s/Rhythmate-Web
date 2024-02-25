import { toUser } from "./model";
import { userRepository } from "./repository";
import { UpdateLoginUserParams } from "./types";

export const userFactory = () => {
  const repository = userRepository;
  return {
    getLoginUser: async () => {
      const response = await repository.get();
      return toUser(response);
    },
    updateLoginUser: async (params: UpdateLoginUserParams) => {
      const response = await repository.update(params);
      return toUser(response);
    },
    logout: async () => await repository.logout(),
  };
};
