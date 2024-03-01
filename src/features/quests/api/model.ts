import { formatDate, now } from "../../../pkg/util/dayjs";
import { QuestState } from "./types";

export type Quest = {
  id: string;
  title: string;
  description: string;
  startsAt: string;
  startedAt: string;
  minutes: number;
  // TODO
  tag_id: string;
  difficulty: string;
  state: QuestState;
  isSucceeded: boolean;
  startDate: Date;
  endDate: Date;
  dates: string[];
  weeklyFrequency: number;
  weeklyCompletionCount: number;
  continuationLevel: number;
  totalCompletionCount?: number;
};

export const toQuest = (obj: {
  id: string;
  title: string;
  description: string;
  starts_at: string;
  started_at: string;
  minutes: number;
  tag_id: string;
  difficulty: string;
  state: QuestState;
  is_succeeded: boolean;
  start_date: Date;
  end_date: Date;
  dates: string[];
  continuation_level: number;
  weekly_frequency: number;
  weekly_completion_count: number;
  total_completion_count: number;
}): Quest => {
  return {
    id: obj.id,
    title: obj.title,
    description: obj.description,
    startsAt: `${formatDate(now())} ${obj.starts_at}`,
    startedAt: obj.started_at,
    minutes: obj.minutes,
    tag_id: obj.tag_id,
    difficulty: obj.difficulty,
    state: obj.state,
    isSucceeded: obj.is_succeeded,
    startDate: obj.start_date,
    endDate: obj.end_date,
    dates: obj.dates,
    continuationLevel: obj.continuation_level ?? 0,
    weeklyFrequency: obj.weekly_frequency,
    weeklyCompletionCount: obj.weekly_completion_count ?? 0,
    totalCompletionCount: obj.total_completion_count ?? 0,
  };
};
