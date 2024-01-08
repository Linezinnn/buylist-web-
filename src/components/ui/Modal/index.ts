import { ModalActions } from "./Actions"
import { ModalContent } from "./Content"
import { ModalTitle } from "./Header"
import { ModalProvider } from "./Provider"
import { ModalRoot } from "./Root"

export const Modal = {
   Provider: ModalProvider,
   Root: ModalRoot,
   Title: ModalTitle,
   Content: ModalContent,
   Actions: ModalActions,
}

export { ModalProvider } from './Provider'