import { type FC, useState } from "react";
import type { Day, Difficulty } from "../../../api/quest/types";
import type { Tag } from "../../../api/tag/model";
import { ModalBase } from "../../common/components/modal/ModalBase";
import { ModalHeaderCloseButton } from "../../common/components/modal/ModalHeaderCloseButton";
import { DAYS, DIFFICULTIES } from "../common/constant/constant";
import { ManageDayOfTheWeekCheckBox } from "./ManageDayOfTheWeekCheckBox";
import { ManageDifficultyCheckBox } from "./ManageDifficultyCheckBox";
import { ManageSearchTagsDropdown } from "./ManageSearchTagsDropdown";

type Props = {
  onClickFn: () => void;
  filterDay: Day | "";
  setFilterDay: (day: Day | "") => void;
  setFilterTag: (tagId: string | "") => void;
  tagItems: Tag[] | undefined;
  filterDifficulties: Difficulty[];
  setFilterDifficulties: (difficulty: Difficulty[]) => void;
  setFilterActivation: (activation: boolean) => void;
};

export const ManageQuestSearchModal: FC<Props> = ({
  onClickFn,
  filterDay,
  setFilterDay,
  setFilterTag,
  tagItems,
  filterDifficulties,
  setFilterDifficulties,
  setFilterActivation,
}) => {
  const [day, setDay] = useState<Day | "">(filterDay);
  const [difficulties, setDifficulties] = useState<Difficulty[]>(filterDifficulties);

  const handleDay = (newDay: Day | "") => {
    if (newDay === day) {
      setDay("");
    } else {
      setDay(newDay);
    }
  };

  const handleDifficulty = (difficulty: Difficulty) => {
    if (difficulties.includes(difficulty)) {
      const newDifficulties = difficulties.filter((value) => value !== difficulty);
      setDifficulties(newDifficulties);
    } else {
      setDifficulties([...difficulties, difficulty]);
    }
  };

  return (
    <ModalBase onClickClose={onClickFn}>
      <div className="order relative bg-white rounded-lg shadow p-4">
        <ModalHeaderCloseButton onClickClose={onClickFn} />
        {/* <!-- Modal body --> */}
        <h1 className="font-cp-font text-rhyth-dark-blue text-xl text-center -mt-4 mb-2">クエスト検索</h1>
        <div className="flex flex-col gap-y-4">
          {/* 実施曜日 */}
          <div className="flex gap-3 items-center y-4">
            <svg
              className="w-6 h-6 text-rhyth-gray "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                clipRule="evenodd"
              />
            </svg>
            <p className="font-cp-font text-rhyth-dark-blue">実施曜日</p>
          </div>
          <div className="flex gap-1 ml-auto">
            {DAYS.map((v, i) => {
              return (
                <ManageDayOfTheWeekCheckBox key={v} handleDay={handleDay} day={day} dayOfTheWeek={v} index={i + 1} />
              );
            })}
          </div>
          {/* タグ */}
          <div className="flex gap-3 items-center">
            <svg
              className="w-6 h-6 text-rhyth-gray"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18.045 3.007 12.31 3a1.965 1.965 0 0 0-1.4.585l-7.33 7.394a2 2 0 0 0 0 2.805l6.573 6.631a1.957 1.957 0 0 0 1.4.585 1.965 1.965 0 0 0 1.4-.585l7.409-7.477A2 2 0 0 0 21 11.479v-5.5a2.972 2.972 0 0 0-2.955-2.972Zm-2.452 6.438a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
            </svg>
            <p className="font-cp-font text-rhyth-dark-blue">タグ</p>
            <div className="w-1/2 flex ml-auto">
              <ManageSearchTagsDropdown tagItems={tagItems} handleTag={setFilterTag} />
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <svg
              className="w-6 h-6 text-rhyth-gray"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
            </svg>
            <p className="font-cp-font text-rhyth-dark-blue">難易度</p>
            <div className="flex gap-1 ml-auto">
              {DIFFICULTIES.map((difficulty) => {
                return (
                  <ManageDifficultyCheckBox
                    key={difficulty}
                    handleDifficulties={handleDifficulty}
                    difficulty={difficulty}
                    filterDifficulties={filterDifficulties}
                  />
                );
              })}
            </div>
          </div>
          <button
            type="submit"
            onClick={() => {
              setFilterDay(day);
              setFilterDifficulties(difficulties);
              setFilterActivation(true);
              onClickFn();
            }}
            className="w-full text-white bg-rhyth-blue hover:bg-rhyth-hover-blue tracking-widest focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            保存
          </button>
          <button
            type="submit"
            onClick={() => {
              setFilterDay("");
              setFilterDifficulties([]);
              setFilterActivation(false);
              onClickFn();
            }}
            className="w-full text-white bg-rhyth-red hover:bg-rhyth-hover-red tracking-wider focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            条件をリセット
          </button>
        </div>
      </div>
    </ModalBase>
  );
};
