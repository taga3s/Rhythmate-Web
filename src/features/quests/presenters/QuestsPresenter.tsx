import { useState } from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import type { Quest } from "../../../api/quest/model";
import { formatDateJP, getToday, getTodayEn, now } from "../../common/utils";
import { useQueryQuestList } from "../hooks/useQueryQuest";
import { QuestBoard } from "../components/QuestBoard";
import { QuestBoardNoData } from "../components/QuestBoardNoData";
import { QuestList } from "../components/QuestList";
import { QuestListNoData } from "../components/QuestListNoData";

type View = "NEXT" | "FINISHED";

const filterTodaysQuestListByDayOfTheWeek = (questList: Quest[]) => {
  const todaysDayOfTheWeek = getTodayEn().toUpperCase();
  return questList.filter((quest) => quest.days.some((day) => day === todaysDayOfTheWeek));
};

const sortQuestListByTime = (questList: Quest[]) => {
  return questList.sort((a, b) => (a.startsAt > b.startsAt ? 1 : -1));
};

export const QuestsPresenter = () => {
  const { data: questListData } = useQueryQuestList();

  const filteredQuestList = filterTodaysQuestListByDayOfTheWeek(questListData ?? []);
  const sortedQuestList = sortQuestListByTime(filteredQuestList);

  const nextQuestList = sortedQuestList.filter((value) => value.state === "INACTIVE");
  const finishedQuestList = sortedQuestList.filter((value) => value.state === "ACTIVE");
  const currentQuest = nextQuestList[0];

  const [view, setView] = useState<View>("NEXT");

  const { width, height } = useWindowSize();

  const [launchConfetti, setLaunchConfetti] = useState<boolean>(false);

  return (
    <>
      {launchConfetti && (
        <Confetti
          width={width}
          height={height}
          confettiSource={{ x: width / 2, y: height / 2, w: 10, h: 0 }}
          recycle={false}
          gravity={0.2}
          initialVelocityX={0.0083 * width + 1.1945}
          initialVelocityY={0.0127 * height + 5.0227}
          tweenDuration={2000}
          numberOfPieces={Math.round((width * height) / 1000)}
        />
      )}
      <span className="font-cp-font text-rhyth-dark-blue text-2xl tracking-widest">
        {formatDateJP(now())}
        {`(${getToday()})`}
      </span>
      <div>
        {currentQuest ? (
          <div>
            <div className="flex gap-2 my-2">
              <h1 className="font-cp-font text-rhyth-gray tracking-widest">NEXT CHALLENGE</h1>
            </div>
            <QuestBoard setLaunchConfetti={setLaunchConfetti} currentQuest={currentQuest} />
          </div>
        ) : (
          <QuestBoardNoData />
        )}
        <div className={"flex flex-col w-full mt-6 rounded-md"}>
          <div className="flex items-center">
            <button
              type="button"
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
              type="button"
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
      </div>
    </>
  );
};
