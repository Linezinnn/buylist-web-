import { useMutation } from "react-query";
import { CategoryTypeRequest } from "./types";
import { useCreate } from "../hooks/useCreate";

export function useCreateCategory() {

	const mutation = useMutation({
		mutationFn: useCreate,
		onError: (error) => {
			console.log(error)
		}
	})

   const request = (data: CategoryTypeRequest) => {
      mutation.mutate({
         url: '/category',
         data,
      })
   }

	return { request }
}