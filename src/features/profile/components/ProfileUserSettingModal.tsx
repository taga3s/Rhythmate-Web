import { FC } from "react";

type Props = {
  onClickFn: () => void;
};

export const ProfileUserSettingsModal: FC<Props> = ({ onClickFn }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 z-50">
      <div
        aria-hidden="true"
        className="overflow-y-auto overflow-x-hidden flex justify-center items-center z-50 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          {/* <!-- Modal content --> */}
          <div className="order relative bg-white rounded-lg shadow">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-4 border-b rounded-t">
              <h3 className="text-xl font-semibold text-gray-900">ユーザー情報変更</h3>
              <button
                type="button"
                onClick={onClickFn}
                className="end-2.5 text-red-600 bg-transparent hover:text-gray-200 hover:bg-red-600 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
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
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-4 md:p-4">
              <form className="space-y-4" action="#">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 my-4">ユーザーネーム</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <button
                  type="submit"
                  onClick={onClickFn}
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  保存
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
