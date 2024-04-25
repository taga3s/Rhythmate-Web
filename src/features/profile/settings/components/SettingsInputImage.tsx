import { type InputHTMLAttributes, forwardRef } from "react";

export type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: InputHTMLAttributes<HTMLInputElement>["id"];
};

export const SettingsInputImage = forwardRef<HTMLInputElement, Props>(({ onChange, id }, ref) => {
  return <input ref={ref} id={id} type="file" accept="image/jpeg, image/jpg, image/png" onChange={onChange} />;
});
