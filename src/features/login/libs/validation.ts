import { z } from "zod";

export const loginValidationSchema = z.object({
  email: z
    .string()
    .regex(/^[a-zA-Z0-9]+$/, { message: "メールアドレスは半角英数字で入力します。" })
    .email("メールアドレスの値が正しくありません。"),
  password: z.string().min(8, "パスワードは8文字以上入力します。"),
});

export type TLoginValidationSchema = z.infer<typeof loginValidationSchema>;
