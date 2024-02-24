import { FC, useState } from "react";
import { getIsStarted } from "./QuestBoard";
import useInterval from "../../common/hooks/useInterval";
import { getBaseTime, getDiff } from "../funcs/calcTimer";

type Props = {
  startsAt: string;
  isStarted: boolean;
  minutes: number;
  startedAt: string;
  isDone: boolean;
};

export const QuestBoardTimer: FC<Props> = ({ startsAt, isStarted, minutes, startedAt, isDone }) => {
  const { baseTime } = getBaseTime(startsAt, isStarted, minutes, startedAt, isDone);

  const { diffHH, diffMM, diffSS } = getDiff(baseTime);

  const [hh, setHH] = useState(diffHH);
  const [mm, setMM] = useState(diffMM);
  const [ss, setSS] = useState(diffSS);

  useInterval(() => {
    const { baseTime } = getBaseTime(startsAt, getIsStarted(startedAt), minutes, startedAt, isDone);
    const { diffHH, diffMM, diffSS } = getDiff(baseTime);
    setHH(diffHH);
    setMM(diffMM);
    setSS(diffSS);
  }, 1000);

  return (
    <span className="text-2xl">
      {String(hh)}時間{String(mm).padStart(2, "0")}分{String(ss).padStart(2, "0")}秒
    </span>
  );
};
