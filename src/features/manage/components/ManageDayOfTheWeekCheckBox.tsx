import { ChangeEvent, FC } from "react";
import { Day } from "../../../api/quest/types";
import { convertEnToJPWeekday } from "../common/funcs";

type Props = {
  handleDay: (day: Day | "") => void;
  day: Day | "";
  dayOfTheWeek: Day;
  index: number;
};

export const ManageDayOfTheWeekCheckBox: FC<Props> = ({ handleDay, day, dayOfTheWeek, index }) => {
  return (
    <div className="ml-auto">
      <input
        type="checkbox"
        className="hidden peer"
        value={dayOfTheWeek}
        id={`${index}`}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleDay(e.target.value as Day | "")}
      />
      <label
        htmlFor={`${index}`}
        className={`px-2 py-1 rounded border-2 cursor-pointer ${
          day === dayOfTheWeek ? "bg-blue-400 text-white" : "bg-white text-black"
        }`}
      >
        {convertEnToJPWeekday(dayOfTheWeek)}
      </label>
    </div>
  );
};
