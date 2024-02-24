export type QuestState = "INACTIVE" | "ACTIVE";

export type GetResponse = {
  status: string;
  quests: {
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
    continuation_level: number;
    start_date: Date;
    end_date: Date;
    dates: string[];
    weekly_frequency: number;
    weekly_completion_count: number;
    total_completion_count: number;
  }[];
};
