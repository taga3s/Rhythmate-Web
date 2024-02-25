export type WeeklyReport = {
  id: string;
  completed_quests: number;
  failed_quests: number;
  completed_percentage: number;
  completed_days: number;
  completed_quests_each_day: number[];
  start_date: Date;
  end_date: Date;
};

export const toWeeklyReport = (obj: {
  id: string;
  completed_quests: number;
  failed_quests: number;
  completed_percentage: number;
  completed_days: number;
  completed_quests_each_day: number[];
  start_date: Date;
  end_date: Date;
}): WeeklyReport => {
  return {
    id: obj.id,
    completed_quests: obj.completed_quests,
    failed_quests: obj.failed_quests,
    completed_percentage: obj.completed_percentage,
    completed_days: obj.completed_days,
    completed_quests_each_day: obj.completed_quests_each_day,
    start_date: obj.start_date,
    end_date: obj.end_date,
  };
};
