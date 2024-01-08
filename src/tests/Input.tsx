import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Pencil, Plus } from 'lucide-react'

import { CreateItemFormData, createItemFormSchema } from '../pages/Home/Header/FormSchema'

import { Form } from '../components/ui/Form/index'
import { ErrorMessage } from '../components/ui/Form/ErrorMessage'

import { getCategories } from './Categories'

export const Header = () => {
	const createItemForm = useForm<CreateItemFormData>({
		resolver: zodResolver(createItemFormSchema),
	})

	const { handleSubmit, formState: { isValid }, setValue, register, trigger } = createItemForm

	const createItem = (data: any) => {
		console.log(data)
	}

   const getValue = (name: "item" | "amount" | "amountSimbol" | "category", value: string | number) => {
      setValue(name, value)
      trigger(name)
   }

	return (
      <FormProvider {...createItemForm}>
         <form 
            className="grid grid-cols-12 gap-3"
            onSubmit={handleSubmit(createItem)}
         >
            <Form.Field styles='col-start-1 col-end-6'>
               <Form.Label 
                  label='Item' 
                  inputRef='item' 
               />
               <Form.Input 
                  type='text'
                  getValue={getValue}
                  {...register("item")}
               />
               <ErrorMessage field='item' />
            </Form.Field>

            <Form.Field
               styles='col-start-9 col-end-12'
            >
               <Form.Label 
                  label='Categoria'
                  inputRef='category'
               />

               <Form.Select.Wrapper
                  name='category'
               >
                  <Form.Select.Display 
                     placeholder='Selecione'
                     getValue={getValue}
                     {...register("category")}
                  />
                  
                  <Form.Select.Content 
                     options={getCategories()}
                     actionOptions={[
                        {
                           key: "create",
                           text: "Criar categoria",
                           icon: <Pencil className='text-brand-product-200' size={20} />,
                           action: () => console.log('abriu')
                        }
                     ]}
                  />
               </Form.Select.Wrapper>
               <Form.ErrorMessage 
                  field='category'
               />
            </Form.Field>

            <Form.Button 
               icon={<Plus className='text-brand-base-100 ' size={16} />}
               hasSubmit={true}
               styles={`
                  col-start-12 w-10 h-10
                  ${isValid ? 'cursor-pointer' : 'cursor-not-allowed'}
               `}
            />
         </form>
      </FormProvider>
	)
}
