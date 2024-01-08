import { HTMLAttributes } from 'react'

interface FielProps extends HTMLAttributes<HTMLDivElement> {}

export const Field = ({ className, ...restProps }: FielProps) => {
  return (
      <div 
         className={`
            flex gap-2 flex-col
            ${className}
         `} 
         {...restProps}
      />
  )
}
