import type * as schemaHelper from "../../../submodules/service/src/pkg/schemaHelper";

export type Difficulty = "EASY" | "NORMAL" | "HARD";
export type QuestState = "INACTIVE" | "ACTIVE";
export type Day = "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN";

export type CreateQuestParams = schemaHelper.RequestData<"/quests", "post">;

export type CreateQuestRequest = schemaHelper.RequestData<"/quests", "post">;

export type CreateQuestResponse = schemaHelper.ResponseData<"/quests", "post">;

export type UpdateQuestParams = schemaHelper.RequestData<"/quests/:id", "patch">;

export type UpdateQuestRequest = schemaHelper.RequestData<"/quests/:id", "patch">;

export type UpdateQuestResponse = schemaHelper.ResponseData<"/quests/:id", "patch">;

export type DeleteQuestParams = schemaHelper.RequestData<"/quests/:id", "delete">;

export type DeleteQuestRequest = schemaHelper.RequestData<"/quests/:id", "delete">;

export type DeleteQuestResponse = schemaHelper.ResponseData<"/quests/:id", "delete">;

export type ListQuestsResponse = schemaHelper.ResponseData<"/quests", "get">;

type ImplQuestBase = { id: string };

export type StartQuestParams = ImplQuestBase;

export type StartQuestRequest = ImplQuestBase;

export type StartQuestResponse = schemaHelper.ResponseData<"/quests/start/:id", "patch">;

export type FinishQuestParams = ImplQuestBase;

export type FinishQuestRequest = ImplQuestBase;

export type FinishQuestResponse = schemaHelper.ResponseData<"/quests/finish/:id", "patch">;

export type ForceFinishQuestParams = ImplQuestBase;

export type ForceFinishQuestRequest = ImplQuestBase;

export type ForceFinishQuestResponse = schemaHelper.ResponseData<"/quests/force-finish/:id", "patch">;
