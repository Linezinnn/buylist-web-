import { AlertTriangleIcon, Check, X } from "lucide-react"
import { useEffect, useState } from "react"
import '../../../styles/transitions.css'
import { CSSTransition } from "react-transition-group"

export type AlertProps = {
   status: 'error' | 'success' | 'warning'
   message: string
   duration: number
}

export const Alert = ({ status, message, duration }: AlertProps) => {
   const [ isVisible, setIsVisible ] = useState<boolean>(true)

   useEffect(() => {
      const alertDisplayTimeOut = setTimeout(() => {
         handlerClose()
      }, duration * 1000)

      return () => clearTimeout(alertDisplayTimeOut)
   }, [duration])

   const handlerClose = () => {
      setIsVisible(false)
   }

   const stylesByStatus = () => {
      let backgroundColor: string, 
         icon, 
         iconBackground: string, 
         textColor: string

      switch(status){
         case "success":
            backgroundColor = "bg-emerald-100"
            icon = <Check size={16} className="text-emerald-100" />
            iconBackground = "bg-emerald-400"
            textColor = "text-emerald-700"
         break
         case "error":
            backgroundColor = "bg-red-100"
            icon = <X size={16} className="text-red-100" />
            iconBackground = "bg-red-400"
            textColor = "text-red-700"
         break
         case "warning":
            backgroundColor = "bg-amber-100"
            icon = <AlertTriangleIcon size={16} className="text-amber-100" />
            iconBackground = "bg-amber-400"
            textColor = "text-amber-700"
         break
      }

      return { backgroundColor, icon, iconBackground, textColor }
   }

   return (
      <>
         
            <CSSTransition
                  in={isVisible}
                  timeout={400}
                  classNames="fade"
                  unmountOnExit
            >
               <div className={`p-4 rounded-lg ${stylesByStatus().backgroundColor} custom-fade-in transition-opacity opacity-0 ${isVisible && 'opacity-100'} flex items-center gap-6 pointer-events-auto`}>
                  <span className={`${stylesByStatus().iconBackground} w-6 h-6 rounded-md flex items-center justify-center`}>
                     {stylesByStatus().icon}
                  </span>

                  <p className={stylesByStatus().textColor}>
                     {message}
                  </p>

                  <button 
                     onClick={() => handlerClose()}
                  >
                     <X size={16} className={stylesByStatus().textColor} />
                  </button>
               </div>
            </CSSTransition>
         
      </>
   )
}
