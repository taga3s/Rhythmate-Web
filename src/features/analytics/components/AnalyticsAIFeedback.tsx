import type { FC } from "react";
import { Loading } from "../../common/components/Loading";
import { ChatIcon2 } from "../../common/components/icons";

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
        className="flex items-center justify-center gap-2 w-full text-md text-white bg-rhyth-blue hover:bg-rhyth-hover-blue disabled:bg-rhyth-light-gray border border-rhyth-light-blue disabled:border-rhyth-light-gray rounded-lg px-4 py-2 mx-auto"
        disabled={isLoading}
        onClick={onClick}
      >
        <div className="w-6 h-6">
          <ChatIcon2 />
        </div>
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
