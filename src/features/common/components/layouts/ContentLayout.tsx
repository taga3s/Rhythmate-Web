import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ContentLayout: FC<Props> = ({ children }) => {
  return <div className="p-6 mb-[100px] mt-[60px]">{children}</div>;
};
