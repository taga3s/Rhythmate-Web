import type { FC } from "react";
import type { UseFormRegister } from "react-hook-form";
import type { TTagValidationSchema } from "../validation";
import { TagsColorOption } from "./TagsColorOption";
import { TagsEmptyOption } from "./TagsEmptyOption";
import { toRhythTextColor } from "../../common/utils";
import { COLORS } from "../consts";

type Props = {
  selectedColor: string;
  register: UseFormRegister<TTagValidationSchema>;
};

export const TagsColorDropdown: FC<Props> = ({ selectedColor, register }) => {
  return (
    <select
      id="tag-color"
      className={`bg-white border border-rhyth-light-gray text-rhyth-dark-blue text-sm font-bold rounded-lg w-1/2 p-2 ${toRhythTextColor(
        selectedColor,
      )}`}
      value={selectedColor}
      {...register("color")}
    >
      <TagsEmptyOption value="" label="色を選択" />
      {COLORS.map((color) => (
        <TagsColorOption key={color} value={color} label={color} />
      ))}
    </select>
  );
};
