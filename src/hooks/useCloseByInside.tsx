import { useCallback, useEffect, useRef } from "react";

export function useCloseByInside(setState: (value: React.SetStateAction<boolean>) => void){
   const ref = useRef<HTMLDivElement>(null)

   const handleOutsideClick = useCallback(
      (e: MouseEvent) => {
         if (ref.current && !ref.current.contains(e.target as Node)) {
            setState(false)
         }
      }, []
   )

   useEffect(() => {
      document.addEventListener('mousedown', handleOutsideClick)

      return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      }
   }, [])

   return ref
}