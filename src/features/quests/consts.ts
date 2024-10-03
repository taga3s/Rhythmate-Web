// QuestIsStarted
export const NOT_STARTED_YET = "NOT_STARTED_YET";

// QuestStatus
export type QuestStatus = typeof CLOSED | typeof FORCE_STOP | typeof OPEN | typeof ENGAGED | typeof DONE;
export const CLOSED = "CLOSED";
export const FORCE_STOP = "FORCE_STOP";
export const OPEN = "OPEN";
export const ENGAGED = "ENGAGED";
export const DONE = "DONE";

// QuestState
export type QuestState = typeof INACTIVE | typeof ACTIVE;
export const INACTIVE = "INACTIVE";
export const ACTIVE = "ACTIVE";
