import { useMutation } from "@tanstack/react-query";
import { createFactory } from "../../../../../../api/tag/factory";
import type { Tag } from "../../../../../../api/tag/model";
import type { CreateTagParams, UpdateTagParams } from "../../../../../../api/tag/type";
import { queryClient } from "../../../../../../api/client/queryClient";
import type { FetchError } from "../../../../../../api/util/fetchError";
import { notifyWithToast } from "../../../../../../utils/toast";

export const useMutateTag = () => {
  const tagFactory = createFactory();

  const createTagMutation = useMutation({
    mutationFn: async (params: CreateTagParams) => {
      return await tagFactory.createTag(params);
    },
    onSuccess: (data) => {
      const tagList = queryClient.getQueryData<Tag[]>(["tags"]);
      if (tagList) {
        queryClient.setQueryData<Tag[]>(["tags"], [...tagList, data]);
      }
      notifyWithToast({ status: "success", msg: "タグを作成しました。" });
    },
    onError: (err: FetchError) => {
      notifyWithToast({ status: "error", msg: "処理に失敗しました。" });
      console.log(err);
    },
  });

  const updateTagMutation = useMutation({
    mutationFn: async (params: UpdateTagParams) => {
      return await createFactory().updateTag(params);
    },
    onSuccess: (data) => {
      const tagList = queryClient.getQueryData<Tag[]>(["tags"]);
      if (tagList) {
        queryClient.setQueryData<Tag[]>(
          ["tags"],
          tagList.map((tag) => (tag.id === data.id ? data : tag)),
        );
      }
      notifyWithToast({ status: "success", msg: "タグを更新しました。" });
    },
    onError: (err: FetchError) => {
      notifyWithToast({ status: "error", msg: "処理に失敗しました。" });
      console.log(err);
    },
  });

  const deleteTagMutation = useMutation({
    mutationFn: async (params: { id: string }) => {
      return await createFactory().deleteTag(params);
    },
    onSuccess: (_, variables) => {
      const tagList = queryClient.getQueryData<Tag[]>(["tags"]);
      if (tagList) {
        queryClient.setQueryData<Tag[]>(
          ["tags"],
          tagList.filter((tag) => tag.id !== variables.id),
        );
      }
      notifyWithToast({ status: "success", msg: "タグを削除しました。" });
    },
    onError: (err: FetchError) => {
      notifyWithToast({ status: "error", msg: "処理に失敗しました。" });
      console.log(err);
    },
  });

  return {
    createTagMutation,
    updateTagMutation,
    deleteTagMutation,
  };
};
