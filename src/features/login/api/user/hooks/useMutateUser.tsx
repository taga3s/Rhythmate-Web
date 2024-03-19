import { useMutation } from "@tanstack/react-query";
import { FetchError } from "../../../../../pkg/api/util/fetchError";
import { notifyFailed, notifySuccess } from "../../../../../pkg/ui/toast";
import { createFactory } from "../../../../../api/user/factory";
import { AuthParams } from "../../../../../api/user/types";

export const useMutateUser = () => {
  const userFactory = createFactory();

  const authMutation = useMutation({
    mutationFn: async (params: AuthParams) => {
      return await userFactory.auth(params);
    },
    onSuccess: () => {
      notifySuccess("ログインに成功しました。");
    },
    onError: (err: FetchError) => {
      notifyFailed("ログインに失敗しました。");
      console.log(err);
    },
  });

  return {
    authMutation,
  };
};
