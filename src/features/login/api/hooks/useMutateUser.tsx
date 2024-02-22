import { useMutation } from "@tanstack/react-query";
import { LoginParams } from "../types";
import { userFactory } from "../factory";
import { FetchError } from "../../../../pkg/api/util/fetchError";
import { notify } from "../../../../pkg/ui/toast";
import { useNavigate } from "@tanstack/react-router";

export const useMutateUser = () => {
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: async (params: LoginParams) => {
      return await userFactory().login(params);
    },
    onSuccess: () => {
      notify("サインアップに成功しました。");
      navigate({ to: "/quests" });
    },
    onError: (err: FetchError) => {
      notify("サインアップに失敗しました。");
      console.log(err);
    },
  });

  return {
    loginMutation,
  };
};
