import { useNavigate } from "@tanstack/react-router";
import { type FC, useState } from "react";
import type { Day, Difficulty } from "../../../api/quest/types";
import { ClockIcon } from "../../common/components/icons/ClockIcon";
import { calcExp } from "../../common/funcs/calcExp";
import { ManageProgressBar } from "./ManageProgressBar";
import { ChevronDownIcon, ChevronUpIcon, EditIcon, HonoIcon, PencilIcon, TagIcon } from "../../common/components/icons";
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

export const ManageTimetableCard: FC<Props> = (props) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleAccordion = () => {
    setIsAccordionOpen((prev) => !prev);
  };

  return (
    <div className={"bg-rhyth-bg-gray shadow-lg text-rhyth-dark-blue rounded-xl"}>
      <div className="flex items-center justify-between">
        <div
          className={`h-20 flex flex-col items-center justify-center font-bold tracking-widest p-2 pr-3 ${toRhythBgColor(
            props.tagColor,
          )} text-white ${isAccordionOpen ? "rounded-tl-lg" : "rounded-l-lg"}`}
        >
          <h2 className="w-[4.5rem] text-lg text-center">{props.startsAt}</h2>
          <span className="text-sm">{props.minutes}min</span>
        </div>
        <div className="w-full flex items-center justify-between p-2">
          <span className="ml-2 tracking-wider font-cp-font text-xl font-bold">{props.title}</span>
          <button type="button" className="p-2" onClick={handleAccordion}>
            {isAccordionOpen ? (
              <div className="w-6 h-6">
                <ChevronUpIcon />
              </div>
            ) : (
              <div className="w-6 h-6">
                <ChevronDownIcon />
              </div>
            )}
          </button>
        </div>
      </div>
      {/* 開閉部分 */}
      {isAccordionOpen && (
        <div>
          <hr className="h-0.5 bg-rhyth-light-gray" />
          <div className="p-2">
            <div className="flex items-center justify-between">
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
                  <div className="w-6 h-6">
                    <EditIcon />
                  </div>
                  編集
                </div>
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
                    {props.startsAt} ~ {props.minutes}min
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
                  <p className="text-sm font-bold tracking-widest">{props.tagName}</p>
                </div>
              )}
            </div>
          </div>
          <hr className="h-0.5 bg-rhyth-light-gray" />
          <div className="flex items-center h-28">
            <div className="w-full h-full p-2">
              <span className="font-cp-font text-rhyth-green mt-auto my-2 ml-1">継続レベル</span>
              <ManageProgressBar level={props.continuationLevel} />
              <div className="flex justify-end items-center text-sm">
                <span className="font-cp-font font-bold tracking-[0.2em] text-white mt-1 bg-rhyth-orange px-2 py-1 rounded-full">
                  BONUS
                </span>
                <span className="ml-1 font-medium text-md text-rhyth-orange tracking-wider">&times;</span>
                <span className="ml-1 font-bold text-lg text-rhyth-orange tracking-wider">
                  {props.continuationLevel.toFixed(1)}
                </span>
              </div>
            </div>
            <div className="bg-rhyth-red min-w-20 h-full flex flex-col justify-center items-center gap-2 text-xs tracking-wider rounded-br-md">
              <span className="text-white font-semibold font-cp-font">獲得Exp</span>
              <div className="flex justify-between items-center">
                <div className="w-6 h-6 ml-2">
                  <HonoIcon />
                </div>
                <span className="text-white text-lg font-semibold text-right mr-3">
                  {calcExp(props.difficulty, props.continuationLevel)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
