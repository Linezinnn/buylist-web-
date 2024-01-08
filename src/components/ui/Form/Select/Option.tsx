import { useContext, useEffect } from 'react'
import { Check } from 'lucide-react'

import { useFocusInteractionByKey } from '../../../../hooks/useFocusInteration'
import { SelectContext } from '../../../../contexts/SelectContext'

type OptionProps = {
	name: string,
	color?: string,
	value: string | number,
	selected?: boolean,
}

export const SelectOption = ({ name, color, value, selected = false }: OptionProps) => {
	const { optionSelected, setOptionSelected } = useContext(SelectContext)

	const acessibilityRef = useFocusInteractionByKey()

	function handleSelectOption() {
		setOptionSelected({
			name,
			id: value,
			color: color,
		})
	}

	useEffect(() => {
		selected && optionSelected === null && handleSelectOption()
	}, [])

	const background = () => {
		return name === optionSelected?.name ? 'bg-brand-base-300' : 'bg-brand-base-400'
	}

	return (
		<div 
			className={`
				cursor-pointer 
				flex justify-between gap-2 
				p-4 w-full 
				border-y border-brand-base-300
				outline-none
				focus:bg-brand-base-300
				${background()}
			`}
			onClick={() => handleSelectOption()}
			ref={acessibilityRef}
		>
			<p className='text-brand-base-100 text-content flex gap-2'>
				{color && (
					<span 
						className='bg-white w-4 h-4 select-none flex rounded-full' 
						style={{backgroundColor: color}}
					></span>
				)}
				{name}
			</p>

			{name === optionSelected?.name && (
					<Check color="#A881E6" size="16"/>
			)}
		</div>
	)
}
