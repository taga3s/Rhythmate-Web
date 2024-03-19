import { FC, useState } from "react";
import { TagsColorDropdown } from "./TagsColorDropdown";

type Props = {
  closeModal: () => void;
};

export const TagsEditModal: FC<Props> = ({ closeModal }) => {
  const [isColorSelectOpen, setIsColorSelectOpen] = useState<boolean>(false);

  const openColorSelect = () => {
    setIsColorSelectOpen(true);
  };
  const closeColorSelect = () => {
    setIsColorSelectOpen(false);
  };

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
              <h3 className="text-xl font-bold text-rhyth-dark-blue">タグ編集</h3>
              <button
                type="button"
                onClick={closeModal}
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
              <form
                className="space-y-4"
                action="#"
                // onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex items-center justify-between">
                  <label className="flex gap-2 mb-2 text-sm font-bold text-rhyth-dark-blue my-2" htmlFor="tag-name">
                    <svg
                      className="w-6 h-6 text-rhyth-gray"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10" />
                    </svg>
                    <span>タグ名</span>
                  </label>
                  <input
                    id="tag-name"
                    type="text"
                    // defaultValue={beforeUserName}
                    className="bg-white border border-rhyth-light-gray text-rhyth-dark-blue text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-1/2 p-2"
                    placeholder="username"
                    // {...register("name")}
                    required
                  />
                  {/* {errors.name && <FormErrorMsg msg={errors.name.message ?? ""} />} */}
                </div>
                <div className="flex items-start justify-between">
                  <label className="flex gap-2 mb-2 text-sm font-bold text-rhyth-dark-blue my-2" htmlFor="tag-color">
                    <svg
                      className="w-6 h-6 text-rhyth-gray"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11.613a2 2 0 0 0 1.346-.52l4.4-4a2 2 0 0 0 0-2.96l-4.4-4A2 2 0 0 0 15.613 6H4Z" />
                    </svg>
                    <span>色ラベル</span>
                  </label>
                  <div className="w-1/2">
                    <button
                      id="tag-color"
                      data-dropdown-toggle="dropdownDivider"
                      className="w-full text-white bg-rhyth-gray font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center"
                      onClick={isColorSelectOpen ? closeColorSelect : openColorSelect}
                      type="button"
                    >
                      色を選択
                      <svg
                        className="w-2.5 h-2.5 ms-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    {isColorSelectOpen && <TagsColorDropdown onCloseFn={closeColorSelect} />}
                  </div>
                  {/* <input
                    type="text"
                    // defaultValue={beforeUserName}
                    className="bg-white border border-rhyth-light-gray text-rhyth-dark-blue text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-1/2 p-2"
                    placeholder="username"
                    // {...register("name")}
                    required
                  /> */}
                  {/* {errors.name && <FormErrorMsg msg={errors.name.message ?? ""} />} */}
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-rhyth-blue hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-md"
                >
                  決定する
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
