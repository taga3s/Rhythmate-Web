export const convertNumberToWeekday = (number: number): string => {
  switch (number) {
    case 1:
      return "MON";
    case 2:
      return "TUE";
    case 3:
      return "WED";
    case 4:
      return "THU";
    case 5:
      return "FRI";
    case 6:
      return "SAT";
    case 7:
      return "SUN";
    default:
      throw new Error("Invalid number for the day of the week.");
  }
};
