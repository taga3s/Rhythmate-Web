import { useRouterState } from "@tanstack/react-router";
import { MenuButton } from "./MenuButton";
import { AnalyticsIcon, ManageIcon, ProfileIcon, QuestsIcon } from "./icons";

export const Menu = () => {
  const router = useRouterState();
  const pathname = router.location.pathname;

  const isCurrent = (path: string) => {
    return path === pathname;
  };

  const getMenuIconColor = (paths: string[]) => {
    const isCurrentPath = paths.some((path) => isCurrent(path));
    if (isCurrentPath) {
      return "text-rhyth-orange";
    }
    return "text-rhyth-gray";
  };

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-rhyth-bg-gray border-t-2 border-light-gray">
      <ul className="grid grid-cols-4 max-w-lg h-full mx-auto font-medium">
        <MenuButton name="今日の一覧" path="/quests" icon={<QuestsIcon color={getMenuIconColor(["/quests"])} />} />
        <MenuButton
          name="クエスト管理"
          path="/manage"
          icon={<ManageIcon color={getMenuIconColor(["/manage", "/manage/new", "/manage/edit", "/manage/tags"])} />}
        />
        <MenuButton
          name="達成分析"
          path="/analytics"
          icon={<AnalyticsIcon color={getMenuIconColor(["/analytics"])} />}
        />
        <MenuButton
          name="プロフィール"
          path="/profile"
          icon={
            <ProfileIcon
              color={getMenuIconColor(["/profile", "/profile/badges", "/profile/ranking", "/profile/settings"])}
            />
          }
        />
      </ul>
    </div>
  );
};
