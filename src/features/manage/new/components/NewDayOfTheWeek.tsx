import { ChangeEvent, FC } from "react";
import { Day } from "../../../../api/quest/types";

type Props = {
  handleDays: (day: number) => void;
  day: Day;
  days: number[];
  value: number;
};

export const NewDayOfTheWeek: FC<Props> = ({ handleDays, day, days, value }) => {
  return (
    <>
      <input
        type="checkbox"
        className="hidden peer"
        value={value}
        id={`${value}`}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleDays(Number(e.target.value))}
      />
      <label
        className={`px-2 py-1 rounded border-2 cursor-pointer ${
          days.some((v) => v === value) ? "bg-blue-400 text-white" : "bg-white text-black"
        }`}
        htmlFor={`${value}`}
      >
        {day}
      </label>
    </>
  );
};
