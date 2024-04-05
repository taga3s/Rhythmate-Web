import { useMutation } from "@tanstack/react-query";
import { createFactory } from "../../../../../../api/tag/factory"
import { Tag } from "../../../../../../api/tag/model";
import { CreateTagParams, UpdateTagParams } from "../../../../../../api/tag/type";
import { queryClient } from "../../../../../../pkg/api/client/queryClient";
import { FetchError } from "../../../../../../pkg/api/util/fetchError";
import { notifyFailed, notifySuccess } from "../../../../../../pkg/ui/toast";

export const useMutateTag = () => {
  const tagFactory = createFactory();

  const createTagMutation = useMutation({
    mutationFn: async (params: CreateTagParams) => {
      return await tagFactory.createTag(params);
    },
    onSuccess: (data) => {
      const tagList = queryClient.getQueryData<Tag[]>(["tags"]);
      if (tagList) {
        queryClient.setQueryData<Tag[]>(["tags"], [data, ...tagList]);
      }
      notifySuccess("タグを作成しました。");
    },
    onError: (err: FetchError) => {
      notifyFailed("処理に失敗しました。");
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
      notifySuccess("タグを更新しました。");
    },
    onError: (err: FetchError) => {
      notifyFailed("処理に失敗しました。");
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
      notifySuccess("タグを削除しました。");
    },
    onError: (err: FetchError) => {
      notifyFailed("処理に失敗しました。");
      console.log(err);
    },
  });

  return { 
    createTagMutation, 
    updateTagMutation, 
    deleteTagMutation,
  };
}