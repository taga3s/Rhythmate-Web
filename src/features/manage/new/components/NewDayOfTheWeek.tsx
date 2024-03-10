import { FC } from "react";
import { UseFormRegister, UseFormWatch } from "react-hook-form";

type Props = {
  // handleDays: (day: number) => void;
  day: string;
  // days: number[];
  value: number;
  register: UseFormRegister<{
    title: string;
    minutes: string;
    startsAt: string;
    days: string[];
    description: string;
  }>;
  watch: UseFormWatch<{
    title: string;
    description: string;
    startsAt: string;
    minutes: string;
    days: string[];
  }>;
};

export const NewDayOfTheWeek: FC<Props> = ({ day, value, register, watch }) => {
  const days = watch("days");
  const isChecked = Array.isArray(days) && days.some((v: string) => v === value.toString());
  return (
    <>
      <input type="checkbox" className="hidden peer" value={value} id={`${value}`} {...register("days")} />
      <label
        className={`px-2 py-1 rounded border-2 cursor-pointer ${
          isChecked ? "bg-blue-400 text-white" : "bg-white text-black"
        }`}
        htmlFor={`${value}`}
      >
        {day}
      </label>
    </>
  );
};
