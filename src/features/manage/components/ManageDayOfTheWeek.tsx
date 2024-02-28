import { ChangeEvent, FC } from "react";

type Props = {
  handleDate: (date: number) => void;
  date: number;
  dayOfTheWeek: string;
  index: number;
};

export const ManageDayOfTheWeek: FC<Props> = ({ handleDate, date, dayOfTheWeek, index }) => {
  return (
    <div className="ml-auto">
      <input
        type="checkbox"
        className="hidden peer"
        value={index}
        id={`${index}`}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleDate(Number(e.target.value))}
      />
      <label
        htmlFor={`${index}`}
        className={`px-2 py-1 rounded border-2 ${date === index ? "bg-blue-600 text-white" : "bg-white text-black"}`}
        // "ml-auto peer-checked:bg-[#0087EE] peer-checked:text-white px-2 py-1 rounded border border-black"
      >
        {dayOfTheWeek}
      </label>
    </div>
  );
};
