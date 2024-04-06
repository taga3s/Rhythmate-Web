import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClickClose: () => void;
};
export const ModalBase: FC<Props> = ({ children, onClickClose }) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 z-[60]" onClick={onClickClose} />
      <div
        aria-hidden="true"
        className="overflow-y-auto overflow-x-hidden z-[70] max-h-full fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[480px] mx-auto"
      >
        {children}
      </div>
    </>
  );
};
