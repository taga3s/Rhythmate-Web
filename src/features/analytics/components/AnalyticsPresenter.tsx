import { LeftButton, RightButton } from "./AnalyticsArrowButton";
import { Card } from "./AnalyticsCard";

export const AnalyticsPresenter = () => {
  return (
    <div className="flex flex-col items-center w-fit mx-auto">
      <div className="flex gap-10 items-center mt-5 mb-1">
        <LeftButton />
        <div className="flex">
          <p className="text-xl mx-2 block text-center">2月12日 ～ 2月19日</p>
        </div>
        <RightButton />
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        <Card title={"達成したクエストの数"} data={"164"} color={"#E0201B"} />
        <Card title={"失敗したクエストの数"} data={"127"} color={"#0087EE"} />
        <Card title={"達成率"} data={"54 %"} color={"#FFAA00"} />
        <Card title={"コンプリート日数"} data={"73"} color={"#28AC00"} />
      </div>
      <div className="flex justify-start w-full">
        <h1 className="text-lg mt-6">曜日別クエスト達成状況</h1>
      </div>
    </div>
  );
};
