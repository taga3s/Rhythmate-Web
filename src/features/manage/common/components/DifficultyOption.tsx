import type { UseFormRegister, UseFormWatch } from "react-hook-form";
import type { Difficulty } from "../../../../api/quest/types";
import type { TManageValidationSchema } from "../../common/validation";
import type { FC } from "react";
import { Star } from "../../common/components/Star";

type Props = {
  difficulty: Difficulty;
  watch: UseFormWatch<TManageValidationSchema>;
  register: UseFormRegister<TManageValidationSchema>;
};

const DifficultyOption: FC<Props> = (props) => {
  const { difficulty, watch, register } = props;
  const selectedDifficulty = watch("difficulty");

  return (
    <label
      htmlFor={difficulty}
      className={`w-1/4 border-2 flex justify-center items-center gap-1 p-2 rounded-md shadow-sm ${
        selectedDifficulty === difficulty ? "bg-rhyth-blue" : "bg-white hover:bg-rhyth-bg-dark-gray"
      }`}
      key={difficulty}
    >
      <input id={difficulty} type="radio" value={difficulty} {...register("difficulty")} className="hidden" />
      {difficulty === "EASY" ? (
        <Star />
      ) : difficulty === "NORMAL" ? (
        <>
          <Star />
          <Star />
        </>
      ) : (
        <>
          <Star />
          <Star />
          <Star />
        </>
      )}
    </label>
  );
};

export { DifficultyOption };
