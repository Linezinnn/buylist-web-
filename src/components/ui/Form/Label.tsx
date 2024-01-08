import { LabelHTMLAttributes } from "react"

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement>{
   children: string,
   inputRef: string,
}

export const Label = ({ children, inputRef, ...restProps }: LabelProps) => {
   return (
      <label 
         htmlFor={inputRef}
         className='text-body text-brand-base-200'
         {...restProps}
      />
   )
}
