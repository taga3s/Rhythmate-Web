import { apiClient } from "../../pkg/api/client/apiClient";
import { ListResponse, GetSummaryRequest, GetSummaryResponse } from "./types";

export interface WeeklyReportsRepository {
  list: () => Promise<ListResponse>;
  summarize: (params: GetSummaryRequest) => Promise<GetSummaryResponse>;
}

const list: WeeklyReportsRepository["list"] = async () => {
  const response = await apiClient.get("/weekly-reports");
  return response;
};

const summarize: WeeklyReportsRepository["summarize"] = async (params: GetSummaryRequest) => {
  const response = await apiClient.get(`/weekly-reports/summarize/${params.weeklyReportIndex}`);
  return response;
};

export const weeklyReportsRepository: WeeklyReportsRepository = {
  list,
  summarize,
};
