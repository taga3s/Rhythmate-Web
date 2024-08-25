import { useRouterState } from "@tanstack/react-router";
import { HeaderManageButtonGroup } from "./HeaderManageButtonGroup";
import { HeaderProfileButtonGroup } from "./HeaderProfileButtonGroup";
import { HeaderQuestsButtonGroup } from "./HeaderQuestsButtonGroup";
import { Image } from "@unpic/react";
import { FC } from "react";

const Heading1: FC<{ title: string }> = ({ title }) => {
  return <h1 className="font-cp-font font-bold text-xl text-rhyth-dark-blue tracking-wider">{title}</h1>;
};

const handlePageHeading = (pathname: string) => {
  switch (pathname) {
    case "/quests":
      return <Heading1 title="今日のクエスト" />;
    case "/manage":
    case "/manage/new":
    case "/manage/edit":
    case "/manage/tags":
      return <Heading1 title="クエスト管理" />;
    case "/analytics":
      return <Heading1 title="達成状況分析" />;
    case "/profile":
    case "/profile/badges":
    case "/profile/ranking":
    case "/profile/settings":
      return <Heading1 title="プロフィール" />;
    default:
      return <></>;
  }
};

const handleHeaderButtonGroup = (pathname: string) => {
  switch (pathname) {
    case "/quests":
      return <HeaderQuestsButtonGroup />;
    case "/manage":
      return <HeaderManageButtonGroup />;
    case "/profile":
      return <HeaderProfileButtonGroup />;
    default:
      return <></>;
  }
};

export const Header = () => {
  const router = useRouterState();
  const pathname = router.location.pathname;

  return (
    <header className="w-full shadow-md bg-rhyth-bg-gray fixed top-0 left-0 right-0 border-b-2 border-rhyth-light-gray z-50">
      <div className="flex justify-between items-center">
        <div className="px-4 py-2 flex items-center gap-2">
          <Image src="/brand-logo.svg" alt="rhythmateのロゴ" width={48} height={48} />
          {handlePageHeading(pathname)}
        </div>
        {handleHeaderButtonGroup(pathname)}
      </div>
    </header>
  );
};
