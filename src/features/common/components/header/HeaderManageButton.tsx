import { HeaderButton } from "./HeaderButton";

export const HeaderManageButton = () => {
  return (
    <>
      <HeaderButton icon="Tag" path="/quests/manage/tags" />
      <HeaderButton icon="Search" path="/quests" />
    </>
  );
};
