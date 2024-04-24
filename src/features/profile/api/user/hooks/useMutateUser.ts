import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { createFactory } from "../../../../../api/user/factory";
import type { User } from "../../../../../api/user/model";
import type { UpdateLoginUserParams } from "../../../../../api/user/types";
import { queryClient } from "../../../../../pkg/api/client/queryClient";
import type { FetchError } from "../../../../../pkg/api/util/fetchError";
import { notifyFailed, notifySuccess } from "../../../../../pkg/ui/toast";

export const useMutateUser = () => {
  const userFactory = createFactory();
  const navigate = useNavigate();

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
      notifySuccess("正常に更新しました。");
    },
    onError: (err: FetchError) => {
      notifyFailed("処理に失敗しました。");
      console.log(err);
    },
  });
  const logoutMutation = useMutation({
    mutationFn: async () => await userFactory.logout(),
    onSuccess: () => {
      queryClient.clear();
      navigate({ to: "/" });
    },
    onError: (err: FetchError) => {
      notifyFailed("ログアウトに失敗しました。");
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
      notifyFailed("アカウントの削除に失敗しました。");
      console.log(err);
    },
  });
  return {
    updateUserMutation,
    logoutMutation,
    deleteUserMutation,
  };
};
