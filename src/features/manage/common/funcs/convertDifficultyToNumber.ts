import type { Difficulty } from "../../../../api/quest/types";

export const convertDifficultyToNumber = (difficulty: Difficulty): number => {
  switch (difficulty) {
    case "EASY":
      return 1;
    case "NORMAL":
      return 2;
    case "HARD":
      return 3;
    default:
      return 0;
  }
};
