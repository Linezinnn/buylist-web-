import { ReactNode } from 'react'

type AlertContainer = {
   children: ReactNode
}

export const AlertContainer = ({ children }: AlertContainer) => {
   return (
      <div className="pointer-events-none flex justify-end fixed inset-0 z-10 w-screen min-w-full overflow-y-auto min-h-full">
         <div className="absolute right-0 h-full max-w-xl flex flex-col-reverse gap-2 pb-8 pr-4">
            
            {children}

         </div>
      </div>
  )
}
