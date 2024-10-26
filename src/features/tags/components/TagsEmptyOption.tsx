import type { FC } from "react";

type Props = {
  value: string;
  label: string;
};

const TagsEmptyOption: FC<Props> = ({ value, label }) => {
  return (
    <option
      value={value}
      className={
        "w-full bg-white text-rhyth-dark-blue border border-rhyth-light-gray font-medium rounded-lg text-sm px-5 py-2.5 inline-flex"
      }
    >
      {label}
    </option>
  );
};

export { TagsEmptyOption };
