import { useRouterState } from "@tanstack/react-router";
import { HeaderQuestsButton } from "./HeaderQuestsButton";
import { HeaderManageButton } from "./HeaderManageButton";
import { HeaderProfileButton } from "./HeaderProfileButton";

export const Header = () => {
  const router = useRouterState();
  const pathname = router.location.pathname;

  const handlePageTitle = (pathname: string) => {
    switch (pathname) {
      case "/quests/":
        return "今日の一覧";
      case "/quests/manage":
        return "クエスト管理";
      case "/quests/analytics":
        return "達成分析";
      case "/quests/profile":
        return "プロフィール";
      default:
        return "今日の一覧";
    }
  };

  const handleHeader = (pathname: string) => {
    switch (pathname) {
      case "/quests/":
        return <HeaderQuestsButton />;
      case "/quests/manage":
        return <HeaderManageButton />;
      case "/quests/analytics":
        return null;
      case "/quests/profile":
        return <HeaderProfileButton />;
      default:
        return <HeaderQuestsButton />;
    }
  };

  return (
    <header className="w-full shadow-md bg-rhyth-bg-gray fixed top-0 left-0 right-0 border-b-2 border-rhyth-light-gray">
      <div className="flex justify-between items-center">
        <div className="px-4 py-2 flex items-center gap-2">
          <div>
            <img src="/brand-logo.svg" alt="rhythmateのロゴ" className="w-12" />
          </div>
          {/* TODO: フォント適用検討 */}
          <h1 className="font-bold text-xl text-rhyth-dark-blue tracking-wider">{handlePageTitle(pathname)}</h1>
        </div>
        <div className="flex items-center justify-end">{handleHeader(pathname)}</div>
      </div>
    </header>
  );
};
