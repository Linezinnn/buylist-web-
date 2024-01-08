import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {  Plus } from 'lucide-react'

import { CreateItemFormData, createItemFormSchema } from './FormSchema'

import { Form } from '../../../components/ui/Form'
import { CategoriesSelect } from './CategoriesSelect'
import { AmountInputGroup } from './AmountInputGroup'

export function Header() {
   const createItemForm = useForm<CreateItemFormData>({
      resolver: zodResolver(createItemFormSchema),
      defaultValues: {
         item_amount: 1,
      },
      mode: 'onChange',
   })

	const { 
      handleSubmit, 
      formState: { isValid, isSubmitting }, 
      register,
   } = createItemForm

	const createItem = (data: any) => {
      // axios point
	}

	return (
      <FormProvider {...createItemForm}>
         <form 
            className="grid grid-cols-12 gap-3"
            onSubmit={handleSubmit(createItem)}
         >
            <Form.Field className='col-start-1 col-end-6' >
               <Form.Label inputRef='item_name'>
                  Item
               </Form.Label>

               <Form.Input 
                  type='text'
                  id='item_name'
                  {...register("item_name")}
               />
               <Form.ErrorMessage
                  field='item_name'
               />
            </Form.Field>

            <Form.Field className="col-start-6 col-end-9 flex-1" >
               <Form.Label inputRef='item_amount'>  
                  Quantidade
               </Form.Label>

               <AmountInputGroup />

               <Form.ErrorMessage 
                  field='item_amount'
               />
               <Form.ErrorMessage
                  field='item_amount_simbol'
               />
            </Form.Field>

            <Form.Field
               className='col-start-9 col-end-12'
            >
               <Form.Label inputRef='item_category'>
                  Categoria
               </Form.Label>

               <CategoriesSelect />
               
               <Form.ErrorMessage 
                  field='item_category'
               />
            </Form.Field>

            <Form.Button
               type='submit'
               disabled={!isValid || isSubmitting}
               isLoading={isSubmitting}
               className={`
                  col-start-12
                  h-10 w-10
               `}
            >
               <Plus className='text-brand-base-100 ' size={16} />
            </Form.Button>
         </form>

      </FormProvider>
	)
}
