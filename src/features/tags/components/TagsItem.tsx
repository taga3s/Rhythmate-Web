import type { FC } from "react";
import { TagsDeleteButton } from "./TagsDeleteButton";
import { TagsEditButton } from "./TagsEditButton";
import { TagIcon } from "../../common/components";
import { toRhythTextColor } from "../../common/utils";

type Props = {
  tagName: string;
  tagColor: string;
  onEditFn: () => void;
  onDeleteFn: () => void;
};

export const TagsItem: FC<Props> = ({ tagName, tagColor, onEditFn, onDeleteFn }) => {
  return (
    <li className="h-12 flex items-center justify-between w-full border-b-2 border-rhyth-light-gray last:border-none px-4 py-2 rounded-t-lg">
      <div className="flex items-center gap-2">
        <div className={`w-6 h-6 ${toRhythTextColor(tagColor)}`}>
          <TagIcon />
        </div>
        <span>{tagName}</span>
      </div>
      <div className="flex items-center gap-2">
        <TagsEditButton onClick={onEditFn} />
        <TagsDeleteButton onClick={onDeleteFn} />
      </div>
    </li>
  );
};
