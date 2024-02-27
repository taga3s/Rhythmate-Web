import { FC } from "react";
import { QuestListItem } from "./QuestListItem";
import { formatDateToTime } from "../../../pkg/util/dayjs";
import { Quest } from "../api/model";

type Props = {
  nextQuestList: Quest[];
  finishedQuestList: Quest[];
  view: "NEXT" | "FINISHED";
};

export const QuestList: FC<Props> = (props) => {
  const { nextQuestList, finishedQuestList, view } = props;
  return (
    <div className="mt-3 flex flex-col gap-2 ">
      {view === "NEXT"
        ? nextQuestList.map((quest) => {
            return (
              <QuestListItem
                key={quest.id}
                title={quest.title}
                startsAt={formatDateToTime(quest.startsAt)}
                isDone={quest.state === "ACTIVE"}
                isSuccess={quest.isSucceeded}
                minutes={quest.minutes}
                difficulty={quest.difficulty}
                continuationLevel={quest.continuationLevel}
              />
            );
          })
        : finishedQuestList.map((quest) => {
            return (
              <QuestListItem
                key={quest.id}
                title={quest.title}
                startsAt={formatDateToTime(quest.startsAt)}
                isDone={quest.state === "ACTIVE"}
                isSuccess={quest.isSucceeded}
                minutes={quest.minutes}
                difficulty={quest.difficulty}
                continuationLevel={quest.continuationLevel}
              />
            );
          })}
    </div>
  );
};
