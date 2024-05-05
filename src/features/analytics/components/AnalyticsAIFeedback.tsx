import type { FC } from "react";
import { Loading } from "../../common/components/Loading";

type Props = {
  summaryData: string;
  isLoading: boolean;
  onClick: () => void;
};

export const AnalyticsAIFeedback: FC<Props> = ({ summaryData, isLoading, onClick }) => {
  return (
    <div className="mt-4">
      <button
        type="button"
        className="flex items-center justify-center gap-2 w-full text-md text-white bg-rhyth-light-blue hover:bg-rhyth-blue disabled:bg-rhyth-light-gray border border-rhyth-light-blue disabled:border-rhyth-light-gray rounded-lg px-4 py-2 mx-auto"
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
      <div className="mt-4">
        {isLoading ? (
          <div className="p-8">
            <Loading />
          </div>
        ) : summaryData.length > 0 ? (
          <div className="text-sm border-2 w-full px-3 py-4 bg-white rounded-lg shadow">
            <p>{summaryData}</p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
