import { FC } from "react";

type Props = {
  onClickFn: () => void;
};

export const ProfileLogoutModalButton: FC<Props> = ({ onClickFn }) => {
  return (
    <div>
      <button onClick={onClickFn} className="block w-full h-hull">
        <div className="px-4 py-2 flex gap-3 items-center">
          <div>
            <svg
              className="w-[24px] h-[24px] text-red-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"
              />
            </svg>
          </div>
          <p>ログアウト</p>
        </div>
      </button>
    </div>
  );
};
