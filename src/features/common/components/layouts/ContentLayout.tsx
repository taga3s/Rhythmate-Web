import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ContentLayout: FC<Props> = ({ children }) => {
  return <div className="px-6 pb-28 pt-20 bg-rhyth-bg-dark-gray">{children}</div>;
};
