import { useQuery } from "@tanstack/react-query";
import { FetchError } from "../../../../../pkg/api/util/fetchError";
import { WeeklyReport } from "../../../../../api/weeklyReport/model";
import { createFactory } from "../../../../../api/weeklyReport/factory";

export const useQueryWeeklyReports = () => {
  const weeklyReportFactory = createFactory();
  return useQuery<WeeklyReport[], FetchError>({
    queryKey: ["weeklyReports"],
    queryFn: async () => {
      const weeklyReports = await weeklyReportFactory.listWeeklyReports();
      return weeklyReports;
    },
    staleTime: Infinity,
  });
};
