import { forwardRef } from "react";

export type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SettingsInputImage = forwardRef<HTMLInputElement, Props>(({ onChange }, ref) => {
  return <input ref={ref} type="file" accept="image/jpeg, image/jpg, image/png" onChange={onChange} />;
});
