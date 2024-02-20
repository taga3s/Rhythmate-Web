import { z } from "zod";

export const signupValidationSchema = z
  .object({
    name: z
      .string()
      .regex(/^[a-zA-Z0-9]+$/, { message: "ユーザー名は半角英数字で入力します。" })
      .min(4, "ユーザー名は4文字以上20文字以下で入力します。")
      .max(20, "ユーザー名は4文字以上20文字以下で入力します。"),
    email: z
      .string()
      .regex(/^[a-zA-Z0-9]+$/, { message: "メールアドレスは半角英数字で入力します。" })
      .email("メールアドレスの値が正しくありません。"),
    password: z.string().min(8, "パスワードは8文字以上入力します。"),
    passwordConfirmation: z.string().min(8, "パスワードは8文字以上入力します。"),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "入力されたパスワードと一致しません。",
    path: ["passwordConfirmation"],
  });

export type TSignupValidationSchema = z.infer<typeof signupValidationSchema>;
