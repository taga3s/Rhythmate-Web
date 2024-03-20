import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export const LoadingContainer: FC<Props> = ({ children }) => {
  return <div className="w-full h-80 grid place-content-center">{children}</div>;
};
