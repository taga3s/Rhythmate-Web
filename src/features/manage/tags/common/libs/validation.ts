import { z } from "zod";

export const tagValidationSchema = z.object({
  name: z
    .string()
    .min(1, "タイトルは1文字以上20文字以下で入力します。")
    .max(20, "タイトルは1文字以上20文字以下で入力します。"),
  color: z.string().min(1, "値が不正です。"),
});

export type TTagValidationSchema = z.infer<typeof tagValidationSchema>;