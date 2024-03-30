import { FC, ReactNode } from "react";
import { Copyright } from "../Copyright";

type Props = {
  children: ReactNode;
};

export const CopyrightLayout: FC<Props> = ({ children }) => {
  return (
    <div className="h-screen relative">
      {children}
      <Copyright />
    </div>
  );
};
