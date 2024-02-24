import { FC } from "react";

type Props = {
  onClickFn: () => void;
};

export const BadgesBackButton: FC<Props> = ({ onClickFn }) => {
  return (
    <button
      onClick={onClickFn}
      className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-xs px-2 py-2.5 text-center inline-flex items-center me-2 mb-2"
    >
      <svg
        className="w-5 h-5 text-gray-800"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 9 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
        />
      </svg>
      プロフィールに戻る
    </button>
  );
};
