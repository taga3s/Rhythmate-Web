import { useMutation } from "@tanstack/react-query";
import { SignupParams } from "../types";
import { FetchError } from "../../../../pkg/api/util/fetchError";
import { userFactory } from "../factory";

export const useMutateUser = () => {
  const signupMutation = useMutation({
    mutationFn: async (params: SignupParams) => {
      return await userFactory().signup(params);
    },
    onError: (err: FetchError) => {
      console.log(err);
    },
  });
  return {
    signupMutation,
  };
};
