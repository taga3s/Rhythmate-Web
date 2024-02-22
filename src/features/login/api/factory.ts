import { userRepository } from "./repository";
import { LoginParams } from "./types";

export const userFactory = () => {
  const repository = userRepository;
  return {
    login: async (params: LoginParams) => {
      await repository.login(params);
    },
  };
};
