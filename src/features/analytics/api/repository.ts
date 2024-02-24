import { apiClient } from "../../../pkg/api/client/apiClient";
import { GetResponse } from "./types";

export interface WeeklyReportsRepository {
  get: () => Promise<GetResponse>;
}

const get: WeeklyReportsRepository["get"] = async () => {
  const response = await apiClient.get("/weekly-reports");
  return response;
};

export const weeklyReportsRepository: WeeklyReportsRepository = {
  get,
};
