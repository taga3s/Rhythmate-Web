import { FC } from "react";
import { ClockIcon } from "../../common/components/icons/ClockIcon";

type Props = {
  title: string;
  startsAt: string;
  minutes: number;
};
export const QuestListItem: FC<Props> = (props) => {
  const { title, startsAt, minutes } = props;
  return (
    <div className="w-full p-3 bg-white border-2 rounded-md">
      <div className="w-full flex justify-between">
        <h2 className="text-xl">{title}</h2>
        <div className="bg-gray-300 font-bold px-2 py-1 rounded-md">未開放</div>
      </div>
      <div className="flex gap-2">
        <ClockIcon />
        <span>
          {startsAt} - {minutes}m
        </span>
      </div>
    </div>
  );
};
