import type { FC } from "react";
import type { Quest } from "../../../api/quest/model";
import { formatDateTimeOnlyTime } from "../../common/utils";
import { QuestListItem } from "./QuestListItem";

type Props = {
  questList: Quest[];
};

export const QuestList: FC<Props> = (props) => {
  const { questList } = props;

  return (
    <div className="bg-rhyth-light-blue rounded-b-md rounded-tr-md shadow-lg">
      <div className="flex flex-col gap-2 px-3 py-4">
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
