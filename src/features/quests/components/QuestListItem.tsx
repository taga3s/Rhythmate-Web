import type { FC } from "react";
import { ClockIcon } from "../../common/components/icons/ClockIcon";
import { calcExp } from "../../common/funcs/calcExp";
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
  difficulty: string;
  continuationLevel: number;
};

export const QuestListItem: FC<Props> = (props) => {
  const { title, startsAt, minutes, isDone, isSuccess, difficulty, continuationLevel } = props;
  const status = getStatus(isDone, isSuccess);

  return (
    <div className="w-6/7 bg-white rounded-md">
      <div className="flex justify-between">
        <div className="w-[calc(100%-70px)] flex flex-col justify-center px-3">
          <div className="w-full flex gap-2 my-2">
            <div className="w-6 h-6 text-rhyth-dark-blue">
              <ClockIcon />
            </div>
            <span className="text-rhyth-dark-blue">
              {startsAt} ~ {minutes}min
            </span>
          </div>
          <hr className="w-full h-0.5 bg-rhyth-light-gray" />
          <h2 className="text-xl font-bold text-rhyth-dark-blue py-2">{title}</h2>
        </div>
        <QuestStatusTag status={status} calcExp={calcExp(difficulty, continuationLevel)} />
      </div>
    </div>
  );
};
