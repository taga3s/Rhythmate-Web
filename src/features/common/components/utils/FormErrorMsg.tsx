import { FC } from "react";

type Props = {
  msg: any;
};

export const FormErrorMsg: FC<Props> = (props) => {
  const { msg } = props;
  return <p className="flex justify-center text-xs text-red-500 font-bold ">{msg}</p>;
};
