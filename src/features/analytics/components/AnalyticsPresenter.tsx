import { useEffect, useState } from "react";
import { Loading, LoadingContainer } from "../../common/components";
import { useQueryWeeklyReportSummary, useQueryWeeklyReports } from "../api/weeklyReport/hooks/useQueryWeeklyReport";
import { AnalyticsLeftButton, AnalyticsRightButton } from "./AnalyticsArrowButton";
import { AnalyticsBarChart } from "./AnalyticsBarChart";
import { AnalyticsCard } from "./AnalyticsCard";
import { AnalyticsAIFeedback } from "./AnalyticsAIFeedback";

export const AnalyticsPresenter = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const { data: weeklyReports, isLoading: isLoadingWeeklyReports } = useQueryWeeklyReports();
  const {
    data: summaryData,
    refetch: refetchSummary,
    isFetching: isFetchingSummary,
  } = useQueryWeeklyReportSummary(currentIndex);
  useEffect(() => {
    refetchSummary();
  }, [currentIndex]);

  // 日付の配列の作成
  const dateArray = weeklyReports?.length
    ? weeklyReports.map((item) => ({
        start: new Date(item.start_date).getMonth() + 1 + "/" + new Date(item.start_date).getDate(),
        end: new Date(item.end_date).getMonth() + 1 + "/" + new Date(item.end_date).getDate(),
      }))
    : [];

  const handleClickPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? (weeklyReports ? weeklyReports.length - 1 : 0) : prevIndex - 1));
  };
  const handleClickNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === (weeklyReports ? weeklyReports.length - 1 : 0) ? 0 : prevIndex + 1));
  };
  return (
    <>
      {isLoadingWeeklyReports ? (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      ) : weeklyReports?.length ? (
        <div className="flex flex-col items-center w-fit mx-auto">
          <div className="flex w-full justify-center items-center">
            {currentIndex !== weeklyReports.length - 1 && <AnalyticsLeftButton onClickFn={handleClickPrev} />}
            <div className="flex">
              <p className="text-xl px-10 mx-2 block text-center font-bold">
                {dateArray[currentIndex].start} ～ {dateArray[currentIndex].end}
                の週
              </p>
            </div>
            {currentIndex !== 0 && <AnalyticsRightButton onClickFn={handleClickNext} />}
          </div>
          <div className="grid grid-cols-2 gap-6 mt-6">
            <AnalyticsCard
              title={"達成したクエストの数"}
              data={weeklyReports[currentIndex].completed_quests}
              color={"#E0201B"}
              isRate={false}
            />
            <AnalyticsCard
              title={"失敗したクエストの数"}
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
            <h1 className="text-lg mt-8 font-bold">曜日別クエスト達成状況</h1>
          </div>
          <AnalyticsBarChart data={weeklyReports[currentIndex].completed_quests_each_day} />
          <AnalyticsAIFeedback summaryData={summaryData ?? ""} isLoading={isFetchingSummary} />
        </div>
      ) : (
        <div className="w-full gap-4 flex flex-col items-center mx-auto mt-24 text-xl">
          <div>週間レポートがまだありません</div>
          <div>日曜日が終わるとレポートが作成されます</div>
        </div>
      )}
    </>
  );
};
