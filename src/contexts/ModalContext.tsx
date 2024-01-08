import { Dispatch, SetStateAction, createContext } from 'react'

type ModalType = {
   state: boolean,
   setState: Dispatch<SetStateAction<boolean>>,
   utils?: Object,
}

export interface ModalContextType{
   createCategoryModal?: ModalType,
}

export const ModalContext = createContext<ModalContextType>({})

