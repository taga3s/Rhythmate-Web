import type { FC } from "react";
import { selectTagColorBg } from "../../common/funcs";
import { TagsDeleteButton } from "./TagsDeleteButton";
import { TagsEditButton } from "./TagsEditButton";

type Props = {
  tagName: string;
  tagColor: string;
  onEditFn: () => void;
  onDeleteFn: () => void;
};

export const TagsItem: FC<Props> = ({ tagName, tagColor, onEditFn, onDeleteFn }) => {
  return (
    <li className="h-12 flex items-center justify-between w-full border-b-2 border-rhyth-light-gray last:border-none px-4 py-2 rounded-t-lg">
      <div className="flex items-center">
        <span className={`w-3 h-3 me-3 ${selectTagColorBg(tagColor)} rounded-full`} />
        <p>{tagName}</p>
      </div>
      <div className="flex items-center gap-2">
        <TagsEditButton onClickFn={onEditFn} />
        <TagsDeleteButton onClickFn={onDeleteFn} />
      </div>
    </li>
  );
};
