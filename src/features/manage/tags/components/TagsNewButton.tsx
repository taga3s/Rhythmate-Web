import { FC } from "react";

type Props = {
  onClickFn: () => void;
};

export const TagsNewButton: FC<Props> = ({ onClickFn }) => {
  return (
    <button
      onClick={onClickFn}
      className="flex justify-between items-center gap-2 bg-rhyth-blue h-14 w-auto rounded-full fixed right-8 bottom-24 shadow-lg p-4"
    >
      <span className="flex items-center text-white tracking-wider">タグ新規作成</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="white"
        className="w-8 h-8"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </button>
  );
};
