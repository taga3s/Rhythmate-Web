import { BottomButton, LeftButton, RightButton } from "./ArrowButton";
import { Card } from "./Card";

export const AnalyticsPresenter = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between mt-5 mb-1">
        <LeftButton />
        <div className="flex">
          <a href="#" className="text-2xl mx-2 block text-center">
            2月12日 ～ 2月19日
          </a>
          <BottomButton />
        </div>
        <RightButton />
      </div>
      <div className="grid grid-cols-2">
        <Card title={"達成したクエストの数"} data={"164"} color={"red"} colornumber={"500"} />
        <Card title={"失敗したクエストの数"} data={"127"} color={"blue"} colornumber={"500"} />
        <Card title={"達成率"} data={"54 %"} color={"yellow"} colornumber={"500"} />
        <Card title={"コンプリート日数"} data={"73"} color={"green"} colornumber={"500"} />
      </div>
      <h1 className="text-xl mt-6 mb-20 ml-6">曜日別クエスト達成状況</h1>
    </div>
  );
};
