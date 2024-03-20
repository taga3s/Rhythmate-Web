import { useSetSearchModalIsOpen } from "../../contexts/searchModalIsOpenContext";
import { HeaderButton } from "./HeaderButton";

export const HeaderManageButton = () => {
  const setSearchModalIsOpen = useSetSearchModalIsOpen();
  return (
    <>
      <HeaderButton icon="Tag" onClickFn={() => console.log("タグページへ")} />
      <HeaderButton
        icon="Search"
        onClickFn={() => {
          setSearchModalIsOpen(true);
        }}
      />
    </>
  );
};
