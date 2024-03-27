import { useNavigate } from "@tanstack/react-router";
import { HeaderButton } from "./HeaderButton";

export const HeaderProfileButton = () => {
  const navigation = useNavigate();
  return (
    <>
      <HeaderButton icon="Badge" onClickFn={() => navigation({ to: "/profile/badges" })} />
      <HeaderButton icon="Ranking" onClickFn={() => console.log("ランキングページへ")} />
    </>
  );
};
