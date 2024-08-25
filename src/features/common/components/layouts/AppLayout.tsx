import type { FC, ReactNode } from "react";
import { Header } from "../header/Header";
import { Menu } from "../Menu";

type Props = {
  children: ReactNode;
};

export const AppLayout: FC<Props> = ({ children }) => {
  return (
    // TODO: 一時、背景画像を無効にする
    // <div className="bg-[url('/background-opacity.png')] bg-contain w-full min-h-screen">
    <div className="w-full min-h-screen">
      <Header />
      <div className="max-w-[680px] mx-auto px-5 pt-24 pb-28">{children}</div>
      <Menu />
    </div>
  );
};
