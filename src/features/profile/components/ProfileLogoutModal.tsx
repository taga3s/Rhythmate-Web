import type { FC } from "react";
import { ConfirmModal } from "../../common/components";
import { useMutateUser } from "../hooks/useMutateUser";

type Props = {
  onClickFn: () => void;
};

export const ProfileLogoutModal: FC<Props> = ({ onClickFn }) => {
  const { logoutMutation } = useMutateUser();

  const onSubmit = async () => {
    await logoutMutation.mutateAsync();
  };

  return (
    <ConfirmModal
      text={"本当にログアウトしますか？"}
      confirmBtnText={"ログアウトする"}
      cancelBtnText={"キャンセルする"}
      btnColor={"red"}
      actionFn={onSubmit}
      closeModal={onClickFn}
    />
  );
};
