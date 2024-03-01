import { FC, useState } from "react";
import { QuestListItem } from "./QuestListItem";
import { formatDateToTime } from "../../../pkg/util/dayjs";
import { Quest } from "../api/model";

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
          nextQuestList.length ? (
            nextQuestList.map((quest) => {
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
          ) : (
            <div className="w-full min-h-[230px] mt-3 p-3 border-2 shadow rounded-lg flex flex-col items-center bg-white">
              <p className="font-bold text-center p-4">
                新しい習慣がどのくらい身に付いたか
                <br />
                統計レポートで確認しましょう！
              </p>
              <svg
                className="w-24 h-24 text-yellow-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm5.5 1a.5.5 0 0 0-1 0 5 5 0 0 0 1.6 3.4 5.5 5.5 0 0 0 7.8 0 5 5 0 0 0 1.6-3.4.5.5 0 0 0-1 0h-.2l-1 .3a18.9 18.9 0 0 1-7.8-.4ZM9 8a1 1 0 0 0 0 2 1 1 0 1 0 0-2Zm6 0a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )
        ) : finishedQuestList.length ? (
          finishedQuestList.map((quest) => {
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
        ) : (
          <div className="w-full min-h-[230px] mt-3 p-3 border-2 shadow rounded-lg flex flex-col items-center bg-white">
            <p className="font-bold text-center p-4">
              終了したクエストはまだありません。
              <br />
              今日も一日頑張りましょう！
            </p>
            <svg
              className="w-24 h-24 text-red-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M20.3 3.7c.2.2.4.4.4.7.3 1.8.7 5.2-.9 6.8A75.2 75.2 0 0 1 8.6 18a1 1 0 0 1-.6-.3l-.8-.9-1-.8a1 1 0 0 1 0-1.2c1-2.2 4.8-8.9 6.6-10.6 1.6-1.6 5-1.2 6.8-1l.7.5ZM5.4 7.6l4-.4-2.7 4.5-2.8-.3a1 1 0 0 1-.6-1.7l2.1-2.1Zm11.4 7-.4 4-2 2.1a1 1 0 0 1-1.8-.6l-.4-2.8 4.6-2.7Zm.8-6.2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};
