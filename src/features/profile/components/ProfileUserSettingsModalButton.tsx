import { FC } from "react";

type Props = {
  onClickFn: () => void;
};

export const ProfileUserSettingsModalButton: FC<Props> = ({ onClickFn }) => {
  return (
    <button onClick={onClickFn} className="block w-full h-hull">
      <div className="px-4 py-4 flex gap-6 items-center">
        <svg
          className="w-[32px] h-[32px] text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentcolor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M5 8a4 4 0 1 1 7.8 1.3l-2.5 2.5A4 4 0 0 1 5 8Zm4 5H7a4 4 0 0 0-4 4v1c0 1.1.9 2 2 2h2.2a3 3 0 0 1-.1-1.6l.6-3.4a3 3 0 0 1 .9-1.5L9 13Zm9-5a3 3 0 0 0-2 .9l-6 6a1 1 0 0 0-.3.5L9 18.8a1 1 0 0 0 1.2 1.2l3.4-.7c.2 0 .3-.1.5-.3l6-6a3 3 0 0 0-2-5Z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-lg font-bold">ユーザー情報編集</p>
      </div>
    </button>
  );
};
