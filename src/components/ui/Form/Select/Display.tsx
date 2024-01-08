import React, { InputHTMLAttributes, useContext, useEffect } from 'react'

import { ChevronUp } from 'lucide-react'

import { IPropertiesOfOptionSelected } from './interfaces'
import { CategoryNameType, CombinedFormSetValue, ItemNameType } from '../interfaces'

import { SelectContext } from '../../../../contexts/SelectContext'
import { useFocusInteractionByKey } from '../../../../hooks/useFocusInteration'

interface DisplayProps extends InputHTMLAttributes<HTMLInputElement> {
   name: CategoryNameType | ItemNameType,
   placeholder?: string,
   updateValue: CombinedFormSetValue,
}

export const SelectDisplay = React.forwardRef<HTMLInputElement, DisplayProps>(
   ({ name, className, placeholder, updateValue }, ref) => {
   const { optionSelected, setActiveSelect } = useContext(SelectContext) || {}
   const acessibilityRef = useFocusInteractionByKey()

   const propertiesOfOptionSelected = (): IPropertiesOfOptionSelected => ({
      textColor: optionSelected === null ? 'text-brand-base-200' : 'text-brand-base-100',
      value: optionSelected?.name || placeholder || "",
      id: optionSelected?.id || "",
   })

   useEffect(() => {
      updateValue(name, propertiesOfOptionSelected().id)
   }, [optionSelected, updateValue, name]);

   return (
      <div 
         className={`
            outline-default
            cursor-pointer 
            w-full
            flex items-center pr-3 gap-2
            bg-brand-base-400 border border-brand-base-300 rounded-md
            ${className}
         `}
         onClick={() => setActiveSelect && setActiveSelect(prev => !prev)}
         ref={acessibilityRef}
      >
         <p
            className={`
               cursor-pointer
               outline-none select-none
               text-content
               w-full p-3
               text-sm
               bg-transparent
               ${propertiesOfOptionSelected().textColor} 
            `}
         >
            {propertiesOfOptionSelected().value}
         </p>
         <input 
            type="text"
            disabled
            ref={ref}
            id={name}
            className="hidden"
         />

         <ChevronUp className='text-brand-base-200' />
      </div>
   )
})