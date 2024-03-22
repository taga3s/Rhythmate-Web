import { FC } from "react";

type Props = {
  onClickClose: () => void;
};
export const ModalHeaderCloseButton: FC<Props> = ({ onClickClose }) => {
  return (
    <button
      type="button"
      onClick={onClickClose}
      className=" text-red-600 bg-transparent hover:text-gray-200 hover:bg-red-600 rounded-lg w-8 h-8 ml-auto flex items-center justify-center"
      data-modal-hide="authentication-modal"
    >
      <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
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
  );
};
