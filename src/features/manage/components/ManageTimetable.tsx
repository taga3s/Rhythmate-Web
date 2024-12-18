import type { Dispatch, FC } from "react";
import type { Quest } from "../../../api/quest/model";
import { formatDateTimeOnlyTime } from "../../common/utils";
import { ManageTimetableCard } from "./ManageTimetableCard";
import { ManageTimetableNoData } from "./ManageTimetableNoData";
import { DAYS } from "../common/consts";
import { ManageDayOfTheWeekSwitchButton } from "./ManageDayOfTheWeekSwitchButton";
import type { Day } from "../../../api/quest/types";

type QuestWithTag = Quest & {
  tagName?: string;
  tagColor?: string;
};

type Props = {
  questList: QuestWithTag[];
  dayOfTheWeekView: Day;
  setDayOfTheWeekView: Dispatch<React.SetStateAction<Day>>;
};

export const ManageTimetable: FC<Props> = (props) => {
  const { questList, dayOfTheWeekView, setDayOfTheWeekView } = props;

  return (
    <div className="flex flex-col gap-4 min-h-[440px] py-4">
      <div className="flex gap-2 py-2 overflow-auto">
        {DAYS.map((day) => {
          return (
            <ManageDayOfTheWeekSwitchButton
              key={day}
              view={day}
              dayOfTheWeek={dayOfTheWeekView}
              onClick={setDayOfTheWeekView}
            />
          );
        })}
      </div>
      {questList.length > 0 ? (
        questList.map((quest: QuestWithTag) => {
          return (
            <ManageTimetableCard
              key={quest.id}
              id={quest.id}
              title={quest.title}
              description={quest.description}
              startsAt={formatDateTimeOnlyTime(quest.startsAt)}
              minutes={quest.minutes}
              difficulty={quest.difficulty}
              days={quest.days}
              continuationLevel={quest.continuationLevel}
              tagName={quest.tagName}
              tagColor={quest.tagColor}
            />
          );
        })
      ) : (
        <ManageTimetableNoData />
      )}
    </div>
  );
};
