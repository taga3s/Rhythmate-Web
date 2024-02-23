import { FC } from "react";
import { ClockIcon } from "../../common/components/icons/ClockIcon";
import { Quest } from "./QuestsPresenter";
import { formatDateToTime } from "../../../pkg/util/dayjs";

type Props = {
  currentQuest: Quest;
};
export const QuestBoard: FC<Props> = (props) => {
  const { currentQuest } = props;

  return (
    <div className="w-full mt-3 p-3 border-2 shadow rounded-lg">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <ClockIcon />
          <span>{formatDateToTime(currentQuest.startsAt)} ～</span>
        </div>
        <h2 className="text-lg">{currentQuest.title}</h2>
        <div className="w-full h-[2px] bg-gray-200 rounded-md" />
        <span className="text-sm">{currentQuest.description}</span>
        <span className="mt-2 text-lg font-bold">
          クエスト開放まで残り <span className="text-3xl">00:00:00</span>
        </span>
        <button className="text-black bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-blue-300 rounded-lg text-lg font-bold p-3 mt-4 focus:outline-none">
          クエスト未開放
        </button>
      </div>
    </div>
  );
};
