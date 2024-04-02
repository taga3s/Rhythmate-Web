import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ContentLayout: FC<Props> = ({ children }) => {
  return <div className="px-5 pb-28 pt-24 bg-rhyth-bg-dark-gray min-h-screen">{children}</div>;
};
