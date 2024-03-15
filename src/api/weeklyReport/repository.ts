import { apiClient } from "../../pkg/api/client/apiClient";
import { ListResponse, GetSummaryRequest, GetSummaryResponse } from "./types";

export interface WeeklyReportsRepository {
  list: () => Promise<ListResponse>;
  getSummary: (params: GetSummaryRequest) => Promise<GetSummaryResponse>;
}

const list: WeeklyReportsRepository["list"] = async () => {
  const response = await apiClient.get("/weekly-reports");
  return response;
};

const getSummary: WeeklyReportsRepository["getSummary"] = async (params: GetSummaryRequest) => {
  const response = await apiClient.get(`/weekly-reports/summarize/${params.weeklyReportIndex}`);
  return response;
};

export const weeklyReportsRepository: WeeklyReportsRepository = {
  list,
  getSummary,
};
