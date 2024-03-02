import { FC, useState } from "react";
import { ManageDayOfTheWeekCheckBox } from "./ManageDayOfTheWeekCheckBox";
import { ManageDifficultyCheckBox } from "./ManageDifficultyCheckBox";
import { DATES, DIFFICULTIES } from "../constant/constant";
import { Difficulty } from "../api/types";

type Props = {
  onClickFn: () => void;
  filterDate: string;
  setFilterDate: (date: string) => void;
  filterDifficulties: Difficulty[];
  setFilterDifficulties: (difficulty: Difficulty[]) => void;
  setFilterActivation: (activation: boolean) => void;
};

export const QuestSearchModal: FC<Props> = ({
  onClickFn,
  filterDate,
  setFilterDate,
  filterDifficulties,
  setFilterDifficulties,
  setFilterActivation,
}) => {
  const [date, setDate] = useState<string>(filterDate);
  const [difficulties, setDifficulties] = useState<Difficulty[]>(filterDifficulties);

  const handleDate = (newDate: string) => {
    if (newDate === date) {
      setDate("");
    } else {
      setDate(newDate);
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
    <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 z-50">
      <div
        aria-hidden="true"
        className="overflow-y-auto overflow-x-hidden flex justify-center items-center z-50 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          {/* <!-- Modal content --> */}
          <div className="order relative bg-white rounded-lg shadow p-4">
            {/* <!-- Modal header --> */}
            <button
              type="button"
              onClick={onClickFn}
              className=" text-red-600 bg-transparent hover:text-gray-200 hover:bg-red-600 rounded-lg  w-8 h-8 ml-auto flex items-center justify-center"
              data-modal-hide="authentication-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">モーダルを閉じる</span>
            </button>
            {/* <!-- Modal body --> */}
            <h1 className="text-xl text-center -mt-4 mb-2">クエスト検索</h1>
            <div className="flex flex-col gap-y-4">
              <div className="flex items-center y-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#888888"
                  className="mr-2 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <p>実施曜日</p>
              </div>
              <div className="flex ml-auto">
                {DATES.map((v, i) => {
                  return (
                    <ManageDayOfTheWeekCheckBox
                      key={i}
                      handleDate={handleDate}
                      date={date}
                      dayOfTheWeek={v}
                      index={i + 1}
                    />
                  );
                })}
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#888888"
                  className="mr-2 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                </svg>
                <p>難易度</p>
                <div className="flex ml-auto">
                  {DIFFICULTIES.map((v, i) => {
                    return (
                      <ManageDifficultyCheckBox
                        key={i}
                        handleDifficulties={handleDifficulty}
                        difficulty={v}
                        filterDifficulties={filterDifficulties}
                      />
                    );
                  })}
                </div>
              </div>
              <button
                type="submit"
                onClick={() => {
                  setFilterDate(date);
                  setFilterDifficulties(difficulties);
                  setFilterActivation(true);
                  onClickFn();
                }}
                className="w-full text-white bg-[#0087EE] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                保存
              </button>
              <button
                type="submit"
                onClick={() => {
                  setFilterDate("");
                  setFilterDifficulties([]);
                  setFilterActivation(false);
                  onClickFn();
                }}
                className="w-full text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                条件をリセット
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
