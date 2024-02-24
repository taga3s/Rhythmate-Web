import { FC } from "react";
import { Star } from "./ManageStar";

type Props = {
  onClickFn: () => void;
};

export const QuestSearchModal: FC<Props> = ({ onClickFn }) => {
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
              className=" text-red-600 bg-transparent hover:text-gray-200 hover:bg-red-600 rounded-lg  w-8 h-8  block ml-auto flex items-center justify-center"
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
                  stroke-width="1.5"
                  stroke="#888888"
                  className="mr-2 w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <p>実施頻度</p>
              </div>
              <div className="flex ml-auto">
                <div className="ml-auto">
                  <input type="checkbox" className="hidden peer" id="1" />
                  <label
                    htmlFor="1"
                    className="ml-auto peer-checked:bg-[#0087EE] peer-checked:text-white px-2 py-1 rounded border border-black"
                  >
                    月
                  </label>
                </div>
                <div>
                  <input type="checkbox" className="hidden peer" id="2" />
                  <label
                    htmlFor="2"
                    className="ml-auto peer-checked:bg-[#0087EE] peer-checked:text-white px-2 py-1 rounded border border-black"
                  >
                    火
                  </label>
                </div>
                <div>
                  <input type="checkbox" className="hidden peer" id="3" />
                  <label
                    htmlFor="3"
                    className="ml-auto peer-checked:bg-[#0087EE] peer-checked:text-white px-2 py-1 rounded border border-black"
                  >
                    水
                  </label>
                </div>
                <div>
                  <input type="checkbox" className="hidden peer" id="4" />
                  <label
                    htmlFor="4"
                    className="ml-auto peer-checked:bg-[#0087EE] peer-checked:text-white px-2 py-1 rounded border border-black"
                  >
                    木
                  </label>
                </div>
                <div>
                  <input type="checkbox" className="hidden peer" id="5" />
                  <label
                    htmlFor="5"
                    className="ml-auto peer-checked:bg-[#0087EE] peer-checked:text-white px-2 py-1 rounded border border-black"
                  >
                    金
                  </label>
                </div>
                <div>
                  <input type="checkbox" className="hidden peer" id="6" />
                  <label
                    htmlFor="6"
                    className="ml-auto peer-checked:bg-[#0087EE] peer-checked:text-white px-2 py-1 rounded border border-black"
                  >
                    土
                  </label>
                </div>
                <div>
                  <input type="checkbox" className="hidden peer" id="7" />
                  <label
                    htmlFor="7"
                    className="ml-auto peer-checked:bg-[#0087EE] peer-checked:text-white px-2 py-1 rounded border border-black"
                  >
                    日
                  </label>
                </div>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#888888"
                  className="mr-2 w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                  />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z" />
                </svg>
                <p>タグ</p>
                <select id="tag" className="ml-auto w-32 h-8 border border-black rounded-lg">
                  <option value="">選択</option>
                </select>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#888888"
                  className="mr-2 w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
                  />
                </svg>
                <p>難易度</p>
                <div className="flex ml-auto">
                  <div>
                    <input type="checkbox" className="hidden peer" id="easy" />
                    <label
                      htmlFor="easy"
                      className="flex ml-auto peer-checked:bg-[#0087EE] px-2 py-1 rounded border border-black"
                    >
                      <Star />
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" className="hidden peer" id="medium" />
                    <label
                      htmlFor="medium"
                      className="flex ml-auto peer-checked:bg-[#0087EE] px-2 py-1 rounded border border-black"
                    >
                      <Star />
                      <Star />
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" className="hidden peer" id="hard" />
                    <label
                      htmlFor="hard"
                      className="flex ml-auto peer-checked:bg-[#0087EE] px-2 py-1 rounded border border-black"
                    >
                      <Star />
                      <Star />
                      <Star />
                    </label>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="border-2 border-black w-full text-white bg-[#0087EE] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                保存
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
