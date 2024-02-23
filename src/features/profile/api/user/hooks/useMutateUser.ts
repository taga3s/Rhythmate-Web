import { useMutation } from "@tanstack/react-query";
import { UpdateLoginUserParams } from "../types";
import { userFactory } from "../factory";
import { FetchError } from "../../../../../pkg/api/util/fetchError";
import { queryClient } from "../../../../../pkg/api/client/queryClient";
import { User } from "../model";
import { useNavigate } from "@tanstack/react-router";
import { notifyFailed, notifySuccess } from "../../../../../pkg/ui/toast";

export const useMutateUser = () => {
  const navigate = useNavigate();

  const updateUserMutation = useMutation({
    mutationFn: async (params: UpdateLoginUserParams) => {
      return await userFactory().updateLoginUser(params);
    },
    onSuccess: (data) => {
      const loginUser = queryClient.getQueryData<User>(["user"]);
      if (loginUser) {
        queryClient.setQueryData(["user"], {
          name: data.name,
          email: loginUser.email,
          level: loginUser.level,
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
    mutationFn: async () => await userFactory().logout(),
    onSuccess: () => {
      navigate({ to: "/" });
    },
    onError: (err: FetchError) => {
      notifyFailed("ログアウトに失敗しました。");
      console.log(err);
    },
  });
  return {
    updateUserMutation,
    logoutMutation,
  };
};
