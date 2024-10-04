import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { createFactory } from "../../../api/user/factory";
import type { AuthParams } from "../../../api/user/types";
import type { FetchError } from "../../../api/util/fetchError";
import { notifyWithToast } from "../../../utils/toast";
import { useCookies } from "react-cookie";

export const useMutateUser = () => {
  const userFactory = createFactory();
  const navigate = useNavigate();
  const [_, setCookie] = useCookies(["rtoken"]);

  const authMutation = useMutation({
    mutationFn: async (params: AuthParams) => {
      return await userFactory.auth(params);
    },
    onSuccess: (value) => {
      setCookie("rtoken", value.rtoken, { path: "/", maxAge: 60 * 60 * 24 * 7 });
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
