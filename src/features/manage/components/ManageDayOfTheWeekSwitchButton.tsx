import type { FC } from "react";
import type { Day } from "../../../api/quest/types";
import { convertEnToJPWeekday } from "../common/funcs";

type Props = {
  view: Day;
  dayOfTheWeek: Day;
  onClickFn: (dayOfTheWeek: Day) => void;
};

export const ManageDayOfTheWeekSwitchButton: FC<Props> = ({ view, dayOfTheWeek, onClickFn }) => {
  return (
    <button
      type="button"
      className={`px-4 py-2 font-cp-font rounded-lg shadow-xl ${
        view === dayOfTheWeek
          ? "text-white bg-rhyth-light-blue"
          : "bg-white text-rhyth-dark-blue hover:bg-rhyth-hover-light-gray"
      }`}
      onClick={() => onClickFn(view)}
    >
      {convertEnToJPWeekday(view)}
    </button>
  );
};
