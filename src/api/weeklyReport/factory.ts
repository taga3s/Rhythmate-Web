import { type WeeklyReport, toWeeklyReport } from "./model";
import { weeklyReportsRepository } from "./repository";
import type { GetFeedBackParams } from "./types";

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
    generateWeeklyReportFeedBack: async (getFeedBackParams: GetFeedBackParams) => {
      const response = await repository.generateFeedBack({
        weeklyReportId: getFeedBackParams.weeklyReportId,
      });
      return response.feedBack;
    },
  };
};
