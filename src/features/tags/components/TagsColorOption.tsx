import type { FC } from "react";
import { toRhythTextColor } from "../../common/utils";

type Props = {
  value: string;
  label: string;
};

export const TagsColorOption: FC<Props> = ({ value, label }) => {
  return (
    <option
      className={`border-b border-rhyth-light-gray w-full h-hull font-bold flex items-center px-4 py-2 rounded-t-lg ${toRhythTextColor(
        value,
      )}`}
      value={value}
    >
      {label}
    </option>
  );
};
