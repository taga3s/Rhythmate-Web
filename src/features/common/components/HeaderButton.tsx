import { FC } from "react";
import { BellIcon } from "./icons/header/BellIcon";

type Props = {
  icon: string;
};

export const HeaderButton: FC<Props> = ({ icon }) => {
  const selectIcon = (icon: string) => {
    switch (icon) {
      case "Bell":
        return <BellIcon />;
    }
  };

  return (
    <button type="button" className="w-16 h-full flex justify-center items-center border-l-2 border-rhyth-light-gray">
      {selectIcon(icon)}
    </button>
  );
};
