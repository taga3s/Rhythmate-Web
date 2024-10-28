import { useState } from "react";
import { formatDateTimeJP } from "../../common/utils";
import { useMutateWeeklyReport } from "../hooks/useMutateWeeklyReport";
import { useQueryWeeklyReports } from "../hooks/useQueryWeeklyReport";
import { AnalyticsAIFeedback } from "../components/AnalyticsAIFeedback";
import { AnalyticsBarChart } from "../components/AnalyticsBarChart";
import { AnalyticsCard } from "../components/AnalyticsCard";
import { AnalyticsSwitchButton } from "../components/AnalyticsSwitchButton";

export const AnalyticsPresenter = () => {
  const { data: weeklyReports } = useQueryWeeklyReports();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const currentWeeklyReportsId = weeklyReports?.length ? weeklyReports[currentIndex].id : "";
  const { generateFeedBackMutation } = useMutateWeeklyReport();

  const onGenerateFeedback = () => {
    generateFeedBackMutation.mutate({ weeklyReportId: currentWeeklyReportsId });
  };

  const dateList = weeklyReports?.length
    ? weeklyReports.map((item) => ({
        start: formatDateTimeJP(item.start_date),
        end: formatDateTimeJP(item.end_date),
      }))
    : [];

  const handleClickPrev = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const handleClickNext = () => {
    setCurrentIndex(currentIndex - 1);
  };
  return (
    <>
      {weeklyReports?.length ? (
        <div className="flex flex-col items-center mx-auto">
          <div className="flex justify-between w-full">
            <AnalyticsSwitchButton
              onClick={handleClickPrev}
              direction="left"
              isEdgy={currentIndex === dateList.length - 1}
            />
            <span className="text-xl tracking-wider mx-2 block font-cp-font text-center font-bold text-rhyth-dark-blue">
              {dateList[currentIndex].start} ～ {dateList[currentIndex].end}
            </span>
            <AnalyticsSwitchButton onClick={handleClickNext} direction="right" isEdgy={currentIndex === 0} />
          </div>
          <h2 className="flex justify-start w-full mt-8 font-cp-font tracking-widest text-rhyth-gray text-lg font-bold ">
            クエスト達成状況
          </h2>
          <div className="flex flex-col gap-4 w-full mt-2">
            <AnalyticsCard
              title={"達成したクエスト数"}
              data={`${weeklyReports[currentIndex].completed_quests}`}
              color={"Red"}
            />
            <AnalyticsCard
              title={"失敗したクエスト数"}
              data={`${weeklyReports[currentIndex].failed_quests}`}
              color={"Blue"}
            />
            <AnalyticsCard
              title={"達成率"}
              data={`${weeklyReports[currentIndex].completed_percentage}%`}
              color={"Orange"}
            />
            <AnalyticsCard
              title={"連続ストリーク日数"}
              data={`${weeklyReports[currentIndex].streak_days}`}
              color={"Green"}
            />
          </div>
          <h2 className="flex justify-start w-full mt-8 font-cp-font tracking-widest text-rhyth-gray text-lg font-bold ">
            曜日別グラフ
          </h2>
          <div className="w-full mt-2">
            <AnalyticsBarChart
              completedQuestsData={weeklyReports[currentIndex].completed_quests_each_day}
              failedQuestsData={weeklyReports[currentIndex].failed_quests_each_day}
            />
          </div>
          <h2 className="flex justify-start w-full mt-8 font-cp-font tracking-widest text-rhyth-gray text-lg font-bold ">
            AIフィードバック
          </h2>
          <div className="mt-2 w-full">
            <span className="text-sm">
              クエストの達成状況に基づいて、AIからアドバイスなどのフィードバックを受けることができます。
            </span>
            <AnalyticsAIFeedback
              summaryData={weeklyReports[currentIndex].feedback ?? ""}
              isLoading={generateFeedBackMutation.isPending}
              onClick={onGenerateFeedback}
            />
          </div>
        </div>
      ) : (
        <span className="mt-20 gap-2 flex flex-col items-center text-lg text-rhyth-dark-blue font-bold">
          週次レポートが存在しません。
        </span>
      )}
    </>
  );
};
