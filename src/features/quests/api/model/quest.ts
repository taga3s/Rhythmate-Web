export type Quest = {
  id: string;
  title: string;
  description: string;
  startsAt: string;
  startedAt: string;
  minutes: number;
  tag: string;
  difficulty: string;
  isDone: boolean;
  isSuccess: boolean;
  startDate: string;
  endDate: string;
  dates: string[];
  weeklyFrequency: number;
  weeklyCompletionCount: number;
};
