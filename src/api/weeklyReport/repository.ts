import { apiClient } from "../../pkg/api/client/apiClient";
import { ListResponse, SummaryResponse } from "./types";

export interface WeeklyReportsRepository {
  list: () => Promise<ListResponse>;
  getSummary: () => Promise<SummaryResponse>;
}

const list: WeeklyReportsRepository["list"] = async () => {
  const response = await apiClient.get("/weekly-reports");
  return response;
};

const getSummary: WeeklyReportsRepository["getSummary"] = async () => {
  const response = await apiClient.get("/weekly-reports/summarize");
  return response;
};

export const weeklyReportsRepository: WeeklyReportsRepository = {
  list,
  getSummary,
};
