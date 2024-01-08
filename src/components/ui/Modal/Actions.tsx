import { ReactNode } from "react"

interface ModalCreateContext {
   children?: ReactNode
}

export function ModalActions({ children }: ModalCreateContext) {
  return (
   <div className="sm:flex sm:flex-row-reverse gap-2">
      {children}
   </div>
  )
}
