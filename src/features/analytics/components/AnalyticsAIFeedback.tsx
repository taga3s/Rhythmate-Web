import type { FC } from "react";
import { Loading } from "../../common/components/Loading";

type Props = {
  summaryData: string;
  isLoading: boolean;
  onClick: () => void;
};

export const AnalyticsAIFeedback: FC<Props> = ({ summaryData, isLoading, onClick }) => {
  return (
    <div className="mt-3 text-sm border-2 w-full min-h-[174px] px-3 py-4 bg-white rounded-lg shadow">
      <div className="flex gap-2 items-center justify-start">
        <span className="text-base font-bold">AIによるフィードバック</span>
        <button
          type="button"
          className="flex gap-2 items-center ml-auto text-sm text-white bg-rhyth-light-blue hover:bg-rhyth-blue disabled:bg-rhyth-light-gray border border-rhyth-blue disabled:border-rhyth-light-gray rounded-lg px-2 py-1"
          disabled={isLoading}
          onClick={onClick}
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <title>rhythmate feedback logo</title>
            <path
              fillRule="evenodd"
              d="M3.559 4.544c.355-.35.834-.544 1.33-.544H19.11c.496 0 .975.194 1.33.544.356.35.559.829.559 1.331v9.25c0 .502-.203.981-.559 1.331-.355.35-.834.544-1.33.544H15.5l-2.7 3.6a1 1 0 0 1-1.6 0L8.5 17H4.889c-.496 0-.975-.194-1.33-.544A1.868 1.868 0 0 1 3 15.125v-9.25c0-.502.203-.981.559-1.331ZM7.556 7.5a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Zm0 3.5a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2H7.556Z"
              clipRule="evenodd"
            />
          </svg>
          生成する
        </button>
      </div>
      {isLoading ? (
        <div className="p-8">
          <Loading />
        </div>
      ) : summaryData.length > 0 ? (
        <p className="mt-2">{summaryData}</p>
      ) : (
        <p className="mt-2 text-rhyth-dark-blue font-bold">フィードバックを生成してみましょう!</p>
      )}
    </div>
  );
};
