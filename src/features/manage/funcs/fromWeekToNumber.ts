export const fromWeekToNumber = (day: string): number => {
  switch (day) {
    case "MON":
      return 1;
    case "TUE":
      return 2;
    case "WED":
      return 3;
    case "THU":
      return 4;
    case "FRI":
      return 5;
    case "SAT":
      return 6;
    case "SUN":
      return 7;
    default:
      throw new Error("Invalid day abbreviation.");
  }
};
