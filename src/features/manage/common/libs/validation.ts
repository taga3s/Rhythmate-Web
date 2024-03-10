import { z } from "zod";

export const manageValidationSchema = z.object({
  title: z
    .string()
    .min(1, "タイトルは1文字以上20文字以下で入力します。")
    .max(20, "タイトルは1文字以上20文字以下で入力します。"),
  minutes: z.string().min(1, "値が不正です。"),
  startsAt: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "値が入力されていません。"),
  days: z.string().array().nonempty("曜日を選択してください。"),
  description: z.string(),
});

export type TManageValidationSchema = z.infer<typeof manageValidationSchema>;
