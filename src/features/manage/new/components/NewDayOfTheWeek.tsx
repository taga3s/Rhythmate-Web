import { FC } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";

type Week = "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN";

type Props = {
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
};

export const NewDayOfTheWeek: FC<Props> = ({ register, setValue }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("inputValue", e.target.value);
  };

  return (
    <>
      <input type="checkbox" className="hidden peer" onChange={handleChange} {...register("dates")} />
      <label className="peer-checked:bg-[#0087EE] peer-checked:text-white px-2 py-1 rounded border-2">
        {date === "MON" ? <div>"月"</div> : <div></div>}
        {date === "TUE" ? <div>"火"</div> : <div></div>}
        {date === "WED" ? <div>"水"</div> : <div></div>}
        {date === "THU" ? <div>"木"</div> : <div></div>}
        {date === "FRI" ? <div>"金"</div> : <div></div>}
        {date === "SAT" ? <div>"土"</div> : <div></div>}
        {date === "SUN" ? <div>"日"</div> : <div></div>}
      </label>
    </>
  );
};
