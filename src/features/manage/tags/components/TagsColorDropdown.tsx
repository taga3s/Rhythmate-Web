import { FC, SetStateAction, useState } from "react";
import { TagsColorItem } from "./TagsColorItem";
import { TTagValidationSchema } from "../common/libs/validation";
import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { selectTagColorText } from "../../common/funcs";

type Props = {
  onSelectFn: (color: string) => void;
  register: UseFormRegister<TTagValidationSchema>;
  watch: UseFormWatch<TTagValidationSchema>;
};

export const TagsColorDropdown: FC<Props> = ({ onSelectFn, register, watch }) => {
  // const [colorValue, setColorValue] = useState<string>("");
  const colorValue = watch("color");

  // const handleColorValue = (event: { target: { value: SetStateAction<string> } }) => {
  //   setColorValue(event.target.value);
  //   onSelectFn(colorValue);
  // };

  return (
    <select
      id="tag-color"
      className={`bg-white border border-rhyth-light-gray text-rhyth-dark-blue text-sm font-bold rounded-lg w-1/2 p-2 ${selectTagColorText(
        colorValue,
      )}`}
      value={colorValue}
      // onChange={handleColorValue}
      { ...register("color")}
    >
      <option
        value=""
        className={`w-full bg-white text-rhyth-dark-blue border border-rhyth-light-gray font-medium rounded-lg text-sm px-5 py-2.5 inline-flex`}
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
