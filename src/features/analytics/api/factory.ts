import { WeeklyReport, toWeeklyReport } from "./model";
import { weeklyReportsRepository } from "./repository";

export const createFactory = () => {
  const repository = weeklyReportsRepository;

  return {
    getWeeklyReports: async () => {
      const response = await repository.get();
      const weeklyReportList: WeeklyReport[] = [];
      response.weeklyReports.forEach((value) => {
        const weeklyReport = toWeeklyReport(value);
        weeklyReportList.push(weeklyReport);
      });
      return weeklyReportList;
    },
  };
};
