import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ManageNewButton } from "./ManageNewButton";
import { ManageQuestCard } from "./ManageQuestCard";
import { QuestSearchModal } from "./ManageQuestSearchModal,";
import { QuestSearchModalButton } from "./ManageQuestSearchMordalButton";
import { useQueryQuestList } from "../../quests/api/hooks/useQueryQuest";

export const ManagePresenter = () => {
  const navigate = useNavigate();
  const [isQuestSearchModalOpen, setIsQuestSearchModalOpen] = useState<boolean>(false);
  const [filterDate, setFilterDate] = useState<string>("");
  const [filterDifficulties, setFilterDifficulties] = useState<string[]>([""]);
  const [filterActivation, setFilterActivation] = useState<boolean>(false);

  const openQuestSearchModal = () => {
    setIsQuestSearchModalOpen(true);
  };
  const closeQuestSearchModal = () => {
    setIsQuestSearchModalOpen(false);
  };

  const { data, isLoading } = useQueryQuestList();

  const filteredData = data?.filter((quest) => {
    if (filterDate && filterDifficulties.length) {
      return (
        quest.dates.includes(filterDate) && filterDifficulties.some((difficulty) => quest.difficulty === difficulty)
      );
    } else if (filterDate) {
      return quest.dates.includes(filterDate);
    } else if (filterDifficulties) {
      return filterDifficulties.some((difficulty) => quest.difficulty === difficulty);
    } else {
      return true;
    }
  });

  return (
    <div className="w-full">
      {isLoading ? (
        <div>Loading...</div>
      ) : filterActivation ? (
        filteredData?.length ? (
          <div className="w-full">
            <QuestSearchModalButton onClickFn={openQuestSearchModal} />
            <ul className="mt-4 flex flex-col items-center gap-6">
              {filteredData?.map((value) => {
                return (
                  <ManageQuestCard
                    key={value.id}
                    id={value.id}
                    title={value.title}
                    description={value.description}
                    startsAt={value.startsAt}
                    minutes={value.minutes}
                    difficulty={value.difficulty}
                    dates={value.dates}
                    continuousLevel={value.continuationLevel}
                  />
                );
              })}
            </ul>
          </div>
        ) : (
          <div>
            <QuestSearchModalButton onClickFn={openQuestSearchModal} />
            <div className="w-full gap-4 flex flex-col items-center mx-auto mt-24 text-xl">
              <div>検索結果無し</div>
              <div>条件を変えて再検索してください</div>
            </div>
          </div>
        )
      ) : data?.length ? (
        <div className="w-full">
          <QuestSearchModalButton onClickFn={openQuestSearchModal} />
          <ul className="mt-4 flex flex-col items-center gap-6">
            {data?.map((value) => {
              return (
                <ManageQuestCard
                  key={value.id}
                  id={value.id}
                  title={value.title}
                  description={value.description}
                  startsAt={value.startsAt}
                  minutes={value.minutes}
                  difficulty={value.difficulty}
                  dates={value.dates}
                  continuousLevel={value.continuationLevel ?? 0}
                />
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="w-full gap-4 flex flex-col items-center mx-auto mt-24">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="currentColor"
            className="w-36 h-36 stroke-[#0087EE]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
          <h1 className="text-lg">まずはクエストを作成しましょう！</h1>
          <button
            className="bg-[#0087EE] text-white flex mt-3 h-12 w-44 items-center justify-center rounded-lg"
            onClick={() => navigate({ to: "/quests/manage/new" })}
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
      {isQuestSearchModalOpen && (
        <QuestSearchModal
          onClickFn={closeQuestSearchModal}
          setFilterDate={setFilterDate}
          setFilterDifficulties={setFilterDifficulties}
          setFilterActivation={setFilterActivation}
        />
      )}
    </div>
  );
};
