import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ContentLayout: FC<Props> = ({ children }) => {
  return (
    <div className="bg-rhyth-bg-dark-gray w-full min-h-screen">
      <div className="max-w-[680px] mx-auto px-5 pt-24 pb-28">{children}</div>
    </div>
  );
};
