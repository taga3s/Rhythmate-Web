import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Day, Difficulty } from "../../../api/quest/types";
import { Loading, LoadingContainer } from "../../common/components";
import { useSearchModalIsOpen, useSetSearchModalIsOpen } from "../../common/contexts/searchModalIsOpenContext";
import { useQueryQuestList } from "../api/quest/hooks/useQueryQuest";
import { ManageNewButton } from "./ManageNewButton";
import { ManageQuestCard } from "./ManageQuestCard";
import { ManageQuestSearchModal } from "./ManageQuestSearchModal,";
import { ManageTimetable } from "./ManageTimetable";
import { Quest } from "../../../api/quest/model";

export const ManagePresenter = () => {
  const navigate = useNavigate();
  const setSearchModalIsOpen = useSetSearchModalIsOpen();
  const searchModalIsOpen = useSearchModalIsOpen();
  const [filterDay, setFilterDay] = useState<Day | "">("");
  const [filterDifficulties, setFilterDifficulties] = useState<Difficulty[]>([]);
  const [filterActivation, setFilterActivation] = useState<boolean>(false);

  const [dayOfTheWeekView, setDayOfTheWeekView] = useState<Day>("MON");

  const closeQuestSearchModal = () => {
    setSearchModalIsOpen(false);
  };

  const { data: quests, isLoading } = useQueryQuestList();

  const filteredData = quests?.filter((quest) => {
    if (filterDay && filterDifficulties.length) {
      return quest.days.includes(filterDay) && filterDifficulties.some((difficulty) => quest.difficulty === difficulty);
    } else if (filterDay) {
      return quest.days.includes(filterDay);
    } else if (filterDifficulties.length) {
      return filterDifficulties.some((difficulty) => quest.difficulty === difficulty);
    } else {
      return true;
    }
  });

  const filterQuestsByDayOfTheWeek = (questList: Quest[]) => {
    return questList.filter((quest) => {
      const isDayOfTheWeek: boolean = quest.days.some((day: string) => day === dayOfTheWeekView);
      return isDayOfTheWeek ? quest : null;
    });
  };

  const sortQuestsByTime = (questList: Quest[]) => {
    return questList.sort((a, b) => {
      return a.startsAt > b.startsAt ? 1 : -1;
    });
  };

  const DayOfTheWeekQuests = filterQuestsByDayOfTheWeek(quests ?? []);
  const sortedDayOfTheWeekQuests = sortQuestsByTime(DayOfTheWeekQuests);

  return (
    <div className="w-full">
      {isLoading ? (
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
          <div className="flex flex-col w-full mt-4">
            <div className="flex items-center">
              <button
                className={`w-full px-4 py-2 font-cp-font rounded-t-lg shadow-xl ${
                  dayOfTheWeekView === "MON"
                    ? "text-white bg-rhyth-light-blue"
                    : "bg-white text-rhyth-dark-blue hover:bg-rhyth-hover-light-gray"
                }`}
                onClick={() => setDayOfTheWeekView("MON")}
              >
                月
              </button>
              <button
                className={`w-full px-4 py-2 font-cp-font rounded-t-lg shadow-xl ${
                  dayOfTheWeekView === "TUE"
                    ? "text-white bg-rhyth-light-blue"
                    : "bg-white text-rhyth-dark-blue hover:bg-rhyth-hover-light-gray"
                }`}
                onClick={() => setDayOfTheWeekView("TUE")}
              >
                火
              </button>
              <button
                className={`w-full px-4 py-2 font-cp-font rounded-t-lg shadow-xl ${
                  dayOfTheWeekView === "WED"
                    ? "text-white bg-rhyth-light-blue"
                    : "bg-white text-rhyth-dark-blue hover:bg-rhyth-hover-light-gray"
                }`}
                onClick={() => setDayOfTheWeekView("WED")}
              >
                水
              </button>
              <button
                className={`w-full px-4 py-2 font-cp-font rounded-t-lg shadow-xl ${
                  dayOfTheWeekView === "THU"
                    ? "text-white bg-rhyth-light-blue"
                    : "bg-white text-rhyth-dark-blue hover:bg-rhyth-hover-light-gray"
                }`}
                onClick={() => setDayOfTheWeekView("THU")}
              >
                木
              </button>
              <button
                className={`w-full px-4 py-2 font-cp-font rounded-t-lg shadow-xl ${
                  dayOfTheWeekView === "FRI"
                    ? "text-white bg-rhyth-light-blue"
                    : "bg-white text-rhyth-dark-blue hover:bg-rhyth-hover-light-gray"
                }`}
                onClick={() => setDayOfTheWeekView("FRI")}
              >
                金
              </button>
              <button
                className={`w-full px-4 py-2 font-cp-font rounded-t-lg shadow-xl ${
                  dayOfTheWeekView === "SAT"
                    ? "text-white bg-rhyth-light-blue"
                    : "bg-white text-rhyth-dark-blue hover:bg-rhyth-hover-light-gray"
                }`}
                onClick={() => setDayOfTheWeekView("SAT")}
              >
                土
              </button>
              <button
                className={`w-full px-4 py-2 font-cp-font rounded-t-lg shadow-xl ${
                  dayOfTheWeekView === "SUN"
                    ? "text-white bg-rhyth-light-blue"
                    : "bg-white text-rhyth-dark-blue hover:bg-rhyth-hover-light-gray"
                }`}
                onClick={() => setDayOfTheWeekView("SUN")}
              >
                日
              </button>
            </div>
            <ManageTimetable questList={sortedDayOfTheWeekQuests} />
          </div>
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
          filterDifficulties={filterDifficulties}
          setFilterDifficulties={setFilterDifficulties}
          setFilterActivation={setFilterActivation}
        />
      )}
    </div>
  );
};
