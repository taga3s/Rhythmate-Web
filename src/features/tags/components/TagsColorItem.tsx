import type { FC } from "react";
import { toRhythTextColor } from "../../common/utils";

type Props = {
  color: string;
};

export const TagsColorItem: FC<Props> = ({ color }) => {
  return (
    <option
      className={`border-b border-rhyth-light-gray w-full h-hull font-bold flex items-center px-4 py-2 rounded-t-lg ${toRhythTextColor(
        color,
      )}`}
      value={color}
    >
      {color}
    </option>
  );
};
