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
    <div className="flex flex-col gap-4 bg-rhyth-light-blue p-4 rounded-b-lg">
      {questList.map((quest: { id: string; title: string; startsAt: string; minutes: number }) => {
        return (
          <ManageTimetableCard
            key={quest.id}
            title={quest.title}
            startsAt={formatDateTimeOnlyTime(quest.startsAt)}
            // isDone={quest.state === "ACTIVE"}
            // isSuccess={quest.isSucceeded}
            minutes={quest.minutes}
            // difficulty={quest.difficulty}
            // continuationLevel={quest.continuationLevel}
          />
        );
      })}
    </div>
  );
};
