import { useMutation } from "@tanstack/react-query";
import { FetchError } from "../../../../pkg/api/util/fetchError";
import { notifyFailed, notifySuccess } from "../../../../pkg/ui/toast";
import { SignupParams } from "../../../../api/user/types";
import { createFactory } from "../../../../api/user/factory";

export const useMutateUser = () => {
  const userFactory = createFactory();

  const signupMutation = useMutation({
    mutationFn: async (params: SignupParams) => {
      return await userFactory.signup(params);
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
