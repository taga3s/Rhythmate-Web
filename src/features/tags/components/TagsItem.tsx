import type { FC } from "react";
import { TagsDeleteButton } from "./TagsDeleteButton";
import { TagsEditButton } from "./TagsEditButton";
import { selectTagColorText } from "../selectTagColor";
import { TagIcon } from "../../common/components";

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
        <div className={`w-6 h-6 ${selectTagColorText(tagColor)}`}>
          <TagIcon />
        </div>
        <span>{tagName}</span>
      </div>
      <div className="flex items-center gap-2">
        <TagsEditButton onClickFn={onEditFn} />
        <TagsDeleteButton onClickFn={onDeleteFn} />
      </div>
    </li>
  );
};
