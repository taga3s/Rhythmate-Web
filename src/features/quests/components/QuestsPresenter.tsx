import { useState } from "react";
import { dataMock } from "../mock/data";
import { QuestBoard } from "./QuestBoard";
import { QuestList } from "./QuestList";
import { getNow, isBefore } from "../../../pkg/util/dayjs";

export type Quest = {
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

const sortQuestsByTime = (questList: Quest[]) => {
  return questList.sort((a, b) => {
    return a.startsAt > b.startsAt ? 1 : -1;
  });
};

export const QuestsPresenter = () => {
  // 時間順でソートする
  const sortedQuestsData = sortQuestsByTime(dataMock);

  const nextQuestList = sortedQuestsData.filter((value) => isBefore(getNow(), value.startsAt));
  const finishedQuestList = sortedQuestsData.filter((value) => !isBefore(getNow(), value.startsAt));

  const [currentQuest, setCurrentQuest] = useState(nextQuestList[0]);

  return (
    <>
      <h1 className="text-xl font-bold">XX年OO月OO日のクエスト</h1>
      <QuestBoard currentQuest={currentQuest} />
      <QuestList nextQuestList={nextQuestList} finishedQuestList={finishedQuestList} />
    </>
  );
};
