import { useNavigate } from "@tanstack/react-router";
import type { FC } from "react";
import type { Day, Difficulty } from "../../../api/quest/types";
import { ClockIcon } from "../../common/components/icons/ClockIcon";
import { calcExp } from "../../common/funcs/calcExp";
import { convertEnToJPWeekday } from "../common/funcs";
import { ManageProgressBar } from "./ManageProgressBar";
import { formatDateTimeOnlyTime } from "../../../utils/dayjs";

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
  tagName: string | undefined;
  tagColor: string | undefined;
};

export const ManageQuestCard: FC<Props> = (props) => {
  const navigate = useNavigate();

  const handleBgTagColor = (tagColor: string | undefined) => {
    switch (tagColor) {
      case "Blue":
        return "bg-rhyth-blue";
      case "Green":
        return "bg-rhyth-green";
      case "Red":
        return "bg-rhyth-red";
      case "Purple":
        return "bg-rhyth-purple";
      case "Orange":
        return "bg-rhyth-orange";
      case "Yellow":
        return "bg-rhyth-yellow";
      case "LightBlue":
        return "bg-rhyth-light-blue";
      case undefined:
        return "bg-rhyth-gray";
    }
  };

  return (
    <li className="w-full h-auto bg-white rounded-xl shadow-lg">
      <div>
        <div className="p-2">
          <div className="p-2">
            <span className="font-cp-font font-bold text-2xl text-rhyth-dark-blue">{props.title}</span>
          </div>
          <hr className="h-0.5 bg-rhyth-light-gray" />
          <div className="flex items-center justify-between mt-2">
            <button
              type="button"
              className="p-1 ml-auto"
              onClick={() =>
                navigate({
                  to: "/manage/edit",
                  search: { quest_id: props.id },
                })
              }
            >
              <div className="flex items-center justify-center gap-1 text-rhyth-dark-blue font-bold">
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z"
                    clipRule="evenodd"
                  />
                </svg>
                編集
              </div>
            </button>
          </div>
          <h3 className="text-md text-rhyth-dark-blue">
            <div className="flex items-center gap-2">
              <svg
                className="w-6 h-6 text-rhyth-dark-blue"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28"
                />
              </svg>
              {props.description !== "" ? props.description : "メモがありません"}
            </div>
          </h3>
          <div className="flex justify-between items-center mt-2">
            <div className="flex justify-start gap-2">
              <ClockIcon color="text-rhyth-dark-blue" />
              <div className="flex flex-col items-start text-rhyth-dark-blue">
                <span>
                  {formatDateTimeOnlyTime(props.startsAt)} ~ {props.minutes}min
                </span>
                <span>{convertENToJPWeekdayString(props.days)}</span>
              </div>
            </div>
            {props.tagName !== undefined ? (
              <div
                className={`w-fit flex justify-center items-center gap-2 text-white ${handleBgTagColor(
                  props.tagColor,
                )} py-1 px-3 rounded-lg text-sm`}
              >
                <svg
                  className="w-6 h-6 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.045 3.007 12.31 3a1.965 1.965 0 0 0-1.4.585l-7.33 7.394a2 2 0 0 0 0 2.805l6.573 6.631a1.957 1.957 0 0 0 1.4.585 1.965 1.965 0 0 0 1.4-.585l7.409-7.477A2 2 0 0 0 21 11.479v-5.5a2.972 2.972 0 0 0-2.955-2.972Zm-2.452 6.438a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                </svg>
                <p className="text-sm font-bold tracking-widest">{props.tagName}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <hr className="h-0.5 bg-rhyth-light-gray" />
        <div className="flex items-center h-28">
          <div className=" w-full h-full p-2">
            <div className="flex my-2">
              <p className="font-cp-font text-rhyth-green mt-auto ml-1">継続レベル</p>
            </div>
            <ManageProgressBar level={props.continuationLevel} />
            <div className="flex justify-end items-center text-sm">
              <p className="font-cp-font tracking-[0.2em] text-white font-bold bg-rhyth-orange mt-1 px-2 py-1 rounded-full">
                BONUS
              </p>
              <span className="ml-1 font-medium text-md text-rhyth-orange tracking-wider">&times;</span>
              <span className="ml-1 font-bold text-lg text-rhyth-orange tracking-wider">
                {props.continuationLevel}.0
              </span>
            </div>
          </div>
          <div className="bg-rhyth-red min-w-20 h-full flex flex-col justify-center items-center gap-2 font-cp-font text-[12px] tracking-wider rounded-br-lg">
            <span className="text-white font-semibold font-cp-font">獲得Exp</span>
            <div className="flex justify-between items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                className="w-6 h-6 fill-rhyth-orange ml-2"
              >
                <title>rhythmate hono icon</title>
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
              <p className="text-white text-lg font-semibold text-right mr-3">
                {calcExp(props.difficulty, props.continuationLevel)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
