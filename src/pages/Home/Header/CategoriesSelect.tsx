import { useContext } from 'react'
import { Form } from '../../../components/ui/Form'
import { useFormContext } from 'react-hook-form'
import { ModalContext, ModalContextType } from '../../../contexts/ModalContext'
import { useCategories } from '../../../http'
import { Pencil } from 'lucide-react'

export function CategoriesSelect() {
   const { setValue, register } = useFormContext()

   const { data } = useCategories.getAll()

   const { createCategoryModal }: ModalContextType = useContext(ModalContext) ?? {}
   const { setState: setCreateCategoryModalIsActive } = createCategoryModal ?? {}

   return (
      <Form.Select.Wrapper
         name='item_category'
      >
         <Form.Select.Display 
            placeholder='Selecione'
            updateValue={setValue}
            {...register("item_category")}
         />
         <Form.Select.Content>

            {data && data.result.map(category => (
               <Form.Select.Option 
                  name={category.name}
                  color={category.color}
                  value={category.id}
                  key={category.id}
               />
            ))}

            <Form.Select.ActionOption 
               key="create"
               text="Criar categoria"
               icon={<Pencil className='text-brand-product-200' size={20} />}
               action={() => setCreateCategoryModalIsActive?.(true)}
            />

         </Form.Select.Content>
      </Form.Select.Wrapper>
   )
}
