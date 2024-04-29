import { useNavigate } from "@tanstack/react-router";
import type { FC, ReactNode } from "react";

type Props = {
  name: string;
  path: string;
  icon: ReactNode;
};
export const MenuButton: FC<Props> = (props) => {
  const { name, path, icon } = props;
  const navigate = useNavigate();

  return (
    <li className="text-center p-2">
      <button
        type="button"
        onClick={() => navigate({ to: path })}
        className="inline-flex flex-col items-center justify-center"
      >
        {icon}
        <span className="text-xs tracking-wider text-rhyth-black mt-1">{name}</span>
      </button>
    </li>
  );
};
