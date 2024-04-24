import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { Quest } from "../../../api/quest/model";
import type { Day, Difficulty } from "../../../api/quest/types";
import { Loading, LoadingContainer } from "../../common/components";
import { useSearchModalIsOpen, useSetSearchModalIsOpen } from "../../common/contexts/searchModalIsOpenContext";
import { useQueryQuestList } from "../api/quest/hooks/useQueryQuest";
import { DAYS } from "../common/constant/constant";
import { useQueryTagList } from "../tags/api/tag/hooks/useQueryTag";
import { ManageDayOfTheWeekSwitchButton } from "./ManageDayOfTheWeekSwitchButton";
import { ManageNewButton } from "./ManageNewButton";
import { ManageQuestCard } from "./ManageQuestCard";
import { ManageQuestSearchModal } from "./ManageQuestSearchModal,";
import { ManageTimetable } from "./ManageTimetable";

type QuestWithTag = Quest & {
  tagName: string | undefined;
  tagColor: string | undefined;
};

export const ManagePresenter = () => {
  const navigate = useNavigate();
  const setSearchModalIsOpen = useSetSearchModalIsOpen();
  const searchModalIsOpen = useSearchModalIsOpen();
  const [filterDay, setFilterDay] = useState<Day | "">("");
  const [filterTag, setFilterTag] = useState<string | "">("");
  const [filterDifficulties, setFilterDifficulties] = useState<Difficulty[]>([]);
  const [filterActivation, setFilterActivation] = useState<boolean>(false);
  const [dayOfTheWeekView, setDayOfTheWeekView] = useState<Day>("MON");
  const [manageView, setManageView] = useState<"Timetable" | "Card">("Timetable");

  const closeQuestSearchModal = () => {
    setSearchModalIsOpen(false);
  };

  const { data: quests, isLoading: questListIsLoading } = useQueryQuestList();
  const { data: tags, isLoading: tagListIsLoading } = useQueryTagList();
  const [questList, setQuestList] = useState<QuestWithTag[]>([]);
  useEffect(() => {
    const allQuests = quests?.map((quest) => {
      const tag = tags?.find((tag) => tag.id === quest.tagId);
      return {
        tagName: tag?.name,
        tagColor: tag?.color,
        ...quest,
      };
    });
    setQuestList(allQuests ?? []);
  }, [questListIsLoading, tagListIsLoading]);

  const filteredData = questList?.filter((quest) => {
    if (filterDay && filterDifficulties.length) {
      return quest.days.includes(filterDay) && filterDifficulties.some((difficulty) => quest.difficulty === difficulty);
    } else if (filterDay) {
      return quest.days.includes(filterDay);
    } else if (filterTag) {
      return quest.tagId.includes(filterTag);
    } else if (filterDifficulties.length) {
      return filterDifficulties.some((difficulty) => quest.difficulty === difficulty);
    } else {
      return true;
    }
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

  const dayOfTheWeekQuests = filterQuestsByDayOfTheWeek(questList ?? []);
  const sortedDayOfTheWeekQuests = sortQuestsByTime(dayOfTheWeekQuests);

  const handleManageView = () => {
    if (manageView === "Timetable") {
      setManageView("Card");
    } else {
      setManageView("Timetable");
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <h1 className="font-cp-font tracking-widest text-rhyth-gray text-xl font-bold ">
          {manageView === "Timetable" ? "曜日別クエスト" : "全てのクエスト"}
        </h1>
        <button
          className="flex items-center gap-1 bg-white py-2 px-4 rounded-full border-2 border-rhyth-light-gray shadow-sm hover:bg-rhyth-bg-dark-gray"
          onClick={handleManageView}
        >
          <svg
            className="w-6 h-6 text-rhyth-blue"
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
              d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"
            />
          </svg>
          <span className="text-sm font-bold text-rhyth-dark-blue">
            {manageView === "Timetable" ? "全表示" : "曜日別表示"}
          </span>
        </button>
      </div>
      {questListIsLoading ? (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      ) : filterActivation ? (
        filteredData?.length ? (
          <ul className="mt-4 flex flex-col items-center gap-6">
            {filteredData?.map((quest) => {
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
          <div className="w-full gap-4 flex flex-col items-center mx-auto mt-24 text-xl">
            <div>検索結果無し</div>
            <div>条件を変えて再検索してください</div>
          </div>
        )
      ) : quests?.length ? (
        <div>
          {manageView === "Timetable" ? (
            <div className="flex flex-col w-full mt-4">
              <div className="flex items-center">
                {DAYS.map((day, i) => {
                  return (
                    <ManageDayOfTheWeekSwitchButton
                      key={i}
                      view={day}
                      dayOfTheWeek={dayOfTheWeekView}
                      onClickFn={setDayOfTheWeekView}
                    />
                  );
                })}
              </div>
              <ManageTimetable questList={sortedDayOfTheWeekQuests} />
            </div>
          ) : (
            <ul className="mt-4 flex flex-col items-center gap-6">
              {questList?.map((quest) => {
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="currentColor"
            className="w-36 h-36 stroke-rhyth-blue"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
          <h1 className="text-lg">まずはクエストを作成しましょう！</h1>
          <button
            className="bg-rhyth-blue hover:bg-rhyth-hover-blue text-white flex mt-3 h-12 w-44 items-center justify-center rounded-lg"
            onClick={() => navigate({ to: "/manage/new" })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 h-7 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
            <span>クエストを作成</span>
          </button>
        </div>
      )}
      <ManageNewButton />
      {searchModalIsOpen && (
        <ManageQuestSearchModal
          onClickFn={closeQuestSearchModal}
          filterDay={filterDay}
          setFilterDay={setFilterDay}
          setFilterTag={setFilterTag}
          tagItems={tags}
          filterDifficulties={filterDifficulties}
          setFilterDifficulties={setFilterDifficulties}
          setFilterActivation={setFilterActivation}
        />
      )}
    </div>
  );
};
