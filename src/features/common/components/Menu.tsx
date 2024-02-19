// import { MenuButton } from "./MenuButton"
import { MenuButton } from "./MenuButton";
import { AnalyticsIcon, ManageIcon, ProfileIcon, QuestsIcon } from "./icons";

export const Menu = () => {
  return (
    <ul className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <MenuButton name="Quests" icon={<QuestsIcon />} />
        <MenuButton name="Manage" icon={<ManageIcon />} />
        <MenuButton name="Analytics" icon={<AnalyticsIcon />} />
        <MenuButton name="Profile" icon={<ProfileIcon />} />
      </div>
    </ul>
  );
};