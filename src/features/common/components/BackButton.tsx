import type { FC } from "react";
import { ChevronLeftIcon } from "./icons";

type Props = {
  onClick: () => void;
};

export const BackButton: FC<Props> = ({ onClick }) => {
  return (
    <button
      type="button"
      className="px-2 py-2 flex gap-2 items-center bg-white hover:bg-rhyth-hover-light-gray font-bold text-sm rounded-md border-2 border-rhyth-light-gray shadow-sm"
      onClick={onClick}
    >
      <div className="w-4 h-4 text-rhyth-gray">
        <ChevronLeftIcon />
      </div>
      <p className="text-rhyth-gray">ひとつ前へ戻る</p>
    </button>
  );
};
