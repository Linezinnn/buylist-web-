import { z } from "zod"

export const createItemFormSchema = z.object({
   item_name: z.string()
      .nonempty('O nome do item é obrigatório')
      .min(3, 'O nome precisa ter pelo menos 3 caracteres')
      .toUpperCase()
      .trim(),
   item_amount: z.coerce.number()
      .min(1, 'A quantidade precisa ser maior que 0')
      .max(100000, 'A quantidade precisa ser menor que 100.000'),
   item_amount_simbol: z.string()
      .nonempty('A unidade de quantidade é obrigatória'),
   item_category: z.string()
      .refine(category => {
         return category !== ''
      }, 'A categoria é obrigatória')
   ,
})
   
export type CreateItemFormData = z.infer<typeof createItemFormSchema>

