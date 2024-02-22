// import { MenuButton } from "./MenuButton"
import { MenuButton } from "./MenuButton";
import { AnalyticsIcon, ManageIcon, ProfileIcon, QuestsIcon } from "./icons";

export const Menu = () => {
  return (
    <ul className="fixed bottom-0 left-0 z-25 w-full h-16 bg-white border-t border-gray-200">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <MenuButton name="Quests" path="/quests/" icon={<QuestsIcon />} />
        <MenuButton name="Manage" path="/quests/manage" icon={<ManageIcon />} />
        <MenuButton name="Analytics" path="/quests/analytics" icon={<AnalyticsIcon />} />
        <MenuButton name="Profile" path="/quests/profile" icon={<ProfileIcon />} />
      </div>
    </ul>
  );
};
