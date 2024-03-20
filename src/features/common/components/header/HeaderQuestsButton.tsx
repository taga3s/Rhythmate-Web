import { HeaderButton } from "./HeaderButton";

export const HeaderQuestsButton = () => {
  return (
    <>
      <HeaderButton icon="Bell" onClickFn={() => console.log("通知設定")} />
    </>
  );
};
