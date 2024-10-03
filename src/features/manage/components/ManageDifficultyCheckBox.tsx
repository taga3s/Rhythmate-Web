import type { ChangeEvent, FC } from "react";
import type { Difficulty } from "../../../api/quest/types";
import { Star } from "../common/components/Star";
import { convertDifficultyToNumber } from "../common/utils";

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
        className="flex ml-auto peer-checked:bg-rhyth-blue px-2 py-1 rounded-lg border-2 border-rhyth-light-gray cursor-pointer shadow-sm hover:bg-rhyth-bg-dark-gray"
      >
        {Array.from({ length: convertDifficultyToNumber(difficulty) })
          .map((_, index) => index)
          .map((key) => (
            <Star key={key} />
          ))}
      </label>
    </div>
  );
};
