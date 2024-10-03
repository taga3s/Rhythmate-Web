import type { FC } from "react";
import type { UseFormRegister, UseFormWatch } from "react-hook-form";
import type { Day } from "../../../../api/quest/types";
import type { TManageValidationSchema } from "../validation";

type Props = {
  day: string;
  value: Day;
  register: UseFormRegister<TManageValidationSchema>;
  watch: UseFormWatch<TManageValidationSchema>;
};

export const DayOfTheWeek: FC<Props> = ({ day, value, register, watch }) => {
  const days = watch("days");
  const isChecked = Array.isArray(days) && days.some((v: string) => v === value);

  return (
    <>
      <input type="checkbox" className="hidden peer" value={value} id={`${value}`} {...register("days")} />
      <label
        className={`px-2 py-1 rounded-lg border-2 cursor-pointer font-bold shadow-sm ${
          isChecked ? "bg-rhyth-blue text-white" : "bg-white text-rhyth-dark-blue hover:bg-rhyth-bg-dark-gray"
        }`}
        htmlFor={`${value}`}
      >
        {day}
      </label>
    </>
  );
};
