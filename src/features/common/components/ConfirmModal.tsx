import { FC } from "react";

type Props = {
  text: string;
  confirmBtnText: string;
  cancelBtnText: string;
  btnColor: "green" | "blue" | "red";
  actionFn: () => void;
  closeModal: () => void;
};

export const ConfirmModal: FC<Props> = (props) => {
  const handleConfirm = () => {
    actionFn();
    closeModal();
  };
  const { text, confirmBtnText, cancelBtnText, btnColor, actionFn, closeModal } = props;
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-rhyth-black bg-opacity-50 z-50">
      <div
        aria-hidden="true"
        className="overflow-y-auto overflow-x-hidden flex justify-center items-center z-50 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          {/* <!-- Modal content --> */}
          <div className="order relative bg-rhyth-bg-gray border rounded-lg shadow">
            {/* <!-- Modal body --> */}
            <div className="flex justify-center pt-4">
              <svg
                className="w-[64px] h-[64px] text-rhyth-orange"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M18.5 3.1c.3.2.5.5.5.9v16a1 1 0 0 1-1.6.8L12 17V7.1l5.4-4a1 1 0 0 1 1 0ZM22 12a4 4 0 0 1-2 3.5v-7c1.2.7 2 2 2 3.5ZM10 8H4a1 1 0 0 0-1 1v6c0 .6.4 1 1 1h6V8Zm0 9H5v3c0 .6.4 1 1 1h3c.6 0 1-.4 1-1v-3Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="p-4 md:p-4">
              <p className="text-center text-lg">{text}</p>
              <div className="space-y-4 pt-4">
                <button
                  type="submit"
                  onClick={handleConfirm}
                  className={`w-full text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
                  ${
                    btnColor === "green"
                      ? `bg-rhyth-green hover:bg-green-500`
                      : btnColor === "blue"
                        ? `bg-rhyth-blue hover:bg-blue-500`
                        : "bg-rhyth-red hover:bg-red-500"
                  }
                  `}
                >
                  {confirmBtnText}
                </button>
                <button
                  type="submit"
                  onClick={closeModal}
                  className="w-full text-white bg-rhyth-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  {cancelBtnText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
