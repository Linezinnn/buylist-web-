import React from 'react'
import { useFocusInteractionByKey } from '../../../../hooks/useFocusInteration'

type ActionOptionProps = {
	text: string,
	icon?: React.ReactElement,
	action: (...any: any[]) => any,
}

export const SelectActionOption = ({ text, icon, action }: ActionOptionProps) => {
	const acessibilityRef = useFocusInteractionByKey()

	return (
		<div 
			tabIndex={0}
			onClick={() => action()}
			ref={acessibilityRef}
			className={`
				cursor-pointer 
				w-full p-4
				bg-brand-base-400 border-y border-brand-base-300
				flex justify-between gap-2 
				outline-none
				focus:bg-brand-base-300
			`}
		>
			<p className='
				text-brand-base-100 text-content 
				flex gap-2 items-center
			'>
				{icon && (
					icon
				)}

				{text}
			</p>
		</div>	
	)
}
