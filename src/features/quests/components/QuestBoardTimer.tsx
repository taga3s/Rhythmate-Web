import { type FC, useState } from "react";
import useInterval from "../../common/hooks/useInterval";
import { FORCE_STOP } from "../consts";
import { calcBaseTime, calcDiffTimeBetweenNowAndTargetTime } from "../calcTime";
import { getIsStarted } from "./QuestBoard";

type Props = {
  startsAt: string;
  isStarted: boolean;
  minutes: number;
  startedAt: string;
};

const constructTime = (hh: number, mm: number, ss: number) => {
  return `${String(hh)}時間${String(mm).padStart(2, "0")}分${String(ss).padStart(2, "0")}秒`;
};

export const QuestBoardTimer: FC<Props> = ({ startsAt, isStarted, minutes, startedAt }) => {
  const { baseTime } = calcBaseTime(startsAt, isStarted, minutes, startedAt);

  const { diffHH, diffMM, diffSS } = calcDiffTimeBetweenNowAndTargetTime(baseTime);

  const [time, setTime] = useState(constructTime(diffHH, diffMM, diffSS));

  useInterval(() => {
    const { baseTime, status } = calcBaseTime(startsAt, getIsStarted(startedAt), minutes, startedAt);

    if (status !== FORCE_STOP) {
      const { diffHH, diffMM, diffSS } = calcDiffTimeBetweenNowAndTargetTime(baseTime);
      setTime(constructTime(diffHH, diffMM, diffSS));
    } else {
      setTime(constructTime(0, 0, 0));
    }
  }, 1000);

  return <span className="text-2xl text-rhyth-light-blue tracking-wider">{time}</span>;
};
