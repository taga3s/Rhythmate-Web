import { useNavigate } from "@tanstack/react-router";
import { HeaderBaseButton } from "./HeaderBaseButton";

export const HeaderProfileButtonGroup = () => {
  const navigation = useNavigate();
  return <HeaderBaseButton icon="Badge" onClickFn={() => navigation({ to: "/profile/badges" })} />;
};
