import { AnalyticsLeftButton, AnalyticsRightButton } from "./AnalyticsArrowButton";
import { AnalyticsBarChart } from "./AnalyticsBarChart";
import { AnalyticsCard } from "./AnalyticsCard";

export const AnalyticsPresenter = () => {
  return (
    <div className="flex flex-col items-center w-fit mx-auto">
      <div className="flex w-full justify-between items-center mt-5 mb-1">
        <AnalyticsLeftButton />
        <div className="flex">
          <p className="text-xl mx-2 block text-center font-bold">2/12 ～ 2/19の週</p>
        </div>
        <AnalyticsRightButton />
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        <AnalyticsCard title={"達成したクエストの数"} data={"164"} color={"#E0201B"} />
        <AnalyticsCard title={"失敗したクエストの数"} data={"127"} color={"#0087EE"} />
        <AnalyticsCard title={"達成率"} data={"54 %"} color={"#FFAA00"} />
        <AnalyticsCard title={"コンプリート日数"} data={"73"} color={"#28AC00"} />
      </div>
      <div className="flex justify-start w-full">
        <h1 className="text-lg mt-8 font-bold">曜日別クエスト達成状況</h1>
      </div>
      <AnalyticsBarChart />
    </div>
  );
};
