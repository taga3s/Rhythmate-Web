import type { FC } from "react";
import { AddIcon } from "../../common/components/icons";

type Props = {
  onClickFn: () => void;
};

export const TagsNewButton: FC<Props> = ({ onClickFn }) => {
  return (
    <button
      type="button"
      onClick={onClickFn}
      className="flex justify-between items-center gap-2 bg-rhyth-blue hover:bg-rhyth-hover-blue h-14 w-auto rounded-full fixed right-8 bottom-24 shadow-lg p-4"
    >
      <span className="flex items-center text-white tracking-wider">タグ新規作成</span>
      <div className="w-8 h-8">
        <AddIcon />
      </div>
    </button>
  );
};
