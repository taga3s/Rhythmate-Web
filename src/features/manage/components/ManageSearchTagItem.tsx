import type { FC } from "react";

type Props = {
  tagId: string;
  tagName: string;
  tagColor: string;
};

export const ManageSearchTagItem: FC<Props> = ({ tagId, tagName, tagColor }) => {
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
    }
  };

  return (
    <option
      className={`border-b border-rhyth-light-gray w-full h-hull font-bold flex items-center px-4 py-2 rounded-t-lg hover:text-white hover:bg-rhyth-hover-blue ${selectColorLabel(
        tagColor,
      )}`}
      value={tagId}
    >
      {tagName}
    </option>
  );
};
