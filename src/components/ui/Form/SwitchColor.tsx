import React, { InputHTMLAttributes } from "react";

interface SwitchColorProps extends InputHTMLAttributes<HTMLInputElement>{}

export const SwitchColor = React.forwardRef<HTMLInputElement, SwitchColorProps>(
   ({ className, ...restProps }, ref) => {
      return (
         <input 
            {...restProps}
            ref={ref}
            type="color" 
            className={`
               color-swatch-webkit:rounded-md rounded-xl
               color-swatch-webkit:border-none border-none 
               color-swatch-wrapper-webkit:p-0
               flex h-full
               outline-default
               cursor-pointer
               ${className}
            `}
         />
      )
})