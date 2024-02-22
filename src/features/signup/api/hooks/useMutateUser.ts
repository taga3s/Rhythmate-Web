import { useMutation } from "@tanstack/react-query";
import { SignupParams } from "../types";
import { FetchError } from "../../../../pkg/api/util/fetchError";
import { userFactory } from "../factory";
import { notify } from "../../../../pkg/ui/toast";

export const useMutateUser = () => {
  const signupMutation = useMutation({
    mutationFn: async (params: SignupParams) => {
      return await userFactory().signup(params);
    },
    onSuccess: () => {
      notify("サインアップに成功しました。");
    },
    onError: (err: FetchError) => {
      notify("サインアップに失敗しました。");
      console.log(err);
    },
  });
  return {
    signupMutation,
  };
};
