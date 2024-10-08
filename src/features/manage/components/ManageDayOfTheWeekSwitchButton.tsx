import type { FC } from "react";
import type { Day } from "../../../api/quest/types";
import { convertEnToJPWeekday } from "../common/utils";

type Props = {
  view: Day;
  dayOfTheWeek: Day;
  onClick: (dayOfTheWeek: Day) => void;
};

export const ManageDayOfTheWeekSwitchButton: FC<Props> = ({ view, dayOfTheWeek, onClick }) => {
  return (
    <button
      type="button"
      className={`px-4 py-2 font-cp-font rounded-lg shadow-md ${
        view === dayOfTheWeek
          ? "text-white bg-rhyth-light-blue"
          : "bg-white text-rhyth-dark-blue hover:bg-rhyth-hover-light-gray"
      }`}
      onClick={() => onClick(view)}
    >
      {convertEnToJPWeekday(view)}
    </button>
  );
};
