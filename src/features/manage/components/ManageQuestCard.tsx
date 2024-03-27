import { useNavigate } from "@tanstack/react-router";
import { Star } from "./ManageStar";
import { ManageProgressBar } from "./ManageProgressBar";
import { FC } from "react";
import { formatDateTimeOnlyTime } from "../../../pkg/util/dayjs";
import { ClockIcon } from "../../common/components/icons/ClockIcon";
import { calcExp } from "../../common/funcs/calcExp";
import { convertEnToJPWeekday } from "../common/funcs";
import { Day, Difficulty } from "../../../api/quest/types";

const convertENToJPWeekdayString = (weekDays: Day[]) => {
  const result = weekDays.map((day) => convertEnToJPWeekday(day)).join("・");
  return result;
};

type Props = {
  id: string;
  title: string;
  description: string;
  startsAt: string;
  minutes: number;
  difficulty: Difficulty;
  days: Day[];
  continuationLevel: number;
};

export const ManageQuestCard: FC<Props> = (props) => {
  const { id, title, description, startsAt, minutes, days, difficulty, continuationLevel } = props;
  const navigate = useNavigate();

  return (
    <div className="w-full h-auto  bg-white border border-[#AAAAAA] border-solid rounded-lg shadow">
      <div className="px-4 py-2">
        <button
          className="bg-gray-200 p-1 rounded block ml-auto shadow"
          onClick={() => navigate({ to: `/manage/edit`, search: { quest_id: id } })}
        >
          <div className="flex items-center gap-2 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#D9D9D9"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
            <p className="text-base">編集する</p>
          </div>
        </button>
        <h1 className="mt-1 mb-1 text-lg font-semibold">{title}</h1>
        <hr className="h-0.5 bg-[#AAAAAA]" />
        <h3 className="text-sm mt-1">{description}</h3>
        <div className="flex gap-4 items-center py-1 font-semibold text-lg">
          <div className="flex gap-2 items-center">
            <ClockIcon />
            <span>{formatDateTimeOnlyTime(startsAt)} -</span>
            <span>{minutes}m</span>
          </div>
          <h3>{convertENToJPWeekdayString(days)}</h3>
        </div>
        <div className="flex items-center">
          {difficulty === "EASY" ? (
            <>
              <Star />
            </>
          ) : difficulty === "NORMAL" ? (
            <>
              <Star />
              <Star />
            </>
          ) : (
            <>
              <Star />
              <Star />
              <Star />
            </>
          )}
        </div>
      </div>
      <hr className="h-0.5 bg-[#AAAAAA]" />
      <div className="flex items-en">
        <div className=" w-full h-24 p-2">
          <div className="flex">
            <p className="mt-auto ml-1">継続レベル</p>
          </div>
          <ManageProgressBar level={continuationLevel} />
          <div className="bg-[#FFAA00] w-28 h-7 rounded block ml-auto">
            <p className="flex justify-center items-center text-[#FFFFFF] text-sm ">
              獲得Exp &times; <span className="ml-1 font-semibold text-xl">{continuationLevel}.0</span>
            </p>
          </div>
        </div>
        <div className="bg-[#E0201B] w-16 h-24 flex flex-col justify-center items-center gap-2">
          <p className="flex justify-center  text-[#FFFFFF] font-semibold text-sm">獲得Exp</p>
          <div className="flex justify-between items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              className="w-6 h-6 fill-white ml-2"
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
            <p className="text-white text-xl font-semibold text-right mr-3">{calcExp(difficulty, continuationLevel)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
