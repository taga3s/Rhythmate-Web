import { useRouterState } from "@tanstack/react-router";
import { MenuButton } from "./MenuButton";
import { AnalyticsIcon, ManageIcon, ProfileIcon, QuestsIcon } from "./icons";

export const Menu = () => {
  const router = useRouterState();
  const currentPath = router.location.pathname;

  const getMenuIconColor = (paths: string[], currentPath: string) => {
    const isActive = paths.some((path) => path === currentPath);
    if (isActive) {
      return "text-rhyth-orange";
    }
    return "text-rhyth-gray";
  };

  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full bg-rhyth-bg-gray border-t-2 border-light-gray">
      <ul className="grid grid-cols-4 max-w-lg h-full mx-auto font-medium">
        <MenuButton
          name="今日のクエスト"
          path="/quests"
          icon={<QuestsIcon color={getMenuIconColor(["/quests"], currentPath)} />}
        />
        <MenuButton
          name="クエスト管理"
          path="/manage"
          icon={
            <ManageIcon
              color={getMenuIconColor(["/manage", "/manage/new", "/manage/edit", "/manage/tags"], currentPath)}
            />
          }
        />
        <MenuButton
          name="達成分析"
          path="/analytics"
          icon={<AnalyticsIcon color={getMenuIconColor(["/analytics"], currentPath)} />}
        />
        <MenuButton
          name="プロフィール"
          path="/profile"
          icon={
            <ProfileIcon
              color={getMenuIconColor(
                ["/profile", "/profile/badges", "/profile/ranking", "/profile/settings"],
                currentPath,
              )}
            />
          }
        />
      </ul>
    </nav>
  );
};
