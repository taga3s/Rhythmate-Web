import type { FC } from "react";
import type { UseFormRegister } from "react-hook-form";
import type { TTagValidationSchema } from "../validation";
import { TagsColorOption } from "./TagsColorOption";
import { toRhythTextColor } from "../../common/utils";

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
      <option
        value=""
        className={
          "w-full bg-white text-rhyth-dark-blue border border-rhyth-light-gray font-medium rounded-lg text-sm px-5 py-2.5 inline-flex"
        }
      >
        色を選択
      </option>
      <TagsColorOption color="Blue" />
      <TagsColorOption color="Green" />
      <TagsColorOption color="Red" />
      <TagsColorOption color="Purple" />
      <TagsColorOption color="Orange" />
      <TagsColorOption color="Yellow" />
      <TagsColorOption color="LightBlue" />
    </select>
  );
};
