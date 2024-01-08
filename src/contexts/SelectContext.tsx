import { Dispatch, SetStateAction, createContext } from 'react'

import { IOption } from '../components/ui/Form/Select/interfaces'

interface SelectContextType{
   activeSelect: boolean,
   setActiveSelect: Dispatch<SetStateAction<boolean>>,
   optionSelected: IOption | null,
   setOptionSelected: Dispatch<SetStateAction<IOption | null>>,
}

const defaultValues: SelectContextType = {
   activeSelect: false,
   setActiveSelect: () => {},
   optionSelected: null,
   setOptionSelected: () => {},
}

export const SelectContext = createContext<SelectContextType>(defaultValues)