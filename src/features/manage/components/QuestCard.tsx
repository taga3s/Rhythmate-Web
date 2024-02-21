export const Star = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="#FFAA00" viewBox="0 0 24 24" stroke="none" className="w-5 h-5">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
      />
    </svg>
  );
};

export const QuestCard = () => {
  return (
    <div className="w-80 h-56 max-w-sm bg-white border border-[#AAAAAA] border-soid rounded-lg shadow">
      <div className="px-4 py-2">
        <button className="bg-[#D9D9D9] border border-[#AAAAAA] rounded w-28 h-7 block ml-auto border-1">
          <div className="flex items-center gap-2 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#D9D9D9"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
            <p className="underline text-sm">編集する</p>
          </div>
        </button>
        <h1 className="mt-1 mb-1 text-lg">英単語の学習</h1>
        <hr className="h-0.5 bg-[#AAAAAA]" />
        <h3 className="text-sm mt-1">前回の続きから50単語取り組む</h3>
        <div className="flex gap-2 items-center py-1 font-semibold text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <h1>16:00~</h1>
          <h1>20分間</h1>
          <h1>月・水・土</h1>
        </div>
        <div className="flex items-center">
          <Star />
          <Star />
          <Star />
          <div className="bg-[#0087EE] h-5 w-20 block ml-auto border  border-[#AAAAAA] rounded" />
        </div>
      </div>
      <div className="bg-[#D9D9D9] border border-[#AAAAAA] shadow-md rounded h-11 mt-1 w-full" />
    </div>
  );
};
