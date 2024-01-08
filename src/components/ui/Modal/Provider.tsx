import { ReactNode, useState } from "react"
import { ModalContext } from "../../../contexts/ModalContext"
import { CreateCategoryModal } from "../../../pages/Home/components/CreateCategoryModal/Modal"

interface ModalProviderProps {
   children: ReactNode
}

export function ModalProvider({ children }: ModalProviderProps) {
   const [ createCategoryModalIsActive, setCreateCategoryModalIsActive ] = useState<boolean>(false)
   const [ dataFromCreate, setDataFromCreate ] = useState<any>(null)

   return (
      <ModalContext.Provider value={{createCategoryModal: {
         state: createCategoryModalIsActive,
         setState: setCreateCategoryModalIsActive,
         utils: {
            dataFromCreate,
            setDataFromCreate,
         }
      }}}>
         
         {children}

         <CreateCategoryModal 
            isOpen={createCategoryModalIsActive}
            toClose={() => setCreateCategoryModalIsActive(false)}
         />
      </ModalContext.Provider>
   )
}
