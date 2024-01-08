import { ReactNode } from 'react'
import { CSSTransition } from 'react-transition-group'

import '../../../styles/transitions.css'

interface ModalProps {
  children: ReactNode,
  isOpen: boolean,
  toCloseByOutside: () => void,
}

export function ModalRoot({ children, isOpen, toCloseByOutside }: ModalProps) {
	return (
		<>
			<CSSTransition
				in={isOpen}
				timeout={400}
				classNames="fade"
				unmountOnExit
			>
				<div className="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
					<div 
						onClick={() => toCloseByOutside()} 
						className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity" 
					/>
				
					<div className="pointer-events-none fixed inset-0 z-10 w-screen overflow-y-auto">
						<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
							
							<div className="pointer-events-auto bg-brand-base-600 flex gap-4 flex-col px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
								{children}
							</div>
							
						</div>
						</div>
					</div>
				</div>
			</CSSTransition>
		</>
	)
}
