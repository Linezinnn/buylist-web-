import { Header } from "./Header"
import { AlertProvider } from "../../components/ui/Alert/Provider";
import { ModalProvider } from "../../components/ui/Modal";

export function Container() {  

   return (
      <AlertProvider>
         <ModalProvider>

            <div className='container max-w-4xl h-5 z-10 mt-20 flex flex-col gap-9'>
               <h1 className='text-heading-1 text-brand-base-100'>
                  Lista de Compras
               </h1>
               
               <Header />

            </div>

         </ModalProvider>
      </AlertProvider>
   )
}