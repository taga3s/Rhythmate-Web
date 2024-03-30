import { useSetSearchModalIsOpen } from "../../contexts/searchModalIsOpenContext";
import { HeaderButton } from "./HeaderButton";
import { useNavigate } from "@tanstack/react-router";

export const HeaderManageButton = () => {
  const setSearchModalIsOpen = useSetSearchModalIsOpen();
  const navigation = useNavigate();

  return (
    <>
      <HeaderButton icon="Tag" onClickFn={() => navigation({ to: "/manage/tags" })} />
      <HeaderButton
        icon="Search"
        onClickFn={() => {
          setSearchModalIsOpen(true);
        }}
      />
    </>
  );
};
