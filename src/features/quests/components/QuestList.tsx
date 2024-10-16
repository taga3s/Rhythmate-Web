import type { FC } from "react";
import type { Quest } from "../../../api/quest/model";
import { formatDateTimeOnlyTime } from "../../common/utils";
import { QuestListItem } from "./QuestListItem";

type Props = {
  questList: Quest[];
};

export const QuestList: FC<Props> = ({ questList }) => {
  return (
    <ul className="flex flex-col gap-2 w-full h-full">
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
    </ul>
  );
};
