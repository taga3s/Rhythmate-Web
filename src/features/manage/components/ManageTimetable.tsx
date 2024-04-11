import { formatDateTimeOnlyTime } from "../../../pkg/util/dayjs";
import { ManageTimetableCard } from "./ManageTimetableCard";
import { Quest } from "../../../api/quest/model";
import { FC } from "react";
import { ManageTimetableNoData } from "./ManageTimetableNoData";

type QuestWithTag = Quest & {
  tagName: string | undefined;
  tagColor: string | undefined;
};

type Props = {
  questList: QuestWithTag[];
};

export const ManageTimetable: FC<Props> = (props) => {
  const { questList } = props;

  return (
    <div className="flex flex-col gap-4 min-h-[440px] bg-rhyth-light-blue px-2 py-4 rounded-b-lg">
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
