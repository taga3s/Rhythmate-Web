import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { createFactory } from "../../../../../api/user/factory";
import type { AuthParams } from "../../../../../api/user/types";
import type { FetchError } from "../../../../../pkg/api/util/fetchError";
import { notifyWithToast } from "../../../../../pkg/ui/toast";

export const useMutateUser = () => {
  const userFactory = createFactory();
  const navigate = useNavigate();

  const authMutation = useMutation({
    mutationFn: async (params: AuthParams) => {
      return await userFactory.auth(params);
    },
    onSuccess: () => {
      notifyWithToast({ status: "success", msg: "ログインしました。" });
      navigate({ to: "/quests" });
    },
    onError: (err: FetchError) => {
      notifyWithToast({ status: "error", msg: "ログインに失敗しました。" });
      console.log(err);
    },
  });

  return {
    authMutation,
  };
};
