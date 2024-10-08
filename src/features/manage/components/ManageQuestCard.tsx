import { useNavigate } from "@tanstack/react-router";
import type { FC } from "react";
import type { Day, Difficulty } from "../../../api/quest/types";
import { ClockIcon } from "../../common/components/icons/ClockIcon";
import { calcExp } from "../../common/funcs/calcExp";
import { ManageProgressBar } from "./ManageProgressBar";
import { formatDateTimeOnlyTime } from "../../../utils/dayjs";
import { HonoIcon, TagIcon, EditIcon, PencilIcon } from "../../common/components/icons";
import { toRhythBgColor } from "../common/utils/toRhythBgColor";
import { convertENToJPWeekdayString } from "../common/utils/convertENtoJPWeekdayString";

type Props = {
  id: string;
  title: string;
  description: string;
  startsAt: string;
  minutes: number;
  difficulty: Difficulty;
  days: Day[];
  continuationLevel: number;
  tagName?: string;
  tagColor?: string;
};

export const ManageQuestCard: FC<Props> = (props) => {
  const navigate = useNavigate();

  return (
    <li className="w-full bg-white rounded-xl shadow-lg">
      <div>
        <div className="p-2">
          <div className="p-2 font-cp-font font-bold text-2xl text-rhyth-dark-blue">{props.title}</div>
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
              <span className="flex items-center justify-center gap-1 text-rhyth-dark-blue font-bold">
                <div className="w-6 h-6">
                  <EditIcon />
                </div>
                編集
              </span>
            </button>
          </div>
          <h3 className="text-md text-rhyth-dark-blue">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 text-rhyth-dark-blue">
                <PencilIcon />
              </div>
              {props.description !== "" ? props.description : "メモがありません"}
            </div>
          </h3>
          <div className="flex justify-between items-center mt-2">
            <div className="flex justify-start gap-2">
              <div className="w-6 h-6 text-rhyth-dark-blue">
                <ClockIcon />
              </div>
              <div className="flex flex-col items-start text-rhyth-dark-blue">
                <span>
                  {formatDateTimeOnlyTime(props.startsAt)} ~ {props.minutes}min
                </span>
                <span>{convertENToJPWeekdayString(props.days)}</span>
              </div>
            </div>
            {props.tagName && (
              <div
                className={`w-fit flex justify-center items-center gap-2 text-white ${toRhythBgColor(
                  props.tagColor,
                )} py-1 px-3 rounded-lg text-sm`}
              >
                <div className="w-6 h-6 text-white">
                  <TagIcon />
                </div>
                <span className="text-sm font-bold tracking-widest">{props.tagName}</span>
              </div>
            )}
          </div>
        </div>
        <hr className="h-0.5 bg-rhyth-light-gray" />
        <div className="flex items-center h-28">
          <div className=" w-full h-full p-2">
            <div className="flex my-2">
              <span className="font-cp-font text-rhyth-green mt-auto ml-1">継続レベル</span>
            </div>
            <ManageProgressBar level={props.continuationLevel} />
            <div className="flex justify-end items-center text-sm">
              <span className="font-cp-font tracking-[0.2em] text-white font-bold bg-rhyth-orange mt-1 px-2 py-1 rounded-full">
                BONUS
              </span>
              <span className="ml-1 font-medium text-md text-rhyth-orange tracking-wider">&times;</span>
              <span className="ml-1 font-bold text-lg text-rhyth-orange tracking-wider">
                {props.continuationLevel.toFixed(1)}
              </span>
            </div>
          </div>
          <div className="bg-rhyth-red min-w-20 h-full flex flex-col justify-center items-center gap-2 font-cp-font text-[12px] tracking-wider rounded-br-lg">
            <span className="text-white font-semibold font-cp-font">獲得Exp</span>
            <div className="flex justify-between items-center">
              <div className="w-6 h-6">
                <HonoIcon />
              </div>
              <span className="text-white text-lg font-semibold text-right mr-3">
                {calcExp(props.difficulty, props.continuationLevel)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
