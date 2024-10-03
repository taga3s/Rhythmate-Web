import { NOT_STARTED_YET } from "../../features/quests/consts";
import { convertUTCtoJST, formatDate, formatDateTime, now } from "../../utils/dayjs";
import type { Day, Difficulty, QuestState } from "./types";

export type Quest = {
  id: string;
  title: string;
  description: string;
  startsAt: string;
  startedAt: string;
  minutes: number;
  tagId: string;
  difficulty: Difficulty;
  state: QuestState;
  isSucceeded: boolean;
  days: Day[];
  continuationLevel: number;
  weeklyFrequency: number;
  weeklyCompletionCount: number;
  totalCompletionCount: number;
};

export const toQuest = (obj: {
  id: string;
  title: string;
  description: string;
  starts_at: string;
  started_at: string;
  minutes: number;
  tag_id: string;
  difficulty: Difficulty;
  state: QuestState;
  is_succeeded: boolean;
  days: Day[];
  continuation_level?: number;
  weekly_frequency: number;
  weekly_completion_count?: number;
  total_completion_count?: number;
}): Quest => {
  return {
    id: obj.id,
    title: obj.title,
    description: obj.description,
    startsAt: `${formatDate(now())} ${obj.starts_at}`,
    startedAt:
      obj.started_at === NOT_STARTED_YET ? obj.started_at : `${formatDateTime(convertUTCtoJST(obj.started_at))}`,
    minutes: obj.minutes,
    tagId: obj.tag_id,
    difficulty: obj.difficulty,
    state: obj.state,
    isSucceeded: obj.is_succeeded,
    days: obj.days,
    continuationLevel: obj.continuation_level ?? 0,
    weeklyFrequency: obj.weekly_frequency,
    weeklyCompletionCount: obj.weekly_completion_count ?? 0,
    totalCompletionCount: obj.total_completion_count ?? 0,
  };
};
