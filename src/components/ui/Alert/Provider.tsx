import { ReactNode, useState } from "react"
import { AlertContext } from "../../../contexts/AlertContext";
import { Alert, AlertProps } from "./Alert";
import { AlertContainer } from "./Container";

interface AlertProviderProps {
   children: ReactNode,
}

export const AlertProvider = ({ children }: AlertProviderProps) => {
   const [ alerts, setAlerts ] = useState<AlertProps[]>([]);

   return (
      <AlertContext.Provider value={{ alerts, setAlerts }}>
         {children}
         <AlertContainer>
            {alerts.map((alert, index) => (
               <Alert
                  key={index}
                  status={alert.status}
                  message={alert.message}
                  duration={alert.duration}
               />
            ))}
         </AlertContainer>
      </AlertContext.Provider>
   )
}
