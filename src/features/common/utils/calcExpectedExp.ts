import type { Difficulty } from "../../../api/quest/types";

export const calcExpectedExp = (diff: Difficulty, continuationLevel: number) => {
  if (diff === "EASY") {
    return 1 * 10 * continuationLevel;
  }
  if (diff === "NORMAL") {
    return 2 * 10 * continuationLevel;
  }
  if (diff === "HARD") {
    return 3 * 10 * continuationLevel;
  }
  return 0;
};
