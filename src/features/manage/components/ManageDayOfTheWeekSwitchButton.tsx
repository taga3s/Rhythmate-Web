import type { FC } from "react";
import type { Day } from "../../../api/quest/types";

type Props = {
  view: Day;
  dayOfTheWeek: Day;
  onClickFn: (dayOfTheWeek: Day) => void;
};

export const ManageDayOfTheWeekSwitchButton: FC<Props> = ({ view, dayOfTheWeek, onClickFn }) => {
  const handleDayOfTheWeek = (dayOfTheWeek: Day) => {
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

  return (
    <button
      type="button"
      className={`w-full px-4 py-2 font-cp-font rounded-t-lg shadow-xl ${
        view === dayOfTheWeek
          ? "text-white bg-rhyth-light-blue"
          : "bg-white text-rhyth-dark-blue hover:bg-rhyth-hover-light-gray"
      }`}
      onClick={() => onClickFn(view)}
    >
      {handleDayOfTheWeek(view)}
    </button>
  );
};
