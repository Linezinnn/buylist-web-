import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { useCategories } from "../../../../http"

import { createCategoryFormSchema, CreateCategoryFormType } from "./FormSchema"
import { UseModalProps } from "../../../../components/ui/Modal/interfaces"

import { Form } from "../../../../components/ui/Form"
import { Modal } from "../../../../components/ui/Modal"  

interface CreateCategoryModalProps extends UseModalProps{}

export function CreateCategoryModal({ isOpen, toClose }: CreateCategoryModalProps) {
   const createCategoryForm = useForm<CreateCategoryFormType>({
      resolver: zodResolver(createCategoryFormSchema),
      mode: "onChange",
      defaultValues: {
         category_name: "Nova Categoria",
         category_color: "#7450AC",
      }
   })

   const { 
      register, 
      handleSubmit, formState: { isSubmitting, isValid }, 
      reset,
   } = createCategoryForm

   const { request } = useCategories.create()

   function handleCreate(data: CreateCategoryFormType) {
      request({
         color: data.category_color,
         name: data.category_name,
      })

      reset()
      toClose()
   }

	return (
		<Modal.Root isOpen={isOpen} toCloseByOutside={toClose}>
			<Modal.Title>
				Criar Categoria
			</Modal.Title>
         <FormProvider {...createCategoryForm}>
            <form
               onSubmit={handleSubmit(handleCreate)}
               className="flex flex-col gap-3"
            >
               <Modal.Content>
                  <Form.Field>
                     <Form.Label inputRef="category-color">
                        Cor
                     </Form.Label>
                     
                     <Form.SwitchColor
                        id="category-color"
                        defaultValue="#666666"
                        {...register("category_color")}
                     />
                  </Form.Field>
                  <Form.Field className="w-full">
                     <Form.Label inputRef="category-name">
                        Nome
                     </Form.Label>

                     <Form.Input 
                        id="category-name"
                        type="text"
                        {...register("category_name")}
                     />
                     <Form.ErrorMessage field="category_name" /> 
                  </Form.Field>
               </Modal.Content>
            
               <Modal.Actions>
                  <Form.Button
                     type="submit"
                     disabled={isSubmitting || !isValid}
                     className="px-3 py-2 rounded-md text-sm font-semibold text-white h-9"
                     isLoading={isSubmitting}
                  >
                     Confirmar
                  </Form.Button>
                  
                  <Form.Button
                     type="button"
                     className="bg-white rounded-md px-3 py-2 text-sm font-semibold text-gray-900 enabled:hover:bg-gray-200 h-9"
                     onClick={toClose}
                  >
                     Cancelar
                  </Form.Button>
               </Modal.Actions>
            </form>
         </FormProvider>
		</Modal.Root>
	)
}
