import type { FC } from "react";

type Props = {
  view: "NEXT" | "FINISHED";
};

export const QuestListNoData: FC<Props> = ({ view }) => {
  return view === "NEXT" ? (
    <div className="w-full min-h-[230px] p-3 shadow-lg rounded-b-md rounded-tr-md flex flex-col justify-center bg-rhyth-light-blue">
      <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-md py-2">
        <svg
          className="w-20 h-24 text-rhyth-orange"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm5.5 1a.5.5 0 0 0-1 0 5 5 0 0 0 1.6 3.4 5.5 5.5 0 0 0 7.8 0 5 5 0 0 0 1.6-3.4.5.5 0 0 0-1 0h-.2l-1 .3a18.9 18.9 0 0 1-7.8-.4ZM9 8a1 1 0 0 0 0 2 1 1 0 1 0 0-2Zm6 0a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z"
            clipRule="evenodd"
          />
        </svg>
        <span className="font-bold text-center p-2 text-rhyth-dark-blue">
          新しい習慣がどのくらい身に付いたか
          <br />
          統計レポートで確認しましょう！
        </span>
      </div>
    </div>
  ) : (
    <div className="w-full min-h-[230px] p-3 shadow-lg rounded-b-md rounded-tr-md flex flex-col justify-center bg-rhyth-light-blue">
      <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-md py-2">
        <svg
          className="w-24 h-24 text-rhyth-red"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M20.3 3.7c.2.2.4.4.4.7.3 1.8.7 5.2-.9 6.8A75.2 75.2 0 0 1 8.6 18a1 1 0 0 1-.6-.3l-.8-.9-1-.8a1 1 0 0 1 0-1.2c1-2.2 4.8-8.9 6.6-10.6 1.6-1.6 5-1.2 6.8-1l.7.5ZM5.4 7.6l4-.4-2.7 4.5-2.8-.3a1 1 0 0 1-.6-1.7l2.1-2.1Zm11.4 7-.4 4-2 2.1a1 1 0 0 1-1.8-.6l-.4-2.8 4.6-2.7Zm.8-6.2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
            clipRule="evenodd"
          />
        </svg>
        <span className="font-bold text-center p-2 text-rhyth-dark-blue">
          終了したクエストはまだありません。
          <br />
          今日も一日頑張りましょう！
        </span>
      </div>
    </div>
  );
};
