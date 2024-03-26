import { convertUTCtoJST } from "../../pkg/util/dayjs";

export type WeeklyReport = {
  id: string;
  completed_quests: number;
  failed_quests: number;
  completed_percentage: number;
  completed_days: number;
  completed_quests_each_day: number[];
  start_date: string;
  end_date: string;
};

export const toWeeklyReport = (obj: {
  id: string;
  completed_quests: number;
  failed_quests: number;
  completed_percentage: number;
  completed_days: number;
  completed_quests_each_day: number[];
  start_date: string;
  end_date: string;
}): WeeklyReport => {
  return {
    id: obj.id,
    completed_quests: obj.completed_quests,
    failed_quests: obj.failed_quests,
    completed_percentage: obj.completed_percentage,
    completed_days: obj.completed_days,
    completed_quests_each_day: obj.completed_quests_each_day,
    start_date: convertUTCtoJST(obj.start_date),
    end_date: convertUTCtoJST(obj.end_date),
  };
};
