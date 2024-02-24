import { useQuery } from "@tanstack/react-query";
import { WeeklyReport } from "../model";
import { FetchError } from "../../../../pkg/api/util/fetchError";
import { createFactory } from "../factory";

export const useQueryWeeklyReport = () => {
  return useQuery<WeeklyReport[], FetchError>({
    queryKey: ["weeklyReports"],
    queryFn: async () => {
      const weeklyReports = await createFactory().getWeeklyReports();
      return weeklyReports;
    },
    staleTime: Infinity,
  });
};
