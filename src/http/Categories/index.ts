import { useCreateCategory } from "./create";
import { getAllCategories } from "./getAll";

export const useCategories = {
   getAll:  getAllCategories,
   create: useCreateCategory,
}

