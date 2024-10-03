import type { FC } from "react";
import type { UseFormRegister, UseFormWatch } from "react-hook-form";
import type { TTagValidationSchema } from "../validation";
import { TagsColorItem } from "./TagsColorItem";
import { selectTagColorText } from "../selectTagColor";

type Props = {
  register: UseFormRegister<TTagValidationSchema>;
  watch: UseFormWatch<TTagValidationSchema>;
};

export const TagsColorDropdown: FC<Props> = ({ register, watch }) => {
  const colorValue = watch("color");
  return (
    <select
      id="tag-color"
      className={`bg-white border border-rhyth-light-gray text-rhyth-dark-blue text-sm font-bold rounded-lg w-1/2 p-2 ${selectTagColorText(
        colorValue,
      )}`}
      value={colorValue}
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
      <TagsColorItem color="Blue" />
      <TagsColorItem color="Green" />
      <TagsColorItem color="Red" />
      <TagsColorItem color="Purple" />
      <TagsColorItem color="Orange" />
      <TagsColorItem color="Yellow" />
      <TagsColorItem color="LightBlue" />
    </select>
  );
};
