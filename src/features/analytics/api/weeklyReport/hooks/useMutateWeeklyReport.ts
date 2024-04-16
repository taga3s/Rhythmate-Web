import { useMutation } from "@tanstack/react-query";
import { notifyFailed, notifySuccess } from "../../../../../pkg/ui/toast";
import { createFactory } from "../../../../../api/weeklyReport/factory";
import { FetchError } from "../../../../../pkg/api/util/fetchError";

export const useMutateWeeklyReport = () => {
  const weeklyReportFactory = createFactory();

  const generateFeedBackMutation = useMutation({
    mutationFn: async (params: { weeklyReportId: string }) => {
      return await weeklyReportFactory.generateWeeklyReportFeedBack(params);
    },
    onSuccess: () => {
      notifySuccess("フィードバックを生成しました。");
    },
    onError: (err: FetchError) => {
      notifyFailed("処理に失敗しました。");
      console.log(err);
    },
  });

  return {
    generateFeedBackMutation,
  };
};
