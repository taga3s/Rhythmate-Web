import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const CopyrightLayout: FC<Props> = ({ children }) => {
  return (
    <div className="h-screen relative">
      {children}
      <div className="absolute inset-x-0 bottom-5 text-center text-gray-400">
        <small>&copy; 2024 Rhythmate All rights reserved.</small>
      </div>
    </div>
  );
};
