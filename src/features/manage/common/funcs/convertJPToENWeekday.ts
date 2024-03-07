export const convertJPToENWeekday = (dayOfTheWeek: string): string => {
  switch (dayOfTheWeek) {
    case "月":
      return "MON";
    case "火":
      return "TUE";
    case "水":
      return "WED";
    case "木":
      return "THU";
    case "金":
      return "FRI";
    case "土":
      return "SAT";
    case "日":
      return "SUN";
    default:
      return "";
  }
};
