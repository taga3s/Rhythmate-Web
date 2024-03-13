import { apiClient } from "../../pkg/api/client/apiClient";
import { ListResponse } from "./types";

export interface WeeklyReportsRepository {
  list: () => Promise<ListResponse>;
}

const list: WeeklyReportsRepository["list"] = async () => {
  const response = await apiClient.get("/weekly-reports");
  return response;
};

export const weeklyReportsRepository: WeeklyReportsRepository = {
  list,
};
