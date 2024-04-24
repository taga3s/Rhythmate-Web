import { apiClient } from "../../pkg/api/client/apiClient";
import type {
  GenerateFeedBackRequest,
  GenerateFeedBackResponse,
  GetFeedBackParams,
  GetFeedBackRequest,
  GetFeedBackResponse,
  ListResponse,
} from "./types";

export interface WeeklyReportsRepository {
  list: () => Promise<ListResponse>;
  getFeedBack: (params: GetFeedBackRequest) => Promise<GetFeedBackResponse>;
  generateFeedBack: (params: GenerateFeedBackRequest) => Promise<GenerateFeedBackResponse>;
}

const list: WeeklyReportsRepository["list"] = async () => {
  const response = await apiClient.get("/weekly-reports");
  return response;
};

const getFeedBack: WeeklyReportsRepository["getFeedBack"] = async (params: GetFeedBackParams) => {
  const response = await apiClient.get(`/weekly-reports/feedback/${params.weeklyReportId}`);
  return response;
};

const generateFeedBack: WeeklyReportsRepository["generateFeedBack"] = async (params: GetFeedBackParams) => {
  const response = await apiClient.post(`/weekly-reports/feedback/${params.weeklyReportId}`);
  return response;
};

export const weeklyReportsRepository: WeeklyReportsRepository = {
  list,
  getFeedBack,
  generateFeedBack,
};
