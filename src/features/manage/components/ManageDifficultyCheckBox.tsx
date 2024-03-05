import { ChangeEvent, FC } from "react";
import { Star } from "./ManageStar";
import { Difficulty } from "../api/types";
import { convertDifficultyToNumber } from "../common/funcs";

type Props = {
  handleDifficulties: (difficulty: Difficulty) => void;
  difficulty: Difficulty;
  filterDifficulties: Difficulty[];
};

export const ManageDifficultyCheckBox: FC<Props> = ({ handleDifficulties, difficulty, filterDifficulties }) => {
  return (
    <div>
      <input
        type="checkbox"
        className="hidden peer"
        id={difficulty}
        value={difficulty}
        defaultChecked={filterDifficulties.includes(difficulty)}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleDifficulties(e.target.value as Difficulty)}
      />
      <label
        htmlFor={difficulty}
        className="flex ml-auto peer-checked:bg-blue-400 px-2 py-1 rounded border-2 border-gray-200 cursor-pointer"
      >
        {Array.from({ length: convertDifficultyToNumber(difficulty) }).map((_, index) => (
          <Star key={index} />
        ))}
      </label>
    </div>
  );
};
