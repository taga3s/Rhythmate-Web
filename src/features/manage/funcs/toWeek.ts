export const toWeek = (week: string[]) => {
  const result: string[] = [];
  week.forEach((date) => {
    switch (date) {
      case "MON":
        result.push("月");
        break;
      case "TUE":
        result.push("火");
        break;
      case "WED":
        result.push("水");
        break;
      case "THU":
        result.push("木");
        break;
      case "FRI":
        result.push("金");
        break;
      case "SAT":
        result.push("土");
        break;
      case "SUN":
        result.push("日");
        break;
    }
  });
  return result.join("・");
};
