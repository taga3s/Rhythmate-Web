import { apiClient } from "../../pkg/api/client/apiClient";
import { ListResponse, GetFeedBackParams, GetFeedBackRequest, GetFeedBackResponse} from "./types";

export interface WeeklyReportsRepository {
  list: () => Promise<ListResponse>;
  getFeedBack: (params: GetFeedBackRequest) => Promise<GetFeedBackResponse>;
}

const list: WeeklyReportsRepository["list"] = async () => {
  const response = await apiClient.get("/weekly-reports");
  return response;
};

const getFeedBack: WeeklyReportsRepository["getFeedBack"] = async (params: GetFeedBackParams) => {
  const response = await apiClient.get(`/weekly-reports/feedback/${params.weeklyReportId}`);
  return response;
};

export const weeklyReportsRepository: WeeklyReportsRepository = {
  list,
  getFeedBack,
};
