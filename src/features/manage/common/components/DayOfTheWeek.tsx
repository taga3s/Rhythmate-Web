import type { FC } from "react";
import type { UseFormRegister } from "react-hook-form";
import type { Day } from "../../../../api/quest/types";
import type { TManageValidationSchema } from "../validation";

type Props = {
  displayedDay: string;
  day: Day;
  selectedDays: Day[];
  register: UseFormRegister<TManageValidationSchema>;
};

export const DayOfTheWeek: FC<Props> = ({ displayedDay, selectedDays, day, register }) => {
  const isChecked = Array.isArray(selectedDays) && selectedDays.some((v: string) => v === day);

  return (
    <>
      <input type="checkbox" className="hidden peer" value={day} id={`${day}`} {...register("days")} />
      <label
        className={`px-2 py-1 rounded-lg border-2 cursor-pointer font-bold shadow-sm ${
          isChecked ? "bg-rhyth-blue text-white" : "bg-white text-rhyth-dark-blue hover:bg-rhyth-bg-dark-gray"
        }`}
        htmlFor={`${day}`}
      >
        {displayedDay}
      </label>
    </>
  );
};
