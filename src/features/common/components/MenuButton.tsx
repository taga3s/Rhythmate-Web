import { useNavigate } from "@tanstack/react-router";
import { FC, ReactNode } from "react";

type Props = {
  name: string;
  path: string;
  icon: ReactNode;
};
export const MenuButton: FC<Props> = (props) => {
  const { name, path, icon } = props;
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group"
      onClick={() => navigate({ to: path })}
    >
      {icon}
      <span className="text-sm text-blue-600 group-hover:text-blue-600">{name}</span>
    </button>
  );
};
