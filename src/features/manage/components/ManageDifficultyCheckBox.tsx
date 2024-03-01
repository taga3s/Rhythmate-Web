import { ChangeEvent, FC } from "react";
import { Star } from "./ManageStar";

type Props = {
  handleDifficulties: (difficulty: string) => void;
  difficulty: string;
};

const difficultyToNumber = (difficulty: string): number => {
  switch (difficulty) {
    case "easy":
      return 1;
    case "medium":
      return 2;
    case "hard":
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
        className="flex ml-auto peer-checked:bg-[#0087EE] px-2 py-1 rounded border border-black"
      >
        {Array.from({ length: difficultyToNumber(difficulty) }).map((_, index) => (
          <Star key={index} />
        ))}
      </label>
    </div>
  );
};
