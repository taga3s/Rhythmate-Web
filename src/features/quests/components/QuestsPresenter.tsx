import { useState } from "react";
import { dataMock } from "../mock/data";
import { QuestBoard } from "./QuestBoard";
import { QuestList } from "./QuestList";
import { formatDateJP, now } from "../../../pkg/util/dayjs";
import { Quest } from "../api/model/quest";

const sortQuestsByTime = (questList: Quest[]) => {
  return questList.sort((a, b) => {
    return a.startsAt > b.startsAt ? 1 : -1;
  });
};

export const QuestsPresenter = () => {
  // 時間順でソートする
  const sortedQuestsData = sortQuestsByTime(dataMock);

  const nextQuestList = sortedQuestsData.filter((value) => !value.isDone);
  const finishedQuestList = sortedQuestsData.filter((value) => value.isDone);

  const [currentQuest] = useState(nextQuestList[0]);

  return (
    <>
      <h1 className="text-xl font-bold">{formatDateJP(now())}のクエスト</h1>
      <QuestBoard currentQuest={currentQuest} />
      <QuestList nextQuestList={nextQuestList.slice(1)} finishedQuestList={finishedQuestList} />
    </>
  );
};
