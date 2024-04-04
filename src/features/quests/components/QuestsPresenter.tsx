import { QuestBoard } from "./QuestBoard";
import { QuestList } from "./QuestList";
import { formatDateJP, getToday, getTodayEn, now } from "../../../pkg/util/dayjs";
import { useQueryQuestList } from "../api/quest/hooks/useQueryQuest";
import { QuestBoardNoData } from "./QuestBoardNoData";
import { useState } from "react";
import { QuestListNoData } from "./QuestListNoData";
import { Quest } from "../../../api/quest/model";
import { Loading, LoadingContainer } from "../../common/components";

const filterQuestsByDayOfTheWeek = (questList: Quest[]) => {
  const todaysDayOfTheWeek = getTodayEn().toUpperCase();

  return questList.filter((quest) => {
    const isToday: boolean = quest.days.some((day) => day === todaysDayOfTheWeek);
    return isToday ? quest : null;
  });
};

const sortQuestsByTime = (questList: Quest[]) => {
  return questList.sort((a, b) => {
    return a.startsAt > b.startsAt ? 1 : -1;
  });
};

export const QuestsPresenter = () => {
  const { data, isLoading } = useQueryQuestList();

  // 曜日でフィルターする
  const filteredQuestsData = filterQuestsByDayOfTheWeek(data ?? []);

  // 時間順でソートする
  const sortedQuestsData = sortQuestsByTime(filteredQuestsData);

  const nextQuestList = sortedQuestsData.filter((value) => value.state === "INACTIVE");
  const finishedQuestList = sortedQuestsData.filter((value) => value.state === "ACTIVE");
  const currentQuest = nextQuestList[0];

  const [view, setView] = useState<"NEXT" | "FINISHED">("NEXT");

  return (
    <>
      <h1 className="font-cp-font text-rhyth-light-blue text-2xl tracking-widest">
        {formatDateJP(now())}
        {`(${getToday()})`}
      </h1>
      {isLoading ? (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      ) : (
        <>
          <div className="flex gap-2 my-2">
            <svg
              className="w-6 h-6 text-rhyth-gray"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
            <h1 className="font-cp-font text-rhyth-gray tracking-widest">NEXT CHALLENGE</h1>
          </div>
          <div className="bg-white">
            {currentQuest ? <QuestBoard currentQuest={currentQuest} /> : <QuestBoardNoData />}
          </div>
          <div className={`flex flex-col w-full mt-6 bg-gray-100 rounded-md`}>
            <div className="flex items-center">
              <button
                className={`px-4 py-2 text-base font-cp-font tracking-widest font-bold rounded-t-lg ${
                  view === "NEXT"
                    ? "text-white bg-rhyth-light-blue"
                    : "bg-white text-rhyth-dark-blue hover:bg-rhyth-hover-light-gray"
                }`}
                onClick={() => setView("NEXT")}
              >
                次のクエスト
              </button>
              <button
                className={`px-4 py-2 text-base font-cp-font tracking-widest font-bold rounded-t-lg shadow-l-lg ${
                  view === "FINISHED"
                    ? "text-white bg-rhyth-light-blue"
                    : "bg-white text-rhyth-dark-blue hover:bg-rhyth-hover-light-gray"
                }`}
                onClick={() => setView("FINISHED")}
              >
                終了クエスト
              </button>
            </div>
            {view === "NEXT" ? (
              nextQuestList.slice(1)?.length ? (
                <QuestList questList={nextQuestList.slice(1)} />
              ) : (
                <QuestListNoData view={view} />
              )
            ) : finishedQuestList?.length ? (
              <QuestList questList={finishedQuestList} />
            ) : (
              <QuestListNoData view={view} />
            )}
          </div>
        </>
      )}
    </>
  );
};
