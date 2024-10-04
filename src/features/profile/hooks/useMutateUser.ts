import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { createFactory } from "../../../api/user/factory";
import type { User } from "../../../api/user/model";
import type { UpdateLoginUserParams } from "../../../api/user/types";
import { queryClient } from "../../../api/client/queryClient";
import type { FetchError } from "../../../api/util/fetchError";
import { notifyWithToast } from "../../../utils/toast";
import { useCookies } from "react-cookie";

export const useMutateUser = () => {
  const userFactory = createFactory();
  const navigate = useNavigate();
  const [, , removeCookie] = useCookies(["rtoken"]);

  const updateUserMutation = useMutation({
    mutationFn: async (params: UpdateLoginUserParams) => {
      return await userFactory.updateLoginUser(params);
    },
    onSuccess: (data) => {
      const loginUser = queryClient.getQueryData<User>(["user"]);
      if (loginUser) {
        queryClient.setQueryData(["user"], {
          name: data.name,
          email: loginUser.email,
          level: loginUser.level,
          exp: loginUser.exp,
          imageUrl: data.imageUrl,
        });
      }
      notifyWithToast({ status: "success", msg: "ユーザー情報を更新しました。" });
    },
    onError: (err: FetchError) => {
      notifyWithToast({ status: "error", msg: "処理に失敗しました。時間を空けて再度お試しください。" });
      console.log(err);
    },
  });
  const logoutMutation = useMutation({
    mutationFn: async () => await userFactory.logout(),
    onSuccess: () => {
      queryClient.clear();
      removeCookie("rtoken");
      navigate({ to: "/" });
    },
    onError: (err: FetchError) => {
      notifyWithToast({ status: "error", msg: "処理に失敗しました。時間を空けて再度お試しください。" });
      console.log(err);
    },
  });
  const deleteUserMutation = useMutation({
    mutationFn: async () => await userFactory.deleteLoginUser(),
    onSuccess: () => {
      queryClient.clear();
      navigate({ to: "/" });
    },
    onError: (err: FetchError) => {
      notifyWithToast({ status: "error", msg: "処理に失敗しました。時間を空けて再度お試しください。" });
      console.log(err);
    },
  });
  return {
    updateUserMutation,
    logoutMutation,
    deleteUserMutation,
  };
};
