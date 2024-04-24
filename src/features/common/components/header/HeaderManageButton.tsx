import { useNavigate } from "@tanstack/react-router";
import { useSetSearchModalIsOpen } from "../../contexts/searchModalIsOpenContext";
import { HeaderBaseButton } from "./HeaderBaseButton";

export const HeaderManageButton = () => {
  const setSearchModalIsOpen = useSetSearchModalIsOpen();
  const navigation = useNavigate();

  return (
    <>
      <HeaderBaseButton icon="Tag" onClickFn={() => navigation({ to: "/manage/tags" })} />
      <HeaderBaseButton
        icon="Search"
        onClickFn={() => {
          setSearchModalIsOpen(true);
        }}
      />
    </>
  );
};
