import { useQuery } from "@tanstack/react-query";
import { FetchError } from "../../../../../pkg/api/util/fetchError";
import { WeeklyReport } from "../../../../../api/weeklyReport/model";
import { createFactory } from "../../../../../api/weeklyReport/factory";

export const useQueryWeeklyReports = () => {
  const weeklyReportFactory = createFactory();
  return useQuery<WeeklyReport[], FetchError>({
    queryKey: ["listWeeklyReports"],
    queryFn: async () => {
      const weeklyReports = await weeklyReportFactory.listWeeklyReports();
      return weeklyReports;
    },
    staleTime: Infinity,
  });
};

export const useQueryWeeklyReportSummary = (weeklyReportId: string) => {
  const weeklyReportFactory = createFactory();
  return useQuery<string, FetchError>({
    queryKey: [`weeklyReportFeedBack-${weeklyReportId}`],
    queryFn: async () => {
      const feedBack = await weeklyReportFactory.getWeeklyReportSummary({ weeklyReportId: weeklyReportId });
      return feedBack;
    },
    staleTime: Infinity,
  });
};
