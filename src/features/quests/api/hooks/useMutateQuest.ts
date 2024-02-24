import { useMutation } from "@tanstack/react-query";
import { questFactory } from "../factory";
import { queryClient } from "../../../../pkg/api/client/queryClient";
import { Quest } from "../model";
import { notifyFailed, notifySuccess } from "../../../../pkg/ui/toast";
import { FetchError } from "../../../../pkg/api/util/fetchError";
import { FinishParams, StartParams } from "../types";

export const useMutateQuest = () => {
  const startQuestMutation = useMutation({
    mutationFn: async (params: StartParams) => {
      return await questFactory().startQuest(params);
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
    mutationFn: async (params: FinishParams) => {
      return await questFactory().finishQuest(params);
    },
    onSuccess: (data) => {
      const questList = queryClient.getQueryData<Quest[]>(["quests"]);
      if (questList) {
        queryClient.setQueryData<Quest[]>(
          ["quests"],
          questList.map((quest) => (quest.id === data.id ? data : quest)),
        );
      }
      notifySuccess("クエストを終了しました。");
    },
    onError: (err: FetchError) => {
      notifyFailed("処理に失敗しました。");
      console.log(err);
    },
  });

  return {
    startQuestMutation,
    finishQuestMutation,
  };
};
