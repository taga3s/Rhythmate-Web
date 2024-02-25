export type QuestState = "INACTIVE" | "ACTIVE";

export type CreateQuestParams = {
  title: string;
  description: string;
  startsAt: string;
  minutes: number;
  tagId: string;
  difficulty: "EASY" | "NORMAL" | "HARD";
  // TODO
  dates: string[];
};

export type CreateRequest = {
  title: string;
  description: string;
  startsAt: string;
  minutes: number;
  tagId: string;
  difficulty: "EASY" | "NORMAL" | "HARD";
  // TODO
  dates: string[];
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
  difficulty: string;
  state: QuestState;
  is_succeeded: boolean;
  start_date: Date;
  end_date: Date;
  dates: string[];
  weekly_frequency: number;
};

export type UpdateQuestParams = {
  id: string;
  title: string;
  description: string;
  startsAt: string;
  minutes: number;
  tagId: string;
  difficulty: "EASY" | "NORMAL" | "HARD";
  // TODO
  dates: string[];
};

export type UpdateRequest = {
  id: string;
  title: string;
  description: string;
  startsAt: string;
  minutes: number;
  tagId: string;
  difficulty: "EASY" | "NORMAL" | "HARD";
  // TODO
  dates: string[];
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
  difficulty: string;
  state: QuestState;
  is_succeeded: boolean;
  start_date: Date;
  end_date: Date;
  dates: string[];
  weekly_frequency: number;
};

export type DeleteQuestParams = {
  id: string;
};

export type DeleteRequest = {
  id: string;
};
