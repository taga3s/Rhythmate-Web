import { useQuery } from "@tanstack/react-query";
import { WeeklyReport } from "../model";
import { FetchError } from "../../../../pkg/api/util/fetchError";
import { createFactory } from "../factory";

export const useQueryWeeklyReports = () => {
  return useQuery<WeeklyReport[], FetchError>({
    queryKey: ["weeklyReports"],
    queryFn: async () => {
      const weeklyReports = await createFactory().listWeeklyReports();
      return weeklyReports;
    },
    staleTime: Infinity,
  });
};
