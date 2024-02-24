import { formatDateWithAddMinutes, formatDateWithSubtract } from "../../../pkg/util/dayjs";
import { QuestStatus } from "../components/QuestBoard";

export const getBaseTime = (
  startsAt: string,
  isStarted: boolean,
  minutes: number,
  startedAt: string,
  isDone: boolean,
): { baseTime: string; status: QuestStatus } => {
  const { diffSS: beforeDiffSS } = getDiff(formatDateWithSubtract(startsAt, 15));

  // クエスト解放前
  if ((!isStarted && 0 < beforeDiffSS) || isDone) {
    return {
      baseTime: formatDateWithSubtract(startsAt, 15),
      status: "CLOSED",
    };
  }

  // クエスト解放中前後30分
  if (!isStarted && beforeDiffSS <= 0) {
    return {
      baseTime: formatDateWithAddMinutes(startsAt, 15),
      status: "OPENED",
    };
  }

  // クエスト開始が押せなかった場合
  if (isStarted && beforeDiffSS <= 0 && beforeDiffSS === -30) {
    console.log("失敗に更新のAPIを叩く");
  }

  const { diffMM: afterDiffMM, diffSS: afterDiffSS } = getDiff(formatDateWithAddMinutes(startedAt, minutes));

  // クエスト開始・集中
  if (isStarted && 0 < afterDiffSS) {
    return {
      baseTime: formatDateWithAddMinutes(startedAt, minutes),
      status: "ENGAGED",
    };
  }

  // クエスト終了が押せなかった場合
  if (isStarted && afterDiffMM === -16 && afterDiffSS === 0) {
    console.log("失敗に更新のAPIを叩く");
  }

  // クエスト終了後
  return {
    baseTime: formatDateWithAddMinutes(startedAt, minutes + 15),
    status: "DONE",
  };
};

// TODO
export const getDiff = (target: string) => {
  const diff = new Date(target).getTime() - Date.now();
  const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor(diff / 1000) % 60;
  return {
    diffHH: hours,
    diffMM: minutes,
    diffSS: seconds,
  };
};
