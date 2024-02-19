import { FC, ReactNode } from "react";

type Props = {
  name: string;
  icon: ReactNode;
};
export const MenuButton: FC<Props> = (props) => {
  const { name, icon } = props;
  return (
    <button
      type="button"
      className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
    >
      {icon}
      <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
        {name}
      </span>
    </button>
  );
};
