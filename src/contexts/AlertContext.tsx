import { Dispatch, SetStateAction, createContext } from 'react'
import { AlertProps } from '../components/ui/Alert/Alert'

interface AlertContextType{
   alerts: AlertProps[],
   setAlerts: Dispatch<SetStateAction<AlertProps[]>>,
}

const defaultValues = {
   alerts: [],
   setAlerts: () => {}
}

export const AlertContext = createContext<AlertContextType>(defaultValues)

