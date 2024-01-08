import { z } from "zod";

export const createCategoryFormSchema = z.object({
   category_color: z.string(),
   category_name: z.string()
      .min(3, "O nome precisa conter no mínimo 3 caracteres")
      .max(30, "O nome não pode conter mais de 30 caracteres"),
})

export type CreateCategoryFormType = z.infer<typeof createCategoryFormSchema>
