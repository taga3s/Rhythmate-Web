import { useMutation } from "@tanstack/react-query";
import { AchieveBadgeParams, PinBadgeParams } from "../../../../../../api/badge/type";
import { createFactory } from "../../../../../../api/badge/factory";
import { queryClient } from "../../../../../../pkg/api/client/queryClient";
import { Badge } from "../../../../../../api/badge/model";
import { notifyFailed, notifySuccess } from "../../../../../../pkg/ui/toast";
import { FetchError } from "../../../../../../pkg/api/util/fetchError";

export const useMutateBadge = () => {
  const badgeFactory = createFactory();

  const achieveBadgeMutation = useMutation({
    mutationFn: async (params: AchieveBadgeParams) => {
      return await badgeFactory.achieveBadge(params);
    },
    onSuccess: (data) => {
      const badgeList = queryClient.getQueryData<Badge[]>(["badges"]);
      if (badgeList) {
        queryClient.setQueryData<Badge[]>(
          ["badges"],
          badgeList.map((badge) => (badge.id === data.id ? data : badge)),
        );
      }
      console.log(queryClient.getQueryData(["badges"]));
      notifySuccess("バッジを取得しました。");
    },
    onError: (err: FetchError) => {
      notifyFailed("処理に失敗しました。");
      console.log(err);
    },
  });

  const pinBadgeMutation = useMutation({
    mutationFn: async (params: PinBadgeParams) => {
      return await badgeFactory.pinBadge(params);
    },
    onSuccess: (data) => {
      const badgeList = queryClient.getQueryData<Badge[]>(["badges"]);
      if (badgeList) {
        queryClient.setQueryData<Badge[]>(
          ["badges"],
          badgeList.map((badge) => (badge.id === data.id ? data : badge)),
        );
      }
      notifySuccess("バッジをピン留めしました。");
    },
    onError: (err: FetchError) => {
      notifyFailed("処理に失敗しました。");
      console.log(err);
    },
  });

  const unpinBadgeMutation = useMutation({
    mutationFn: async (params: PinBadgeParams) => {
      return await badgeFactory.unpinBadge(params);
    },
    onSuccess: (data) => {
      const badgeList = queryClient.getQueryData<Badge[]>(["badges"]);
      if (badgeList) {
        queryClient.setQueryData<Badge[]>(
          ["badges"],
          badgeList.map((badge) => (badge.id === data.id ? data : badge)),
        );
      }
      notifySuccess("バッジのピン留めを解除しました。");
    },
    onError: (err: FetchError) => {
      notifyFailed("処理に失敗しました。");
      console.log(err);
    },
  });

  return {
    achieveBadgeMutation,
    pinBadgeMutation,
    unpinBadgeMutation,
  };
};
