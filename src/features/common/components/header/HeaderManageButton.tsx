import { HeaderButton } from "./HeaderButton";

export const HeaderManageButton = () => {
  return (
    <>
      <HeaderButton icon="Tag" onClickFn={() => console.log("タグページへ")} />
      <HeaderButton icon="Search" onClickFn={() => console.log("検索モーダル")} />
    </>
  );
};
