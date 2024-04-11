import { FC, SetStateAction, useState } from "react";
import { ManageSearchTagItem } from "./ManageSearchTagItem";

type Props = {
  onSelectFn: (color: string) => void;
};

export const ManageSearchTagsDropdown: FC<Props> = ({ onSelectFn }) => {
  const [colorValue, setColorValue] = useState<string>("");

  const handleColorValue = (event: { target: { value: SetStateAction<string> } }) => {
    setColorValue(event.target.value);
    onSelectFn(colorValue);
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
      className={`bg-white border-2 border-rhyth-light-gray text-rhyth-dark-blue text-sm font-bold rounded-lg w-full p-2 shadow-sm ${selectColorLabel(
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
      <ManageSearchTagItem tagName="aaa" tagColor="Blue" />
      <ManageSearchTagItem tagName="bbb" tagColor="Green" />
      <ManageSearchTagItem tagName="ccc" tagColor="Red" />
      <ManageSearchTagItem tagName="ddd" tagColor="Purple" />
      <ManageSearchTagItem tagName="aaa" tagColor="Orange" />
      <ManageSearchTagItem tagName="aaa" tagColor="Yellow" />
      <ManageSearchTagItem tagName="aaa" tagColor="LightBlue" />
    </select>
  );
};
