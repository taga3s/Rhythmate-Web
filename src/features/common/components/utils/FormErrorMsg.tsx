import { FC } from "react";

type Props = {
  msg: string;
};

export const FormErrorMsg: FC<Props> = (props) => {
  const { msg } = props;
  return <p className="flex justify-center text-xs text-red-500 font-bold max-w-52">{msg}</p>;
};
