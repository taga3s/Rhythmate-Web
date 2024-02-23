import { FC, useState } from "react";
import { QuestListItem } from "./QuestListItem";
import { formatDateToTime } from "../../../pkg/util/dayjs";

type Quest = {
  id: string;
  title: string;
  description: string;
  startsAt: string;
  startedAt: string;
  minutes: number;
  tag: string;
  difficulty: string;
  isDone: boolean;
  startDate: string;
  endDate: string;
  dates: string[];
  weeklyFrequency: number;
  weeklyCompletionCount: number;
};

type Props = {
  nextQuestList: Quest[];
  finishedQuestList: Quest[];
};

export const QuestList: FC<Props> = (props) => {
  const { nextQuestList, finishedQuestList } = props;
  const [view, setView] = useState<"NEXT" | "FINISHED">("NEXT");

  return (
    <div className={`flex flex-col gap-2 w-full p-3 mt-4 bg-gray-100 rounded-md `}>
      <div className="flex items-center gap-2">
        <button
          className={`px-4 py-2 text-base font-bold rounded-lg ${
            view === "NEXT" ? "text-white bg-blue-400" : "bg-gray-300 text-black "
          }`}
          onClick={() => setView("NEXT")}
        >
          次のクエスト
        </button>
        <button
          className={`px-4 py-2 text-base font-bold rounded-lg ${
            view === "FINISHED" ? "text-white bg-blue-400" : "bg-gray-300 text-black "
          }`}
          onClick={() => setView("FINISHED")}
        >
          終了クエスト
        </button>
      </div>
      <div className="mt-3 flex flex-col gap-2 ">
        {view === "NEXT" ? (
          nextQuestList.slice(1).length ? (
            nextQuestList.slice(1).map((value) => {
              return (
                <div key={value.id}>
                  <QuestListItem
                    title={value.title}
                    startsAt={formatDateToTime(value.startsAt)}
                    minutes={value.minutes}
                  />
                </div>
              );
            })
          ) : (
            <div></div>
          )
        ) : finishedQuestList.length ? (
          finishedQuestList.map((value) => {
            return (
              <div key={value.id}>
                <QuestListItem
                  title={value.title}
                  startsAt={formatDateToTime(value.startsAt)}
                  minutes={value.minutes}
                />
              </div>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
