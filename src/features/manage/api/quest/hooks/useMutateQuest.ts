import { useMutation } from "@tanstack/react-query";
import { createFactory } from "../../../../../api/quest/factory";
import type { Quest } from "../../../../../api/quest/model";
import type { CreateQuestParams, DeleteQuestParams, UpdateQuestParams } from "../../../../../api/quest/types";
import { queryClient } from "../../../../../pkg/api/client/queryClient";
import type { FetchError } from "../../../../../pkg/api/util/fetchError";
import { notifyFailed, notifySuccess } from "../../../../../pkg/ui/toast";

export const useMutateQuest = () => {
  const questFactory = createFactory();

  const createQuestMutation = useMutation({
    mutationFn: async (params: CreateQuestParams) => {
      return await questFactory.createQuest(params);
    },
    onSuccess: (data) => {
      const questList = queryClient.getQueryData<Quest[]>(["quests"]);
      if (questList) {
        queryClient.setQueryData<Quest[]>(["quests"], [...questList, data]);
      }
      notifySuccess("クエストを作成しました。");
    },
    onError: (err: FetchError) => {
      notifyFailed("処理に失敗しました。");
      console.log(err);
    },
  });

  const updateQuestMutation = useMutation({
    mutationFn: async (params: UpdateQuestParams) => {
      return await createFactory().updateQuest(params);
    },
    onSuccess: (data) => {
      const questList = queryClient.getQueryData<Quest[]>(["quests"]);
      if (questList) {
        queryClient.setQueryData<Quest[]>(
          ["quests"],
          questList.map((quest) => (quest.id === data.id ? data : quest)),
        );
      }
      notifySuccess("クエストを更新しました。");
    },
    onError: (err: FetchError) => {
      notifyFailed("処理に失敗しました。");
      console.log(err);
    },
  });

  const deleteQuestMutation = useMutation({
    mutationFn: async (params: DeleteQuestParams) => {
      return await createFactory().deleteQuest(params);
    },
    onSuccess: (_, variables) => {
      const questList = queryClient.getQueryData<Quest[]>(["quests"]);
      if (questList) {
        queryClient.setQueryData<Quest[]>(
          ["quests"],
          questList.filter((quest) => quest.id !== variables.id),
        );
      }
      notifySuccess("クエストを削除しました。");
    },
    onError: (err: FetchError) => {
      notifyFailed("処理に失敗しました。");
      console.log(err);
    },
  });

  return {
    createQuestMutation,
    updateQuestMutation,
    deleteQuestMutation,
  };
};
