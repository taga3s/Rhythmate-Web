import { FC, useState } from "react";
import { ManageSearchTagItem } from "./ManageSearchTagItem";
import { Tag } from "../../../api/tag/model";

type Props = {
  tagItems: Tag[] | undefined;
  handleTag: (tagId: string | "") => void;
};

export const ManageSearchTagsDropdown: FC<Props> = ({ tagItems, handleTag }) => {
  const [tagIdValue, setTagIdValue] = useState<string>("");

  const handleTagValue = (tagId: string) => {
    handleTag(tagId);
    setTagIdValue(tagId);
  };

  const handleColorValue = (tagId: string) => {
    const selectTagItem = tagItems?.find((tagItem) => tagItem.id === tagId);
    switch (selectTagItem?.color) {
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
      className={`bg-white border-2 border-rhyth-light-gray text-rhyth-dark-blue text-sm font-bold rounded-lg w-full p-2 shadow-sm ${handleColorValue(
        tagIdValue,
      )}`}
      onChange={(event) => handleTagValue(event.target.value)}
    >
      <option
        value=""
        className={`w-full bg-white text-rhyth-dark-blue border border-rhyth-light-gray font-medium rounded-lg text-sm px-5 py-2.5 inline-flex`}
      >
        タグを選択
      </option>
      {tagItems?.map((tagItem, i) => {
        return <ManageSearchTagItem key={i} tagId={tagItem.id} tagName={tagItem.name} tagColor={tagItem.color} />;
      })}
    </select>
  );
};
