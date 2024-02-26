import { FC } from "react";
import { ClockIcon } from "../../common/components/icons/ClockIcon";
import { QuestStatusTag } from "./QuestStatusTag";
import { calcExp } from "../../common/funcs/calcExp";

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
    <div className="w-full p-3 bg-white border-2 rounded-md">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-1 font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            className="w-6 h-6 fill-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
            />
          </svg>
          <span className="text-red-500 text-lg">{calcExp(difficulty, continuationLevel)}</span>
        </div>
        <QuestStatusTag status={status} />
      </div>
      <div className="w-full flex justify-between">
        <h2 className="text-xl">{title}</h2>
      </div>
      <div className="flex gap-2 mt-2">
        <ClockIcon />
        <span>
          {startsAt} - {minutes}m
        </span>
      </div>
    </div>
  );
};
