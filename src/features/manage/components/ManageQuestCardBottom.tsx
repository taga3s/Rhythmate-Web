import { ProgressBar } from "./ManageProgressBar";

export const QuestCardBottom = () => {
  return (
    <div className="flex items-en">
      <div className=" w-full h-24 p-2">
        <div className="flex">
          <p className="mt-auto ml-1">継続レベル</p>
        </div>
        <ProgressBar />
        <div className="bg-[#FFAA00] w-28 h-7 rounded block ml-auto">
          <p className="flex justify-center items-center text-[#FFFFFF] text-sm ">
            獲得Exp &times; <span className="ml-1 font-semibold text-xl">1.5</span>
          </p>
        </div>
      </div>
      <div className="bg-[#E0201B] w-16 h-24 rounded-lg flex flex-col justify-center items-center gap-2">
        <p className="flex justify-center  text-[#FFFFFF] font-semibold text-sm">獲得Exp</p>
        <div className="flex justify-between items-center">
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
    </div>
  );
};
