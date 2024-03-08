import { useState } from "react";
import { AnalyticsLeftButton, AnalyticsRightButton } from "./AnalyticsArrowButton";
import { AnalyticsBarChart } from "./AnalyticsBarChart";
import { AnalyticsCard } from "./AnalyticsCard";
import { useQueryWeeklyReports } from "../api/weeklyReport/hooks/useQueryWeeklyReport";

export const AnalyticsPresenter = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  // const [graphDataIndex, setGraphDataIndex] = useState<number>(0);

  const { data: dataItem, isLoading } = useQueryWeeklyReports();

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
      {isLoading ? (
        <div>Loading...</div>
      ) : dataItem?.length ? (
        <div className="flex flex-col items-center w-fit mx-auto">
          <div className="flex w-full justify-between items-center">
            <AnalyticsLeftButton onClickFn={handleClickPrev} />
            <div className="flex">
              <p className="text-xl mx-2 block text-center font-bold">
                {dateArray[currentIndex].start} ～ {dateArray[currentIndex].end}の週
              </p>
            </div>
            <AnalyticsRightButton onClickFn={handleClickNext} />
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
        </div>
      ) : (
        <div className="w-full gap-4 flex flex-col items-center mx-auto mt-24 text-xl">
          <div>週刊レポートがまだありません</div>
          <div>日曜日が終わるとレポートが作成されます</div>
        </div>
      )}
    </>
  );
};
