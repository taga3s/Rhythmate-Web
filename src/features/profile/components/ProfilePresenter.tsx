export const ProfilePresenter = () => {
  return (
    <div>
      <div className="my-5 flex flex-col items-center gap-5">
        <div className="w-[300px] p-5 bg-white border border-gray-200 rounded-lg shadow">
          <div className="flex justify-end">
            {/* モーダル実装 */}
            <button>
              <svg
                className="w-[24px] h-[24px] text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 8a4 4 0 1 1 7.8 1.3l-2.5 2.5A4 4 0 0 1 5 8Zm4 5H7a4 4 0 0 0-4 4v1c0 1.1.9 2 2 2h2.2a3 3 0 0 1-.1-1.6l.6-3.4a3 3 0 0 1 .9-1.5L9 13Zm9-5a3 3 0 0 0-2 .9l-6 6a1 1 0 0 0-.3.5L9 18.8a1 1 0 0 0 1.2 1.2l3.4-.7c.2 0 .3-.1.5-.3l6-6a3 3 0 0 0-2-5Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-between gap-4">
            <div>
              <svg
                className="w-[96px] h-[96px] text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a9 9 0 0 0 5-1.5 4 4 0 0 0-4-3.5h-2a4 4 0 0 0-4 3.5 9 9 0 0 0 5 1.5Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
            <div className="flex flex-col justify-center text-right">
              <div>
                <h1 className="text-xl">UserName</h1>
                <p className="text-sm text-gray-400">167.25@rhythmate.com</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="inline-block text-white bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-lg px-5 py-1 text-center mb-2">
              Lv. 5
            </div>
          </div>
          <div>
            <div className="w-full h-4 mb-2 bg-gray-200 rounded-full">
              <div className="h-4 bg-red-600 rounded-full"></div>
            </div>
          </div>
          <p className="text-xs text-right">あと〇〇Expでレベルアップ</p>
        </div>
        <ul className="w-[300px] text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
          <div className="px-4 py-2 flex gap-3 items-center border-b border-gray-200 rounded-t-lg">
            <div>
              <svg
                className="w-[24px] h-[24px] text-red-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"
                />
              </svg>
            </div>
            <p>ログアウト</p>
          </div>
        </ul>
      </div>
    </div>
  );
};
