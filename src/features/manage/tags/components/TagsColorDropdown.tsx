import { SetStateAction, useState } from "react";
import { TagsColorItem } from "./TagsColorItem";

export const TagsColorDropdown = () => {
  const [colorValue, setColorValue] = useState<string>("");

  const handleColorValue = (event: { target: { value: SetStateAction<string> } }) => {
    setColorValue(event.target.value);
  };

  const selectColorLabel = (color: string) => {
    switch (color) {
      case "Blue":
        return "text-rhyth-blue";
      case "Green":
        return "text-rhyth-green";
      case "Red":
        return "text-rhyth-red";
      case "Purple":
        return "text-rhyth-purple";
      case "Orange":
        return "text-rhyth-orange";
      case "Yellow":
        return "text-rhyth-yellow";
      case "LightBlue":
        return "text-rhyth-light-blue";
      default:
        return "";
    }
  };

  return (
    <select
      name="tag-color"
      id="tag-color"
      className={`bg-white border border-rhyth-light-gray text-rhyth-dark-blue text-sm font-bold rounded-lg w-1/2 p-2 ${selectColorLabel(
        colorValue,
      )}`}
      value={colorValue}
      onChange={handleColorValue}
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
