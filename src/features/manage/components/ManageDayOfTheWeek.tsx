import { ChangeEvent, FC } from "react";

type Props = {
  handleDates: (date: number) => void;
  date: string;
  dates: number[];
  value: number;
};

export const ManageDayOfTheWeek: FC<Props> = ({ handleDates, date, dates, value }) => {
  return (
    <div className="ml-auto">
      <input
        type="checkbox"
        className="hidden peer"
        value={value}
        id={`${value}`}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleDates(Number(e.target.value))}
      />
      <label
        htmlFor={`${value}`}
        className={`px-2 py-1 rounded border-2 ${
          dates.some((v: number) => v === value) ? "bg-blue-600 text-white" : "bg-white text-black"
        }`}
        // "ml-auto peer-checked:bg-[#0087EE] peer-checked:text-white px-2 py-1 rounded border border-black"
      >
        {date}
      </label>
    </div>
  );
};
