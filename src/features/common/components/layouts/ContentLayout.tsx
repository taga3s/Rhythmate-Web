import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ContentLayout: FC<Props> = ({ children }) => {
  return (
    <div className="bg-[url('public/2278346copy.jpg')] bg-cover w-full min-h-screen">
      <div className="max-w-[680px] mx-auto px-5 pt-24 pb-28">{children}</div>
    </div>
  );
};
