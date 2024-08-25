import { apiClient } from "../../api/client/apiClient";
import type { GenerateFeedBackRequest, GenerateFeedBackResponse, ListWeeklyReportsResponse } from "./types";

export interface WeeklyReportsRepository {
  list: () => Promise<ListWeeklyReportsResponse>;
  generateFeedBack: (params: GenerateFeedBackRequest) => Promise<GenerateFeedBackResponse>;
}

const list: WeeklyReportsRepository["list"] = async () => {
  const response = await apiClient.get("/weekly-reports");
  return response;
};

const generateFeedBack: WeeklyReportsRepository["generateFeedBack"] = async (params: GenerateFeedBackRequest) => {
  const response = await apiClient.post(`/weekly-reports/feedback/${params.weeklyReportId}`);
  return response;
};

export const weeklyReportsRepository: WeeklyReportsRepository = {
  list,
  generateFeedBack,
};
