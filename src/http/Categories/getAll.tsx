import { useQuery } from "react-query";
import { useFetch } from "../hooks/useFetch";
import { CategoryTypeResponse } from "./types";

export function getAllCategories() {
   const query = useQuery({
      queryFn: () => useFetch<{ result: CategoryTypeResponse[] }>({
         url: '/category'
      }),
      onError: (err) => console.log(err)
   })

   return {
      ...query,
      data: query.data?.data || null
   }
}