import { FC } from "react";

type Props = {
  status: "CLOSED" | "SUCCESS" | "FAILED";
  calcExp: number;
};

export const QuestStatusTag: FC<Props> = ({ status, calcExp }) => {
  return status === "CLOSED" ? (
    <div className="w-[70px] h-full flex items-center justify-center bg-rhyth-red text-white tracking-widest font-bold px-2 py-1 rounded-r-md shadow-md font-cp-font">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        className="w-6 h-6 fill-rhyth-orange"
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
      <span className="text-white text-md">{calcExp}</span>
    </div>
  ) : status === "SUCCESS" ? (
    <div className="w-[70px] h-full flex items-center justify-center bg-rhyth-green text-white tracking-widest font-bold px-2 py-1 rounded-r-md shadow-md">
      成功
    </div>
  ) : (
    <div className="w-[70px] h-full flex items-center justify-center bg-rhyth-red text-white tracking-widest font-bold px-2 py-1 rounded-r-md shadow-md">
      失敗
    </div>
  );
};
