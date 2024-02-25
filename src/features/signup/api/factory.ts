import { userRepository } from "./repository";
import { SignupParams } from "./types";

export const userFactory = () => {
  const repository = userRepository;
  return {
    signup: async (params: SignupParams) => {
      await repository.signup(params);
    },
  };
};
