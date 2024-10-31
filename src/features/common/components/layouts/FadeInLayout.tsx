import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const FadeInLayout: FC<Props> = ({ children }) => {
  return <div className="animate-fadein">{children}</div>;
};
