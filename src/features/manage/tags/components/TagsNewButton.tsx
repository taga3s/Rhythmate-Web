import { FC } from "react";

type Props = {
  onClickFn: () => void;
};

export const TagsNewButton: FC<Props> = ({ onClickFn }) => {
  return (
    <button
      onClick={onClickFn}
      className="flex justify-between items-center gap-1 bg-rhyth-light-blue h-8 w-auto p-2 rounded-sm right-12 bottom-24 shadow-sm"
    >
      <span className="flex items-center text-white tracking-wider">新規タグ作成</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="white"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </button>
  );
};
