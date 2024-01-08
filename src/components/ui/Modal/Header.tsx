interface ModalTitleProps {
   children: string;
}

export function ModalTitle({ children }: ModalTitleProps) {
   return (
      <h3
         className="text-base font-semibold leading-6 text-white" 
      >
         {children}
      </h3>
   )
}