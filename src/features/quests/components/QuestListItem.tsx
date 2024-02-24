import { FC } from "react";
import { ClockIcon } from "../../common/components/icons/ClockIcon";
import { QuestStatusTag } from "./QuestStatusTag";

const getStatus = (isDone: boolean, isSuccess: boolean) => {
  if (!isDone) return "CLOSED";
  if (isSuccess) return "SUCCESS";
  return "FAILED";
};

type Props = {
  title: string;
  startsAt: string;
  minutes: number;
  isDone: boolean;
  isSuccess: boolean;
};
export const QuestListItem: FC<Props> = (props) => {
  const { title, startsAt, minutes, isDone, isSuccess } = props;
  const status = getStatus(isDone, isSuccess);

  return (
    <div className="w-full p-3 bg-white border-2 rounded-md">
      <div className="w-full flex justify-between">
        <h2 className="text-xl">{title}</h2>
        <QuestStatusTag status={status} />
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
