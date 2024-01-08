import { ReactNode, useContext } from 'react'

import { SelectContext } from '../../../../contexts/SelectContext'

type ContentProps = {
   name?: string,
   children: ReactNode,
}

export const SelectContent = ({ name, children }: ContentProps) => {
   const { activeSelect, setActiveSelect } = useContext(SelectContext)

   return (
      <>
         {activeSelect && (
            <div 
               id={`${name}-options`}
               className={`
                  flex flex-col 
                  w-full mt-14
                  absolute overflow-hidden
                  border border-brand-base-300 
                  rounded-md 
                  max-h-56
                  overflow-y-scroll
               `}
               onClick={() => setActiveSelect(prev => !prev)}
            >
               {children}
            </div>
         )}
      </>
   )
}
