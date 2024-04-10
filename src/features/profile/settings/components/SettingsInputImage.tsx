import { forwardRef, InputHTMLAttributes } from "react";

export type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: InputHTMLAttributes<HTMLInputElement>["id"];
};

export const SettingsInputImage = forwardRef<HTMLInputElement, Props>(({ onChange, id }, ref) => {
  return <input ref={ref} id={id} type="file" accept="image/*" onChange={onChange} />;
});
