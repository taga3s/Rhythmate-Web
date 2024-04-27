export type ListResponse = {
  status: string;
  weeklyReports: {
    id: string;
    completed_quests: number;
    failed_quests: number;
    completed_percentage: number;
    streak_days: number;
    completed_quests_each_day: number[];
    failed_quests_each_day: number[];
    start_date: string;
    end_date: string;
    feedback: string;
    user_id: string;
  }[];
};

export type GenerateFeedBackParams = {
  weeklyReportId: string;
};

export type GenerateFeedBackRequest = {
  weeklyReportId: string;
};

export type GenerateFeedBackResponse = {
  status: string;
  feedBack: string;
};
