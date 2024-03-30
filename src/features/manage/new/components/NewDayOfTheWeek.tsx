import { FC } from "react";
import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { TManageValidationSchema } from "../../common/libs/validation";
import { Day } from "../../../../api/quest/types";

type Props = {
  day: string;
  value: Day;
  register: UseFormRegister<TManageValidationSchema>;
  watch: UseFormWatch<TManageValidationSchema>;
};

export const NewDayOfTheWeek: FC<Props> = ({ day, value, register, watch }) => {
  const days = watch("days");
  const isChecked = Array.isArray(days) && days.some((v: string) => v === value);

  return (
    <>
      <input type="checkbox" className="hidden peer" value={value} id={`${value}`} {...register("days")} />
      <label
        className={`px-2 py-1 rounded border-2 cursor-pointer font-bold shadow-sm ${
          isChecked ? "bg-rhyth-blue text-white" : "bg-white text-rhyth-dark-blue"
        }`}
        htmlFor={`${value}`}
      >
        {day}
      </label>
    </>
  );
};
