import { IOption } from "../components/ui/Form/Select/interfaces"

let mock: IOption[] = [
   {
     name: "Padaria",
     color: "yellow",
     id: "1"
   },
   {
      name: "Frutas",
      color: "red",
      id: "2"
   },
   {
      name: "Carnes",
      color: "purple",
      id: "3"
   },
 ]

export const getCategories = () => {
   // const { data: selectOptions } = useFetch<Options[]>('/category'
   return mock
}