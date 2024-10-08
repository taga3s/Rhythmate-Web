import type { FC } from "react";
import { CloseIcon } from "../icons";

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
      <div className="w-6 h-6">
        <CloseIcon />
      </div>
      <span className="sr-only">モーダルを閉じる</span>
    </button>
  );
};
