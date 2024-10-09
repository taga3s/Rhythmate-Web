import { type FC, useState, type Dispatch, type SetStateAction } from "react";
import type { Day, Difficulty } from "../../../api/quest/types";
import type { Tag } from "../../../api/tag/model";
import { ModalBase } from "../../common/components/modal/ModalBase";
import { ModalHeaderCloseButton } from "../../common/components/modal/ModalHeaderCloseButton";
import { DAYS, DIFFICULTIES } from "../common/consts";
import { ManageDayOfTheWeekCheckBox } from "./ManageDayOfTheWeekCheckBox";
import { ManageDifficultyCheckBox } from "./ManageDifficultyCheckBox";
import { ManageSearchTagsDropdown } from "./ManageSearchTagsDropdown";
import { ClockIcon, TagIcon, StarIcon } from "../../common/components";

type Props = {
  onClickFn: () => void;
  tagItems: Tag[] | undefined;
  filterDay: Day | "";
  filterTag: Tag;
  filterDifficulties: Difficulty[];
  setFilterDay: Dispatch<SetStateAction<Day | "">>;
  setFilterTag: Dispatch<SetStateAction<Tag>>;
  setFilterDifficulties: Dispatch<SetStateAction<Difficulty[]>>;
  setFilterActivation: Dispatch<SetStateAction<boolean>>;
};

export const ManageQuestSearchModal: FC<Props> = ({
  onClickFn,
  tagItems,
  filterDay,
  filterTag,
  filterDifficulties,
  setFilterDay,
  setFilterTag,
  setFilterDifficulties,
  setFilterActivation,
}) => {
  const [day, setDay] = useState<Day | "">(filterDay);
  const [difficulties, setDifficulties] = useState<Difficulty[]>(filterDifficulties);
  const [tag, setTag] = useState<Tag>(filterTag);

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

  const handleTag = (tag: Tag) => {
    setTag(tag);
  };

  return (
    <ModalBase onClickClose={onClickFn} onKeyDownClose={onClickFn}>
      <div className="order relative bg-white rounded-lg shadow p-4">
        <ModalHeaderCloseButton onClickClose={onClickFn} />
        <span className="block -mt-4 mb-2 font-cp-font text-rhyth-dark-blue text-xl text-center">クエスト検索</span>
        <div className="flex flex-col gap-y-4">
          <div className="flex gap-3 items-center y-4">
            <div className="w-6 h-6 text-rhyth-gray">
              <ClockIcon />
            </div>
            <span className="font-cp-font text-rhyth-dark-blue">実施曜日</span>
          </div>
          <div className="flex gap-1 ml-auto">
            {DAYS.map((v, i) => {
              return (
                <ManageDayOfTheWeekCheckBox key={v} handleDay={handleDay} day={day} dayOfTheWeek={v} index={i + 1} />
              );
            })}
          </div>
          <div className="flex gap-3 items-center">
            <div className="w-6 h-6 text-rhyth-gray">
              <TagIcon />
            </div>
            <p className="font-cp-font text-rhyth-dark-blue">タグ</p>
            <div className="w-1/2 flex ml-auto">
              <ManageSearchTagsDropdown tagItems={tagItems ?? []} tag={tag} handleTag={handleTag} />
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="w-6 h-6 text-rhyth-gray">
              <StarIcon />
            </div>
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
              setFilterTag(tag);
              setFilterActivation(true);
              onClickFn();
            }}
            className="w-full text-white bg-rhyth-blue hover:bg-rhyth-hover-blue tracking-widest focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            保存
          </button>
        </div>
      </div>
    </ModalBase>
  );
};
