import { FC } from "react";

type Props = {
  summaryData: string;
};
export const AnalyticsAIFeedback: FC<Props> = ({ summaryData }) => {
  return (
    <div className="mt-3 text-sm border-2 max-w-sm w-full min-h-36 p-4 bg-white rounded-lg shadow">
      <div className="flex gap-2 items-center mb-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
          />
        </svg>
        <p className="text-base font-bold">AIによるフィードバック</p>
      </div>
      <p className="mt-2">{summaryData}</p>
    </div>
  );
};
