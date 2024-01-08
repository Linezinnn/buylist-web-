import React, { InputHTMLAttributes } from 'react'

import { CategoryNameType, ItemNameType } from './interfaces'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
	name: CategoryNameType | ItemNameType,
	type: "text" | "number",
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ type, className, ...restProps }, ref) => {
		return (
			<input	
				type={type}
				className={`
					text-brand-base-100 text-content 
					bg-brand-base-500 border border-brand-base-300 
					rounded-md 
					outline-default
					p-3 w-full
					${className}
				`}
				{...restProps}
				ref={ref}
			/>
		)
})
