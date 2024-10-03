import { useSuspenseQuery } from "@tanstack/react-query";
import { createFactory } from "../../../api/weeklyReport/factory";
import type { WeeklyReport } from "../../../api/weeklyReport/model";
import type { FetchError } from "../../../api/util/fetchError";

export const useQueryWeeklyReports = () => {
  const weeklyReportFactory = createFactory();
  return useSuspenseQuery<WeeklyReport[], FetchError>({
    queryKey: ["weeklyReports"],
    queryFn: async () => {
      const weeklyReports = await weeklyReportFactory.listWeeklyReports();
      return weeklyReports;
    },
    staleTime: Number.POSITIVE_INFINITY,
  });
};
