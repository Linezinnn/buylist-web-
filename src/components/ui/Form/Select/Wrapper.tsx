import React, { useState } from "react"

import { SelectContext } from "../../../../contexts/SelectContext"

import { IOption } from "./interfaces"
import { useCloseByInside } from "../../../../hooks/useCloseByInside"


type WrapperProps = {
   children: React.ReactElement[],
   name: string,
}

export const SelectWrapper = ({ children, name }: WrapperProps) => {
	const [ activeSelect, setActiveSelect ] = useState<boolean>(false)
	const [ optionSelected, setOptionSelected ] = useState<IOption | null>(null)

   const closeByInsideRef = useCloseByInside(setActiveSelect)

   return (
      <SelectContext.Provider 
         value={{ 
            activeSelect, 
            setActiveSelect, 
            optionSelected, 
            setOptionSelected 
         }}
      >
         <div
            className={`
               flex flex-col gap-1
               relative 
               cursor-pointer
            `}
            ref={closeByInsideRef}
         >
            {
               children.map((child, index) => React.cloneElement(
                  child, 
                  {name, key: (name + '-' + index)}
               ))
            }
         </div>
      </SelectContext.Provider>
   )
}
