import { useNavigate } from "@tanstack/react-router";
import { useSetSearchModalIsOpen } from "../../contexts/searchModalIsOpenContext";
import { HeaderBaseButton } from "./HeaderBaseButton";

export const HeaderManageButtonGroup = () => {
  const setSearchModalIsOpen = useSetSearchModalIsOpen();
  const navigation = useNavigate();
  return (
    <div className="flex items-center justify-end">
      <HeaderBaseButton icon="Tag" onClickFn={() => navigation({ to: "/manage/tags" })} />
      <HeaderBaseButton
        icon="Search"
        onClickFn={() => {
          setSearchModalIsOpen(true);
        }}
      />
    </div>
  );
};
