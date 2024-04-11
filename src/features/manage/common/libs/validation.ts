import { z } from "zod";

export const manageValidationSchema = z.object({
  title: z
    .string()
    .min(1, "タイトルは1文字以上20文字以下で入力します。")
    .max(20, "タイトルは1文字以上20文字以下で入力します。")
    .refine((value) => {
      return Boolean(value.trim().length);
    }, "タイトルは空白文字のみでは登録できません。"),
  minutes: z.string().min(1, "値が不正です。"),
  startsAt: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "値が入力されていません。"),
  days: z.array(z.string()).min(1, "曜日を選択してください。"),
  tag: z.object({
    name: z.string(),
    color: z.string(),
  }),
  description: z.string().max(20, "ひとことは20文字以下で入力します。"),
});

export type TManageValidationSchema = z.infer<typeof manageValidationSchema>;
