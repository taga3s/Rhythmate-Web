import { z } from "zod";

export const selectTagValidationSchema = z.object({
  name: z.string(),
  // .min(1, "タグ名は1文字以上15文字以下で入力します。")
  // .max(15, "タグ名は1文字以上15文字以下で入力します。")
  // .refine((value) => {
  //   return Boolean(value.trim().length);
  // }, "タグ名は空白文字のみでは登録できません。"),
  color: z.string(),
});

export type TSelectTagValidationSchema = z.infer<typeof selectTagValidationSchema>;
