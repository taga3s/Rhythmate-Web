export type Difficulty = "EASY" | "NORMAL" | "HARD";
export type QuestState = "INACTIVE" | "ACTIVE";
export type Day = "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN";

export type CreateQuestParams = {
  title: string;
  description: string;
  startsAt: string;
  minutes: number;
  tagId: string;
  difficulty: Difficulty;
  days: Day[];
};

export type CreateRequest = {
  title: string;
  description: string;
  startsAt: string;
  minutes: number;
  tagId: string;
  difficulty: Difficulty;
  days: Day[];
};

export type CreateResponse = {
  status: string;
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
  start_date: Date;
  end_date: Date;
  days: Day[];
  weekly_frequency: number;
};

export type UpdateQuestParams = {
  id: string;
  title: string;
  description: string;
  startsAt: string;
  minutes: number;
  tagId: string;
  difficulty: Difficulty;
  days: Day[];
};

export type UpdateRequest = {
  id: string;
  title: string;
  description: string;
  startsAt: string;
  minutes: number;
  tagId: string;
  difficulty: Difficulty;
  days: Day[];
};

export type UpdateResponse = {
  status: string;
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
  start_date: Date;
  end_date: Date;
  days: Day[];
  weekly_frequency: number;
};

export type DeleteQuestParams = {
  id: string;
};

export type DeleteRequest = {
  id: string;
};

export type ListResponse = {
  status: string;
  quests: {
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
    continuation_level: number;
    start_date: Date;
    end_date: Date;
    days: Day[];
    weekly_frequency: number;
    weekly_completion_count: number;
    total_completion_count: number;
  }[];
};

export type StartQuestParams = {
  id: string;
};

export type StartRequest = {
  id: string;
};

export type StartResponse = {
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
  continuation_level: number;
  start_date: Date;
  end_date: Date;
  days: Day[];
  weekly_frequency: number;
  weekly_completion_count: number;
  total_completion_count: number;
};

export type FinishQuestParams = {
  id: string;
};

export type FinishRequest = {
  id: string;
};

export type FinishResponse = {
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
  continuation_level: number;
  start_date: Date;
  end_date: Date;
  days: Day[];
  weekly_frequency: number;
  weekly_completion_count: number;
  total_completion_count: number;
};

export type ForceFinishQuestParams = {
  id: string;
};

export type ForceFinishRequest = {
  id: string;
};

export type ForceFinishResponse = {
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
  continuation_level: number;
  start_date: Date;
  end_date: Date;
  days: Day[];
  weekly_frequency: number;
  weekly_completion_count: number;
  total_completion_count: number;
};
