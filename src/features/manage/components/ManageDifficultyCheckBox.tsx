import { ChangeEvent, FC } from "react";
import { Star } from "./ManageStar";

type Props = {
  handleDifficulties: (difficulty: string) => void;
  difficulty: string;
};

const difficultyToNumber = (difficulty: string): number => {
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

export const ManageDifficultyCheckBox: FC<Props> = ({ handleDifficulties, difficulty }) => {
  return (
    <div>
      <input
        type="checkbox"
        className="hidden peer"
        id={difficulty}
        value={difficulty}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleDifficulties(e.target.value)}
      />
      <label
        htmlFor={difficulty}
        className="flex ml-auto peer-checked:bg-blue-400 px-2 py-1 rounded border-2 border-gray-200 cursor-pointer"
      >
        {Array.from({ length: difficultyToNumber(difficulty) }).map((_, index) => (
          <Star key={index} />
        ))}
      </label>
    </div>
  );
};
