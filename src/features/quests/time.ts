import dayjs from "dayjs";
import { formatDate, formatDateTimeWithAddMinutes, formatDateTimeWithSubtract, now } from "../common/utils";
import { CLOSED, DONE, ENGAGED, FORCE_STOP, OPEN, type QuestStatus } from "./consts";

export const calcBaseTime = (
  startsAt: string,
  isStarted: boolean,
  minutes: number,
  startedAt: string,
): { baseTime: string; status: QuestStatus } => {
  const { diffHH: beforeDiffHH, diffMM: beforeDiffMM } = calcDiffTimeBetweenNowAndTargetTime(
    formatDateTimeWithSubtract(startsAt, 15),
  );

  // クエスト解放前
  if (!isStarted && 0 <= beforeDiffMM) {
    return {
      baseTime: formatDateTimeWithSubtract(startsAt, 15),
      status: CLOSED,
    };
  }

  // クエスト開始が押せなかった場合（前後30分を過ぎているまたは、1時間を過ぎている場合）
  if (!isStarted && (beforeDiffMM < -30 || beforeDiffHH < -1)) {
    return {
      baseTime: formatDate(now()),
      status: FORCE_STOP,
    };
  }

  // クエスト解放中前後30分
  if (!isStarted && -30 <= beforeDiffMM && beforeDiffMM < 0) {
    return {
      baseTime: formatDateTimeWithAddMinutes(startsAt, 15),
      status: OPEN,
    };
  }

  const { diffHH: afterDiffHH, diffMM: afterDiffMM } = calcDiffTimeBetweenNowAndTargetTime(
    formatDateTimeWithAddMinutes(startedAt, minutes),
  );

  // クエスト集中
  if (isStarted && 0 <= afterDiffMM) {
    return {
      baseTime: formatDateTimeWithAddMinutes(startedAt, minutes),
      status: ENGAGED,
    };
  }

  // クエスト終了が押せなかった場合（後15分を過ぎているまたは、1時間を過ぎている場合）
  if (isStarted && (afterDiffMM < -15 || afterDiffHH < -1)) {
    return {
      baseTime: formatDate(now()),
      status: FORCE_STOP,
    };
  }

  // クエスト終了後
  return {
    baseTime: formatDateTimeWithAddMinutes(startedAt, minutes + 15),
    status: DONE,
  };
};

export const calcDiffTimeBetweenNowAndTargetTime = (targetTime: string) => {
  const timeDiff = dayjs(targetTime).diff(now());
  const hours = Math.floor(timeDiff / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
  const seconds = Math.floor((timeDiff / 1000) % 60);

  return {
    diffHH: hours,
    diffMM: minutes,
    diffSS: seconds,
  };
};
