import { useNavigate } from "@tanstack/react-router";
import { HeaderBaseButton } from "./HeaderBaseButton";

export const HeaderProfileButton = () => {
  const navigation = useNavigate();
  return (
    <>
      <HeaderBaseButton icon="Badge" onClickFn={() => navigation({ to: "/profile/badges" })} />
      {/* TODO: 実装したらコメントアウトを外す */}
      {/* <HeaderButton icon="Ranking" onClickFn={() => console.log("ランキングページへ")} /> */}
    </>
  );
};
