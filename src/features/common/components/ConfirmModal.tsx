import { FC } from "react";
import { ModalBase } from "./modal/ModalBase";
import { ModalHeaderCloseButton } from "./modal/ModalHeaderCloseButton";

type Props = {
  text: string;
  confirmBtnText: string;
  cancelBtnText: string;
  btnColor: "green" | "blue" | "red";
  actionFn: () => void;
  closeModal: () => void;
};

export const ConfirmModal: FC<Props> = (props) => {
  const { text, confirmBtnText, cancelBtnText, btnColor, actionFn, closeModal } = props;

  const handleConfirm = () => {
    actionFn();
    closeModal();
  };

  return (
    <ModalBase onClickClose={closeModal}>
      <div className="order relative bg-white rounded-lg shadow p-4">
        <ModalHeaderCloseButton onClickClose={closeModal} />
        {/* <!-- Modal body --> */}
        <div className="flex flex-col items-center gap-1">
          <div className="flex justify-center">
            <svg
              className="w-[70px] h-[70px] text-rhyth-orange"
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
          <p className="text-center text-lg tracking-wide font-medium">{text}</p>
          <div className="space-y-4 pt-4 w-full">
            <button
              type="submit"
              onClick={handleConfirm}
              className={`w-full text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
                  ${
                    btnColor === "green"
                      ? `bg-rhyth-green hover:bg-rhyth-hover-green`
                      : btnColor === "blue"
                        ? `bg-rhyth-blue hover:bg-rhyth-hover-blue`
                        : "bg-rhyth-red hover:bg-rhyth-hover-red"
                  }
                  `}
            >
              {confirmBtnText}
            </button>
            <button
              type="submit"
              onClick={closeModal}
              className="w-full text-white bg-rhyth-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              {cancelBtnText}
            </button>
          </div>
        </div>
      </div>
    </ModalBase>
  );
};
