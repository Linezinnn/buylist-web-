import { useFormContext } from "react-hook-form";
import { Form } from "../../../components/ui/Form";

export function AmountInputGroup() {
   const { register, setValue } = useFormContext()

   return (
      <div className='relative grid grid-cols-2'>
         <Form.Input 
            type='number'
            className='rounded-r-none'
            {...register("item_amount")}
         />
         
         <Form.Select.Wrapper
            name='item_amount_simbol'
         >
            <Form.Select.Display 
               className='rounded-l-none'
               updateValue={setValue}
               {...register("item_amount_simbol")}
            />
            <Form.Select.Content>

               <Form.Select.Option 
                  name="Un."
                  value={1}
                  key={1}
                  selected
               />

               <Form.Select.Option 
                  name="L"
                  value={2}
                  key={2}
               />

               <Form.Select.Option 
                  name="mL"
                  value={3}
                  key={3}
               />
               <Form.Select.Option 
                  name="Kg"
                  value={4}
                  key={4}
               />
               <Form.Select.Option 
                  name="g"
                  value={5}
                  key={5}
               />

            </Form.Select.Content>
         </Form.Select.Wrapper>
      </div>
   )
}
