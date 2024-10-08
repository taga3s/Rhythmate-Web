import type { FC } from "react";
import { toRhythBgColor } from "../../common/utils";

type Props = {
  tagId: string;
  tagName: string;
  tagColor: string;
};

export const ManageSearchTagItem: FC<Props> = ({ tagId, tagName, tagColor }) => {
  return (
    <option
      className={`border-b border-rhyth-light-gray w-full h-hull font-bold flex items-center px-4 py-2 rounded-t-lg hover:text-white hover:bg-rhyth-hover-blue ${toRhythBgColor(
        tagColor,
      )}`}
      value={tagId}
    >
      {tagName}
    </option>
  );
};
