import { ChangeEvent, FC } from "react";

type Props = {
  handleDate: (date: string) => void;
  date: string | undefined;
  dayOfTheWeek: string;
  index: number;
};

const convertToEnglish = (dayOfTheWeek: string): string => {
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

export const ManageDayOfTheWeekCheckBox: FC<Props> = ({ handleDate, date, dayOfTheWeek, index }) => {
  return (
    <div className="ml-auto">
      <input
        type="checkbox"
        className="hidden peer"
        value={convertToEnglish(dayOfTheWeek)}
        id={`${index}`}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleDate(e.target.value)}
      />
      <label
        htmlFor={`${index}`}
        className={`px-2 py-1 rounded border-2 ${
          date === convertToEnglish(dayOfTheWeek) ? "bg-blue-600 text-white" : "bg-white text-black"
        }`}
        // "ml-auto peer-checked:bg-[#0087EE] peer-checked:text-white px-2 py-1 rounded border border-black"
      >
        {dayOfTheWeek}
      </label>
    </div>
  );
};
