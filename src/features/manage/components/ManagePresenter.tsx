import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import type { Quest } from "../../../api/quest/model";
import type { Day, Difficulty } from "../../../api/quest/types";
import { useSearchModalIsOpen, useSetSearchModalIsOpen } from "../../common/contexts/searchModalIsOpenContext";
import { useQueryQuestList } from "../hooks/useQueryQuest";
import { ManageNewButton } from "./ManageNewButton";
import { ManageQuestCard } from "./ManageQuestCard";
import { ManageQuestSearchModal } from "./ManageQuestSearchModal,";
import { ManageTimetable } from "./ManageTimetable";
import type { Tag } from "../../../api/tag/model";
import { getTodayEn } from "../../common/utils";
import { useQueryTagList } from "../../tags/hooks/useQueryTag";
import { AddIcon, ChatIcon, CloseIcon, SwitchIcon } from "../../common/components";

type QuestWithTag = Quest & {
  tagName: string | undefined;
  tagColor: string | undefined;
};

export const ManagePresenter = () => {
  const navigate = useNavigate();
  const setSearchModalIsOpen = useSetSearchModalIsOpen();
  const searchModalIsOpen = useSearchModalIsOpen();

  const [manageView, setManageView] = useState<"Timetable" | "Card">("Timetable");
  const [dayOfTheWeekView, setDayOfTheWeekView] = useState<Day>(getTodayEn().toUpperCase() as Day);
  const [filterDay, setFilterDay] = useState<Day | "">("");
  const [filterTag, setFilterTag] = useState<Tag>({ id: "", name: "", color: "" });
  const [filterDifficulties, setFilterDifficulties] = useState<Difficulty[]>([]);
  const [filterActivation, setFilterActivation] = useState<boolean>(false);

  const { data: questListData } = useQueryQuestList();
  const { data: tagListData } = useQueryTagList();

  const allQuestList = questListData?.map((quest) => {
    const tag = tagListData?.find((tag) => tag.id === quest.tagId);
    return {
      tagName: tag?.name,
      tagColor: tag?.color,
      ...quest,
    };
  });

  const filterQuestsByDayOfTheWeek = (questList: QuestWithTag[]) => {
    return questList.filter((quest) => {
      const isDayOfTheWeek: boolean = quest.days.some((day: string) => day === dayOfTheWeekView);
      return isDayOfTheWeek ? quest : null;
    });
  };

  const sortQuestsByTime = (questList: QuestWithTag[]) => {
    return questList.sort((a, b) => {
      return a.startsAt > b.startsAt ? 1 : -1;
    });
  };

  const dayOfTheWeekQuests = filterQuestsByDayOfTheWeek(allQuestList ?? []);
  const sortedDayOfTheWeekQuests = sortQuestsByTime(dayOfTheWeekQuests);

  const filteredQuestList = allQuestList?.filter((quest) => {
    if (filterDay !== "" && filterDifficulties.length && filterTag.id !== "") {
      return (
        quest.days.includes(filterDay) &&
        filterDifficulties.some((difficulty) => quest.difficulty === difficulty) &&
        quest.tagId === filterTag.id
      );
    }
    if (filterDay !== "" && filterDifficulties.length) {
      return quest.days.includes(filterDay) && filterDifficulties.some((difficulty) => quest.difficulty === difficulty);
    }
    if (filterDay !== "" && filterTag.id !== "") {
      return quest.days.includes(filterDay) && quest.tagId === filterTag.id;
    }
    if (filterDifficulties.length && filterTag.id !== "") {
      return filterDifficulties.some((difficulty) => quest.difficulty === difficulty) && quest.tagId === filterTag.id;
    }
    if (filterDay !== "") {
      return quest.days.includes(filterDay);
    }
    if (filterDifficulties.length) {
      return filterDifficulties.some((difficulty) => quest.difficulty === difficulty);
    }
    if (filterTag.id !== "") {
      return quest.tagId === filterTag.id;
    }
    return true;
  });

  const handleManageView = () => {
    setManageView((prev) => (prev === "Timetable" ? "Card" : "Timetable"));
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <span className="font-cp-font tracking-widest text-rhyth-gray text-xl font-bold ">クエスト一覧</span>
        {filterActivation ? (
          <button
            type="button"
            className="flex items-center gap-1 bg-white py-2 px-4 rounded-full border-2 border-rhyth-light-gray shadow-sm hover:bg-rhyth-bg-dark-gray"
            onClick={() => {
              setFilterDay("");
              setFilterDifficulties([]);
              setFilterTag({ id: "", name: "", color: "" });
              setFilterActivation(false);
            }}
          >
            <div className="w-6 h-6 text-rhyth-red">
              <CloseIcon />
            </div>
            <span className="text-sm font-bold text-rhyth-dark-blue">検索をやめる</span>
          </button>
        ) : (
          <button
            type="button"
            className="flex items-center gap-1 bg-white py-2 px-4 rounded-full border-2 border-rhyth-light-gray shadow-sm hover:bg-rhyth-bg-dark-gray"
            onClick={handleManageView}
          >
            <div className="w-6 h-6 text-rhyth-blue">
              <SwitchIcon />
            </div>
            <span className="text-sm font-bold text-rhyth-dark-blue">
              {manageView === "Timetable" ? "全表示" : "曜日別表示"}
            </span>
          </button>
        )}
      </div>
      {filterActivation ? (
        filteredQuestList.length > 0 ? (
          <ul className="flex flex-col items-center gap-6 mt-4">
            {filteredQuestList?.map((quest) => {
              return (
                <ManageQuestCard
                  key={quest.id}
                  id={quest.id}
                  title={quest.title}
                  description={quest.description}
                  startsAt={quest.startsAt}
                  minutes={quest.minutes}
                  difficulty={quest.difficulty}
                  days={quest.days}
                  continuationLevel={quest.continuationLevel}
                  tagName={quest.tagName}
                  tagColor={quest.tagColor}
                />
              );
            })}
          </ul>
        ) : (
          <div className="w-full flex flex-col items-center gap-4 mx-auto mt-24 text-xl">
            <span>検索結果無し</span>
            <span>条件を変えて再検索してください</span>
          </div>
        )
      ) : questListData.length ? (
        <div>
          {manageView === "Timetable" ? (
            <ManageTimetable
              questList={sortedDayOfTheWeekQuests}
              dayOfTheWeekView={dayOfTheWeekView}
              setDayOfTheWeekView={setDayOfTheWeekView}
            />
          ) : (
            <ul className="mt-4 flex flex-col items-center gap-6">
              {allQuestList.map((quest) => {
                return (
                  <ManageQuestCard
                    key={quest.id}
                    id={quest.id}
                    title={quest.title}
                    description={quest.description}
                    startsAt={quest.startsAt}
                    minutes={quest.minutes}
                    difficulty={quest.difficulty}
                    days={quest.days}
                    continuationLevel={quest.continuationLevel}
                    tagName={quest.tagName}
                    tagColor={quest.tagColor}
                  />
                );
              })}
            </ul>
          )}
        </div>
      ) : (
        <div className="w-full gap-4 flex flex-col items-center mx-auto mt-24">
          <div className="w-36 h-36 text-rhyth-blue">
            <ChatIcon />
          </div>
          <h1 className="text-lg">まずはクエストを作成しましょう！</h1>
          <button
            type="button"
            className="bg-rhyth-blue hover:bg-rhyth-hover-blue text-white flex mt-3 h-12 w-44 items-center justify-center rounded-lg"
            onClick={() => navigate({ to: "/manage/new" })}
          >
            <div className="w-7 h-7 mr-2">
              <AddIcon />
            </div>
            <span>クエストを作成</span>
          </button>
        </div>
      )}
      <ManageNewButton />
      {searchModalIsOpen && (
        <ManageQuestSearchModal
          onClickFn={() => setSearchModalIsOpen(false)}
          tagItems={tagListData}
          filterDay={filterDay}
          filterDifficulties={filterDifficulties}
          filterTag={filterTag}
          setFilterDay={setFilterDay}
          setFilterTag={setFilterTag}
          setFilterDifficulties={setFilterDifficulties}
          setFilterActivation={setFilterActivation}
        />
      )}
    </>
  );
};
