import type { Day } from "../../../../api/quest/types";

export const convertEnToJPWeekday = (dayOfTheWeek: Day): string => {
  switch (dayOfTheWeek) {
    case "MON":
      return "月";
    case "TUE":
      return "火";
    case "WED":
      return "水";
    case "THU":
      return "木";
    case "FRI":
      return "金";
    case "SAT":
      return "土";
    case "SUN":
      return "日";
    default:
      return "";
  }
};
