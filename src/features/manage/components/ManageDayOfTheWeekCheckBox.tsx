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
        className={`px-2 py-1 rounded-lg border-2 border-rhyth-light-gray cursor-pointer font-medium bg-rhyth-bg-gray shadow-sm ${
          day === dayOfTheWeek ? "bg-rhyth-blue text-white" : "bg-white text-rhyth-dark-blue"
        }`}
      >
        {convertEnToJPWeekday(dayOfTheWeek)}
      </label>
    </div>
  );
};
