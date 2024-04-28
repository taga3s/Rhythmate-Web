import { type WeeklyReport, toWeeklyReport } from "./model";
import { weeklyReportsRepository } from "./repository";
import type { GenerateFeedBackParams } from "./types";

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
    generateWeeklyReportFeedBack: async (generateFeedBackParams: GenerateFeedBackParams) => {
      const response = await repository.generateFeedBack({
        weeklyReportId: generateFeedBackParams.weeklyReportId,
      });
      return response.feedBack;
    },
  };
};
