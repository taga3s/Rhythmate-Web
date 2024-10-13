import type * as schemaHelper from "../../../submodules/service/src/pkg/schema/schemaHelper";

export type ListWeeklyReportsResponse = schemaHelper.ResponseData<"/weekly-reports", "get">;

export type GenerateFeedBackParams = schemaHelper.RequestData<"/weekly-reports/feedback/:weeklyReportId", "post">;

export type GenerateFeedBackRequest = schemaHelper.RequestData<"/weekly-reports/feedback/:weeklyReportId", "post">;

export type GenerateFeedBackResponse = schemaHelper.ResponseData<"/weekly-reports/feedback/:weeklyReportId", "post">;
