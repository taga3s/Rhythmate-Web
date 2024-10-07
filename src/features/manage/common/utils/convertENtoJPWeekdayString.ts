import type { Day } from "../../../../api/quest/types";
import { convertEnToJPWeekday } from "./convertEnToJPWeekday";

const convertENToJPWeekdayString = (weekDays: Day[]) => {
  return weekDays.map((day) => convertEnToJPWeekday(day)).join("・");
};

export { convertENToJPWeekdayString };
