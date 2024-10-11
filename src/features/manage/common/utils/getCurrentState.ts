import { formatDateTimeOnlyDate, formatDateTimeWithAddMinutes, isBefore, now } from "../../../common/utils";

type QuestState = "INACTIVE" | "ACTIVE";

export const getCurrentQuestState = (startsAt: string): QuestState => {
  const targetDateTime = formatDateTimeWithAddMinutes(`${formatDateTimeOnlyDate(now())} ${startsAt}`, 15);
  return isBefore(targetDateTime) ? "INACTIVE" : "ACTIVE";
};
