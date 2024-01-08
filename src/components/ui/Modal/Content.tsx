import { ReactNode } from "react"

interface ModalContentProps {
   children: ReactNode,
}

export function ModalContent({ children }: ModalContentProps) {
   return (
      <div className="flex w-full gap-3">
         {children}
      </div>
   )
}
