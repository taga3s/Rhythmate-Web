import { z } from "zod";

export const userEditValidationSchema = z.object({
  name: z
    .string()
    .min(4, "ユーザー名は4文字以上20文字以下で入力します。")
    .max(20, "ユーザー名は4文字以上20文字以下で入力します。")
    .refine((value) => {
      return Boolean(value.trim().length);
    }, "ユーザー名は空白文字のみでは登録できません。"),
});

export type TUserEditValidationSchema = z.infer<typeof userEditValidationSchema>;
