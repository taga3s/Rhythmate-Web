import { FC } from "react";
import { QuestListItem } from "./QuestListItem";
import { formatDateTimeOnlyTime } from "../../../pkg/util/dayjs";
import { Quest } from "../../../api/quest/model";

type Props = {
  questList: Quest[];
};

export const QuestList: FC<Props> = (props) => {
  const { questList } = props;
  return (
    <div className="bg-rhyth-light-blue rounded-b-md rounded-tr-md shadow-lg">
      <div className="flex flex-col gap-2 py-2">
        {questList.map((quest) => {
          return (
            <QuestListItem
              key={quest.id}
              title={quest.title}
              startsAt={formatDateTimeOnlyTime(quest.startsAt)}
              isDone={quest.state === "ACTIVE"}
              isSuccess={quest.isSucceeded}
              minutes={quest.minutes}
              difficulty={quest.difficulty}
              continuationLevel={quest.continuationLevel}
            />
          );
        })}
      </div>
    </div>
  );
};
