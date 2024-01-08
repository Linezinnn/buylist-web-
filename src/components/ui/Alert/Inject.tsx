import { useContext, useEffect } from "react";
import { AlertProps } from "./Alert";
import { AlertContext } from "../../../contexts/AlertContext";

export const AlertInject = ({ status, message, duration }: AlertProps) => {
	const { setAlerts } = useContext(AlertContext) 

	useEffect(() => {
		setAlerts(
			(prevAlerts) => [
				...prevAlerts,
				{ 
					status, 
					message, 
					duration,
				},
			]
		)
	}, [])

	return null
}

