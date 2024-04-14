import { WeeklyReport, toWeeklyReport } from "./model";
import { weeklyReportsRepository } from "./repository";
import { GetFeedBackParams } from "./types";

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
    getWeeklyReportSummary: async (getFeedBackParams: GetFeedBackParams) => {
      const response = await repository.getFeedBack({ weeklyReportId: getFeedBackParams.weeklyReportId })
      return response.feedBack;
    },
  };
};
