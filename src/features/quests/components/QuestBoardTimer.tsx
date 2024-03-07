import { FC, useState } from "react";
import { getIsStarted } from "./QuestBoard";
import useInterval from "../../common/hooks/useInterval";
import { getBaseTime, getDiffTime } from "../funcs/calcTimer";
import { FORCE_STOP } from "../constant/constant";

type Props = {
  startsAt: string;
  isStarted: boolean;
  minutes: number;
  startedAt: string;
};

export const QuestBoardTimer: FC<Props> = ({ startsAt, isStarted, minutes, startedAt }) => {
  const { baseTime } = getBaseTime(startsAt, isStarted, minutes, startedAt);

  const { diffHH, diffMM, diffSS } = getDiffTime(baseTime);

  const [hh, setHH] = useState(diffHH);
  const [mm, setMM] = useState(diffMM);
  const [ss, setSS] = useState(diffSS);

  useInterval(() => {
    const { baseTime, status } = getBaseTime(startsAt, getIsStarted(startedAt), minutes, startedAt);

    if (status !== FORCE_STOP) {
      const { diffHH, diffMM, diffSS } = getDiffTime(baseTime);
      setHH(diffHH);
      setMM(diffMM);
      setSS(diffSS);
    } else {
      setHH(0);
      setMM(0);
      setSS(0);
    }
  }, 1000);

  return (
    <span className="text-2xl">
      {String(hh)}時間{String(mm).padStart(2, "0")}分{String(ss).padStart(2, "0")}秒
    </span>
  );
};
