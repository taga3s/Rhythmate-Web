import { ProgressBar } from "./ManageProgressBar";

export const QuestCardBottom = () => {
  return (
    <>
      <div className="border border-solid border-[#AAAAAA] w-full h-20 rounded-lg p-2">
        <div className="flex">
          <p className="mt-auto text-sm ml-1">クエストレベル</p>
          <div className="bg-[#FFAA00] w-20 h-7 rounded-2xl block ml-auto">
            <p className="text-center text-[#FFFFFF] text-xl font-semibold">Lv. 6</p>
          </div>
        </div>
        <ProgressBar />
        <p className="text-right text-xs">あと回達成でレベルアップ</p>
      </div>
      <div className="bg-[#E0201B] w-16 h-20 rounded-lg mt-auto">
        <p className="text-center text-[#FFFFFF] font-semibold text-sm mt-3">獲得Exp</p>
        <div className="flex justify-between items-center mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            className="w-6 h-6 fill-white ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
            />
          </svg>
          <p className="text-white text-xl font-semibold text-right mr-3">15</p>
        </div>
      </div>
    </>
  );
};
