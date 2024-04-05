import { z } from "zod";

export const tagValidationSchema = z.object({
  name: z
    .string()
    .min(1, "タグ名は1文字以上15文字以下で入力します。")
    .max(15, "タグ名は1文字以上15文字以下で入力します。"),
  color: z.string().min(1, "色を選択してください。"),
});

export type TTagValidationSchema = z.infer<typeof tagValidationSchema>;
