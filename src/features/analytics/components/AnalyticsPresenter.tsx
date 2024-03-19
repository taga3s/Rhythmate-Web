import { useEffect, useState } from "react";
import { Loading } from "../../common/components/Loading";
import { useQueryWeeklyReportSummary, useQueryWeeklyReports } from "../api/weeklyReport/hooks/useQueryWeeklyReport";
import { AnalyticsLeftButton, AnalyticsRightButton } from "./AnalyticsArrowButton";
import { AnalyticsBarChart } from "./AnalyticsBarChart";
import { AnalyticsCard } from "./AnalyticsCard";

export const AnalyticsPresenter = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  // const [graphDataIndex, setGraphDataIndex] = useState<number>(0);

  const { data: dataItem, isLoading: isLoadingList } = useQueryWeeklyReports();
  const {
    data: summaryData,
    refetch: refetchSummary,
    isFetching: isFetchingSummary,
  } = useQueryWeeklyReportSummary(currentIndex);
  useEffect(() => {
    refetchSummary();
  }, [currentIndex]);

  // 日付の配列の作成
  const dateArray = dataItem?.length
    ? dataItem.map((item) => ({
        start: new Date(item.start_date).getMonth() + 1 + "/" + new Date(item.start_date).getDate(),
        end: new Date(item.end_date).getMonth() + 1 + "/" + new Date(item.end_date).getDate(),
      }))
    : [];

  const handleClickPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? (dataItem ? dataItem.length - 1 : 0) : prevIndex - 1));
    // setGraphDataIndex((prevIndex) => (prevIndex === 0 ? (graphData ? graphData.length - 1 : 0) : prevIndex - 1));
  };
  const handleClickNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === (dataItem ? dataItem.length - 1 : 0) ? 0 : prevIndex + 1));
    // setGraphDataIndex((prevIndex) => (prevIndex === (graphData ? graphData.length - 1 : 0) ? 0 : prevIndex + 1));
  };
  return (
    <>
      {isLoadingList ? (
        <div className="h-screen">
          <Loading />
        </div>
      ) : dataItem?.length ? (
        <div className="flex flex-col items-center w-fit mx-auto">
          <div className="flex w-full justify-center items-center">
            {currentIndex !== dataItem.length - 1 && <AnalyticsLeftButton onClickFn={handleClickPrev} />}
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
              data={dataItem[currentIndex].completed_quests}
              color={"#E0201B"}
              isRate={false}
            />
            <AnalyticsCard
              title={"失敗したクエストの数"}
              data={dataItem[currentIndex].failed_quests}
              color={"#0087EE"}
              isRate={false}
            />
            <AnalyticsCard
              title={"達成率"}
              data={dataItem[currentIndex].completed_percentage}
              color={"#FFAA00"}
              isRate={true}
            />
            <AnalyticsCard
              title={"コンプリート日数"}
              data={dataItem[currentIndex].completed_days}
              color={"#28AC00"}
              isRate={false}
            />
          </div>
          <div className="flex justify-start w-full">
            <h1 className="text-lg mt-8 font-bold">曜日別クエスト達成状況</h1>
          </div>
          <AnalyticsBarChart data={dataItem[currentIndex].completed_quests_each_day} />
          {isFetchingSummary ? (
            <div className="p-10">
              <Loading />
            </div>
          ) : (
            summaryData && (
              <div className="mt-3 text-lg border-2 max-w-sm w-full px-3 py-4 bg-white rounded-lg shadow">
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
                {summaryData}
              </div>
            )
          )}
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
