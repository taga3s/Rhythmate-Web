import { useState } from "react";
import { formatDateTimeJP } from "../../../pkg/util/dayjs";
import { Loading, LoadingContainer } from "../../common/components";
import { useQueryWeeklyReportFeedBack, useQueryWeeklyReports } from "../api/weeklyReport/hooks/useQueryWeeklyReport";
import { AnalyticsAIFeedback } from "./AnalyticsAIFeedback";
import { AnalyticsBarChart } from "./AnalyticsBarChart";
import { AnalyticsCard } from "./AnalyticsCard";
import { AnalyticsSwitchButton } from "./AnalyticsSwitchButton";
import { useMutateWeeklyReport } from "../api/weeklyReport/hooks/useMutateWeeklyReport";

export const AnalyticsPresenter = () => {
  const { data: weeklyReports, isLoading: isLoadingWeeklyReports } = useQueryWeeklyReports();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const currentWeeklyReportsId = weeklyReports?.length ? weeklyReports[currentIndex].id : "";
  const { data: summaryData, isFetching: isFetchingSummary } = useQueryWeeklyReportFeedBack(currentWeeklyReportsId);
  const { generateFeedBackMutation } = useMutateWeeklyReport();

  const onClickGenerateFeedback = () => {
    generateFeedBackMutation.mutate({ weeklyReportId: currentWeeklyReportsId });
  };

  const dateArray = weeklyReports?.length
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
      {isLoadingWeeklyReports ? (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      ) : weeklyReports?.length ? (
        <div className="flex flex-col items-center mx-auto">
          <div className="flex justify-between  w-full">
            {
              <AnalyticsSwitchButton
                onClickFn={handleClickPrev}
                direction="left"
                isEdgy={currentIndex === dateArray.length - 1}
              />
            }
            <p className="text-xl tracking-wider mx-2 block font-cp-font text-center font-bold text-rhyth-gray">
              {dateArray[currentIndex].start} ～ {dateArray[currentIndex].end}
            </p>
            {<AnalyticsSwitchButton onClickFn={handleClickNext} direction="right" isEdgy={currentIndex === 0} />}
          </div>
          <div className="grid grid-cols-2 gap-6 w-full mt-6">
            <AnalyticsCard
              title={"達成したクエスト数"}
              data={weeklyReports[currentIndex].completed_quests}
              color={"#E0201B"}
              isRate={false}
            />
            <AnalyticsCard
              title={"失敗したクエスト数"}
              data={weeklyReports[currentIndex].failed_quests}
              color={"#0087EE"}
              isRate={false}
            />
            <AnalyticsCard
              title={"達成率"}
              data={weeklyReports[currentIndex].completed_percentage}
              color={"#FFAA00"}
              isRate={true}
            />
            <AnalyticsCard
              title={"コンプリート日数"}
              data={weeklyReports[currentIndex].completed_days}
              color={"#28AC00"}
              isRate={false}
            />
          </div>
          <div className="flex justify-start w-full">
            <h1 className="mt-8 font-cp-font tracking-widest text-rhyth-gray text-lg font-bold ">
              曜日別クエスト達成状況
            </h1>
          </div>
          <AnalyticsBarChart
            completedQuestsData={weeklyReports[currentIndex].completed_quests_each_day}
            failedQuestsData={weeklyReports[currentIndex].failed_quests_each_day}
          />
          <AnalyticsAIFeedback
            summaryData={summaryData ?? ""}
            isLoading={isFetchingSummary}
            onClick={onClickGenerateFeedback}
          />
        </div>
      ) : (
        <div className="mt-20 gap-2 flex flex-col items-center text-lg text-rhyth-dark-blue font-bold">
          <span>週次レポートが存在しません。</span>
        </div>
      )}
    </>
  );
};
