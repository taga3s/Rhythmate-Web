import { WeeklyReport, toWeeklyReport } from "./model";
import { weeklyReportsRepository } from "./repository";
import { GetSummaryParams } from "./types";

export const createFactory = () => {
  const repository = weeklyReportsRepository;

  return {
    listWeeklyReports: async () => {
      const response = await repository.list();
      const weeklyReports: WeeklyReport[] = response.weeklyReports.map((weeklyReport) => {
        return toWeeklyReport(weeklyReport);
      });
      return weeklyReports;
    },
    getWeeklyReportSummary: async (getSummaryParams: GetSummaryParams) => {
      const response = await repository.summarize(getSummaryParams);
      return response.summary;
    },
  };
};
