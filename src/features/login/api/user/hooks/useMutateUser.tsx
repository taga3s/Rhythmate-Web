import { useMutation } from "@tanstack/react-query";
import { FetchError } from "../../../../../pkg/api/util/fetchError";
import { notifyFailed, notifySuccess } from "../../../../../pkg/ui/toast";
import { useNavigate } from "@tanstack/react-router";
import { LoginParams } from "../../../../../api/user/types";
import { createFactory } from "../../../../../api/user/factory";

export const useMutateUser = () => {
  const userFactory = createFactory();
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: async (params: LoginParams) => {
      return await userFactory.login(params);
    },
    onSuccess: () => {
      notifySuccess("ログインに成功しました。");
      navigate({ to: "/quests" });
    },
    onError: (err: FetchError) => {
      notifyFailed("ログインに失敗しました。");
      console.log(err);
    },
  });

  return {
    loginMutation,
  };
};
