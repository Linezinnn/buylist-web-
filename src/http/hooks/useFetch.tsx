import { AxiosRequestConfig, AxiosResponse } from "axios";
import { api } from "../../services/axios";

interface useFetchProps {
	url: string,
	options?: AxiosRequestConfig,
}

export async function useFetch<T>({url, options}: useFetchProps) {
	const response: AxiosResponse<T> = await api.get(url, options)
	return response
}