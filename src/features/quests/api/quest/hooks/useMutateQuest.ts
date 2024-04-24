import { useMutation } from "@tanstack/react-query";
import { createFactory } from "../../../../../api/quest/factory";
import { queryClient } from "../../../../../pkg/api/client/queryClient";
import { Quest } from "../../../../../api/quest/model";
import { notifyFailed, notifySuccess } from "../../../../../pkg/ui/toast";
import { FetchError } from "../../../../../pkg/api/util/fetchError";
import { FinishQuestParams, ForceFinishQuestParams, StartQuestParams } from "../../../../../api/quest/types";
import { useQueryLoginUser } from "../../../../profile/api/user/hooks/useQueryUser";
import { useQueryWeeklyReports } from "../../../../analytics/api/weeklyReport/hooks/useQueryWeeklyReport";
import { useQueryBadgeList } from "../../../../profile/badges/api/badge/hooks/useQueryBadge";

export const useMutateQuest = () => {
  const questFactory = createFactory();

  const { refetch: refetchLoginUser } = useQueryLoginUser();
  const { refetch: refetchWeeklyReports } = useQueryWeeklyReports();
  const { refetch: refetchBadgeList } = useQueryBadgeList();

  const startQuestMutation = useMutation({
    mutationFn: async (params: StartQuestParams) => {
      return await questFactory.startQuest(params);
    },
    onSuccess: (data) => {
      const questList = queryClient.getQueryData<Quest[]>(["quests"]);
      if (questList) {
        queryClient.setQueryData<Quest[]>(
          ["quests"],
          questList.map((quest) => (quest.id === data.id ? data : quest)),
        );
      }
      notifySuccess("クエストを開始しました。");
    },
    onError: (err: FetchError) => {
      notifyFailed("処理に失敗しました。");
      console.log(err);
    },
  });

  const finishQuestMutation = useMutation({
    mutationFn: async (params: FinishQuestParams) => {
      return await questFactory.finishQuest(params);
    },
    onSuccess: (data) => {
      const questList = queryClient.getQueryData<Quest[]>(["quests"]);
      if (questList) {
        queryClient.setQueryData<Quest[]>(
          ["quests"],
          questList.map((quest) => (quest.id === data.id ? data : quest)),
        );
      }
      // 一緒に再取得してしまう
      refetchLoginUser();
      refetchWeeklyReports();
      refetchBadgeList();
      notifySuccess("クエストを終了しました。");
    },
    onError: (err: FetchError) => {
      notifyFailed("処理に失敗しました。");
      console.log(err);
    },
  });

  const forceFinishQuestMutation = useMutation({
    mutationFn: async (params: ForceFinishQuestParams) => {
      return await questFactory.forceFinishQuest(params);
    },
    onSuccess: (data) => {
      const questList = queryClient.getQueryData<Quest[]>(["quests"]);
      if (questList) {
        queryClient.setQueryData<Quest[]>(
          ["quests"],
          questList.map((quest) => (quest.id === data.id ? data : quest)),
        );
      }
      // 一緒に再取得してしまう
      refetchLoginUser();
      refetchWeeklyReports();
      refetchBadgeList();
      notifySuccess("クエストを強制終了しました。");
    },
    onError: (err: FetchError) => {
      notifyFailed("処理に失敗しました。");
      console.log(err);
    },
  });

  return {
    startQuestMutation,
    finishQuestMutation,
    forceFinishQuestMutation,
  };
};
