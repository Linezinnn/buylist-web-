import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
   isLoading?: boolean,
}

export const Button = ({ className, isLoading, ...restProps }: ButtonProps) => {
   return (
      <button
         className={`
            bg-brand-product-200 enabled:hover:bg-brand-product-300
            outline-default
            flex items-center justify-center self-end
            disabled:opacity-60
            disabled:cursor-not-allowed
            ease-in-out
            rounded-full
            ${className}
         `}
         {...restProps}
      >
         {isLoading ? (
            <div 
               className={`
                  w-4 h-4
                  rounded-full
                  border-l-white border-gray-300 border-2
                  animate-spin
                  ease-linear
               `}
            />
         ) : (
            restProps.children
         )}
      </button>
   )
}
