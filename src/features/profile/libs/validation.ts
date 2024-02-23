import { z } from "zod";

export const userEditValidationSchema = z.object({
  name: z
    .string()
    .regex(/^\S+$/, { message: "ユーザー名に空白が含まれています。" })
    .regex(/^[\S　]+$/, { message: "ユーザー名に空白が含まれています。" })
    .regex(/^[a-zA-Z0-9]+$/, { message: "ユーザー名は半角英数字で入力します。" })
    .min(4, "ユーザー名は4文字以上20文字以下で入力します。")
    .max(20, "ユーザー名は4文字以上20文字以下で入力します。"),
});

export type TUserEditValidationSchema = z.infer<typeof userEditValidationSchema>;
