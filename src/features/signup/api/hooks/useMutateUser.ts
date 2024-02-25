import { useMutation } from "@tanstack/react-query";
import { SignupParams } from "../types";
import { FetchError } from "../../../../pkg/api/util/fetchError";
import { userFactory } from "../factory";
import { notifyFailed, notifySuccess } from "../../../../pkg/ui/toast";

export const useMutateUser = () => {
  const signupMutation = useMutation({
    mutationFn: async (params: SignupParams) => {
      return await userFactory().signup(params);
    },
    onSuccess: () => {
      notifySuccess("サインアップに成功しました。");
    },
    onError: (err: FetchError) => {
      notifyFailed("サインアップに失敗しました。");
      console.log(err);
    },
  });
  return {
    signupMutation,
  };
};
