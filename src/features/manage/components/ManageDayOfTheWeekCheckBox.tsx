import { ChangeEvent, FC } from "react";
import { convertJPToENWeekday } from "../common/funcs";

type Props = {
  handleDay: (day: string) => void;
  day: string | undefined;
  dayOfTheWeek: string;
  index: number;
};

export const ManageDayOfTheWeekCheckBox: FC<Props> = ({ handleDay, day, dayOfTheWeek, index }) => {
  return (
    <div className="ml-auto">
      <input
        type="checkbox"
        className="hidden peer"
        value={convertJPToENWeekday(dayOfTheWeek)}
        id={`${index}`}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleDay(e.target.value)}
      />
      <label
        htmlFor={`${index}`}
        className={`px-2 py-1 rounded border-2 cursor-pointer ${
          day === convertJPToENWeekday(dayOfTheWeek) ? "bg-blue-400 text-white" : "bg-white text-black"
        }`}
      >
        {dayOfTheWeek}
      </label>
    </div>
  );
};
