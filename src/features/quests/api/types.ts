export type Difficulty = "EASY" | "NORMAL" | "HARD";
export type QuestState = "INACTIVE" | "ACTIVE";

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
    dates: string[];
    weekly_frequency: number;
    weekly_completion_count: number;
    total_completion_count: number;
  }[];
};

export type StartParams = {
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
  dates: string[];
  weekly_frequency: number;
  weekly_completion_count: number;
  total_completion_count: number;
};

export type FinishParams = {
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
  dates: string[];
  weekly_frequency: number;
  weekly_completion_count: number;
  total_completion_count: number;
};

export type ForceFinishParams = {
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
  dates: string[];
  weekly_frequency: number;
  weekly_completion_count: number;
  total_completion_count: number;
};
