import { apiClient } from "../../pkg/api/client/apiClient";
import type { GenerateFeedBackRequest, GenerateFeedBackResponse, GetFeedBackParams, ListResponse } from "./types";

export interface WeeklyReportsRepository {
  list: () => Promise<ListResponse>;
  generateFeedBack: (params: GenerateFeedBackRequest) => Promise<GenerateFeedBackResponse>;
}

const list: WeeklyReportsRepository["list"] = async () => {
  const response = await apiClient.get("/weekly-reports");
  return response;
};

const generateFeedBack: WeeklyReportsRepository["generateFeedBack"] = async (params: GetFeedBackParams) => {
  const response = await apiClient.post(`/weekly-reports/feedback/${params.weeklyReportId}`);
  return response;
};

export const weeklyReportsRepository: WeeklyReportsRepository = {
  list,
  generateFeedBack,
};
