import { useMutation } from "@tanstack/react-query";
import { createFactory } from "../../../api/quest/factory";
import type { Quest } from "../../../api/quest/model";
import type { FinishQuestParams, ForceFinishQuestParams, StartQuestParams } from "../../../api/quest/types";
import { queryClient } from "../../../api/client/queryClient";
import type { FetchError } from "../../../api/util/fetchError";
import { notifyWithToast } from "../../common/utils";

export const useMutateQuest = () => {
  const questFactory = createFactory();

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
      notifyWithToast({ status: "success", msg: "クエストを開始しました。" });
    },
    onError: (err: FetchError) => {
      notifyWithToast({ status: "error", msg: "処理に失敗しました。時間を空けて再度お試しください。" });
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
      // refetch all queries to sync data
      queryClient.refetchQueries({});

      notifyWithToast({ status: "success", msg: "クエストを終了しました。" });
    },
    onError: (err: FetchError) => {
      notifyWithToast({ status: "error", msg: "処理に失敗しました。時間を空けて再度お試しください。" });
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
      // refetch all queries to sync data
      queryClient.refetchQueries({});

      notifyWithToast({ status: "success", msg: "クエストを強制終了しました。" });
    },
    onError: (err: FetchError) => {
      notifyWithToast({ status: "error", msg: "処理に失敗しました。時間を空けて再度お試しください。" });
      console.log(err);
    },
  });

  return {
    startQuestMutation,
    finishQuestMutation,
    forceFinishQuestMutation,
  };
};
