import { z } from "zod";
import type { Day, Difficulty } from "../../../api/quest/types";

export const manageValidationSchema = z.object({
  title: z
    .string()
    .min(1, "タイトルは1文字以上20文字以下で入力します。")
    .max(20, "タイトルは1文字以上20文字以下で入力します。")
    .refine((value) => {
      return Boolean(value.trim().length);
    }, "タイトルは空白文字のみでは登録できません。"),
  minutes: z.coerce.number().min(1, "値が入力されていません。"),
  startsAt: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "値が入力されていません。"),
  days: z.array(z.any().transform((v) => v as Day)).min(1, "曜日を選択してください。"),
  difficulty: z
    .any()
    .transform((v) => v as Difficulty)
    .refine(
      (v) => {
        return ["EASY", "NORMAL", "HARD"].includes(v);
      },
      { message: "難易度を選択してください。" },
    ),
  tagId: z.string(),
  description: z.string().max(20, "メモは20文字以下で入力します。"),
});

export type TManageValidationSchema = z.infer<typeof manageValidationSchema>;
