import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { api } from "../../services/axios";

interface useCreateProps {
	url: string,
	data?: object,
	options?: AxiosRequestConfig,
}

export function useCreate({url, data, options}: useCreateProps) {
	const [ response, setResponse ] = useState<any | null>(null)
	const [ error, setError ] = useState<Error | null>(null)

	useEffect(() => {
		api.post(url, data, options)
		.then((response) => {
			setResponse(response.data)
		})
		.catch((err) => {
			setError(err)
			console.log(error)
		})
	}, [])
	
	return response
}