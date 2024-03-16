// import { MenuButton } from "./MenuButton"
import { MenuButton } from "./MenuButton";
import { AnalyticsIcon, ManageIcon, ProfileIcon, QuestsIcon } from "./icons";

export const Menu = () => {
  return (
    <ul className="fixed bottom-0 left-0 z-25 w-full h-16 bg-rhyth-bg-gray border-t-2 border-light-gray">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <MenuButton name="今日の一覧" path="/quests/" icon={<QuestsIcon />} />
        <MenuButton name="クエスト編集" path="/quests/manage" icon={<ManageIcon />} />
        <MenuButton name="達成分析" path="/quests/analytics" icon={<AnalyticsIcon />} />
        <MenuButton name="プロフィール" path="/quests/profile" icon={<ProfileIcon />} />
      </div>
    </ul>
  );
};
