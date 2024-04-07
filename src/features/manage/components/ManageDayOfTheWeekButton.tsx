import { FC } from "react";
import { Day } from "../../../api/quest/types";

type Props = {
  view: Day;
  dayOfTheWeek: Day;
  onClickFn: (dayOfTheWeek: Day) => void;
};

export const ManageDayOfTheWeekButton: FC<Props> = ({ view, dayOfTheWeek, onClickFn }) => {
  const handleDayOfTheWeek = (dayOfTheWeek: Day) => {
    switch (dayOfTheWeek) {
      case "MON":
        return "月";
        break;
      case "TUE":
        return "火";
        break;
      case "WED":
        return "水";
        break;
      case "THU":
        return "木";
        break;
      case "FRI":
        return "金";
        break;
      case "SAT":
        return "土";
        break;
      case "SUN":
        return "日";
        break;
      default:
        return "";
        break;
    }
  };

  return (
    <button
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
