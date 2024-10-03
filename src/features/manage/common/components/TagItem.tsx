import type { FC } from "react";

type Props = {
  tagId: string;
  tagName: string;
};

export const TagItem: FC<Props> = ({ tagId, tagName }) => {
  return (
    <option
      className="border-b border-rhyth-light-gray w-full h-hull font-bold flex items-center px-4 py-2 rounded-t-lg"
      value={tagId}
    >
      {tagName}
    </option>
  );
};
