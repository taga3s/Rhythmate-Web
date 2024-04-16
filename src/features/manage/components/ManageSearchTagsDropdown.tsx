import { FC, useState } from "react";
import { ManageSearchTagItem } from "./ManageSearchTagItem";
import { Tag } from "../../../api/tag/model";

type Props = {
  tagItems: Tag[] | undefined;
  handleTag: (tagId: string | "") => void;
  filterTag: string;
  onSelectFn: (color: string) => void;
};

export const ManageSearchTagsDropdown: FC<Props> = ({ tagItems, handleTag, filterTag, onSelectFn }) => {
  const [tagValue, setTagValue] = useState<Tag | undefined>({ id: "", name: "", color: "" });
  const [colorValue, setColorValue] = useState<string>("");

  const convertTagItem = (tagId: string) => {
    if (tagItems === undefined) {
      return { id: "", name: "", color: "" };
    } else {
      return tagItems.find((tagItem) => tagItem.id === tagId);
    }
  };

  const handleTagValue = (event: { target: { value: string } }) => {
    handleTag(event.target.value);
    setTagValue(convertTagItem(filterTag));
    handleColorValue(tagValue);
  };

  const handleColorValue = (tagItem: Tag | undefined) => {
    setColorValue(tagItem === undefined ? "" : tagItem.color);
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
        return "text-rhyth-dark-blue";
    }
  };

  return (
    <select
      name="tag-color"
      id="tag-color"
      className={`bg-white border-2 border-rhyth-light-gray text-rhyth-dark-blue text-sm font-bold rounded-lg w-full p-2 shadow-sm ${selectColorLabel(
        colorValue,
      )}`}
      onChange={handleTagValue}
    >
      <option
        value={""}
        className={`w-full bg-white text-rhyth-dark-blue border border-rhyth-light-gray font-medium rounded-lg text-sm px-5 py-2.5 inline-flex`}
      >
        色を選択
      </option>
      {tagItems?.map((tagItem, i) => {
        return <ManageSearchTagItem key={i} tagItem={tagItem} />;
      })}
    </select>
  );
};
