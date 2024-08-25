import { useMutation } from "@tanstack/react-query";
import { createFactory } from "../../../../../api/badge/factory";
import type { Badge } from "../../../../../api/badge/model";
import type { AchieveBadgeParams, PinBadgeParams } from "../../../../../api/badge/type";
import { queryClient } from "../../../../../api/client/queryClient";
import type { FetchError } from "../../../../../api/util/fetchError";
import { notifyWithToast } from "../../../../../utils/toast";

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
      notifyWithToast({ status: "success", msg: "新しいバッジを取得しました。" });
    },
    onError: (err: FetchError) => {
      notifyWithToast({ status: "error", msg: "処理に失敗しました。" });
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
      notifyWithToast({ status: "success", msg: "バッジをピン留めしました。" });
    },
    onError: (err: FetchError) => {
      notifyWithToast({ status: "error", msg: "処理に失敗しました。" });
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
      notifyWithToast({ status: "success", msg: "バッジのピン留めを解除しました。" });
    },
    onError: (err: FetchError) => {
      notifyWithToast({ status: "error", msg: "処理に失敗しました。" });
      console.log(err);
    },
  });

  return {
    achieveBadgeMutation,
    pinBadgeMutation,
    unpinBadgeMutation,
  };
};
