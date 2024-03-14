import { useQuery } from "@tanstack/react-query";
import { FetchError } from "../../../../../pkg/api/util/fetchError";
import { WeeklyReport } from "../../../../../api/weeklyReport/model";
import { createFactory } from "../../../../../api/weeklyReport/factory";

export const useQueryListWeeklyReports = () => {
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

export const useQueryWeeklyReportSummary = () => {
  const weeklyReportFactory = createFactory();
  return useQuery<string, FetchError>({
    queryKey: ["weeklyReportSummary"],
    queryFn: async () => {
      const summary = await weeklyReportFactory.getWeeklyReportSummary();
      return summary;
    },
    staleTime: Infinity,
  });
};
