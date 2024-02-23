import { useNavigate } from "@tanstack/react-router";
import { QuestCardBottom } from "./ManageQuestCardBottom";
import { Star } from "./ManageStar";

export const ManageQuestCard = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-64 max-w-sm bg-white border border-[#AAAAAA] border-soid rounded-lg shadow">
      <div className="px-4 py-2">
        <button
          className="bg-[#D9D9D9] border border-[#AAAAAA] rounded w-28 h-7 block ml-auto border-1"
          onClick={() => navigate({ to: "/quests/manage/edit" })}
        >
          <div className="flex items-center gap-2 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#D9D9D9"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
            <p className="text-sm">編集する</p>
          </div>
        </button>
        <h1 className="mt-1 mb-1 text-lg font-semibold">英単語の学習</h1>
        <hr className="h-0.5 bg-[#AAAAAA]" />
        <h3 className="text-sm mt-1">前回の続きから50単語取り組む</h3>
        <div className="flex gap-2 items-center py-1 font-semibold text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <h1>16:00~</h1>
          <h1>20分間</h1>
          <h1>月・水・土</h1>
        </div>
        <div className="flex items-center">
          <Star />
          <Star />
          <Star />
          <div className="bg-[#0087EE] h-5 w-20 block ml-auto border  border-[#AAAAAA] rounded flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
            </svg>
            <p className="text-center text-xs text-white">英語</p>
          </div>
        </div>
      </div>
      <div className="flex items-end">
        <QuestCardBottom />
      </div>
    </div>
  );
};
