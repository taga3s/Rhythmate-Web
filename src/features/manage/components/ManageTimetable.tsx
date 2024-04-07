import { formatDateTimeOnlyTime } from "../../../pkg/util/dayjs";
import { ManageTimetableCard } from "./ManageTimetableCard";
import { Quest } from "../../../api/quest/model";
import { FC } from "react";

type Props = {
  questList: Quest[];
};

export const ManageTimetable: FC<Props> = (props: { questList: any }) => {
  const { questList } = props;

  return (
    <div className="flex flex-col gap-4 bg-rhyth-light-blue px-2 py-4 rounded-b-lg">
      {questList.map((quest: Quest) => {
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
          />
        );
      })}
    </div>
  );
};
