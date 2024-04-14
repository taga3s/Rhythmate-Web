import { FC } from "react";

type Props = {
  onClickNavigation: () => void;
};

export const BackButton: FC<Props> = ({ onClickNavigation }) => {
  return (
    <button
      onClick={onClickNavigation}
      className="px-2 py-2 flex gap-2 items-center bg-white hover:bg-rhyth-hover-light-gray font-bold text-sm rounded-md border-2 border-rhyth-light-gray shadow-sm"
    >
      <svg
        className="w-6 h-6 text-rhyth-gray"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 12h14M5 12l4-4m-4 4 4 4"
        />
      </svg>
      <p className="text-rhyth-gray">ひとつ前へ戻る</p>
    </button>
  );
};
