import axios from "axios";
import { getSession } from "next-auth/react";
import { API_ENDPOINT } from "../../config";


type PrivateRequestPayload = {
    method: string;
    endpoint?: string;
    accessToken:string;
    payload?: {
        [key: string]: any
    }
}

// Utility function for making authenticated requests
const apiClient = axios.create();




export async function privateRequest(payload: PrivateRequestPayload) {

    const { method, endpoint, payload: requestData,accessToken } = payload;

    const axiosEndpoint = API_ENDPOINT+endpoint

    apiClient.interceptors.request.use(async (config) => {
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    });

    try {
        switch (method.toLowerCase()) {
            case 'get':
                return await apiClient.get(axiosEndpoint);
            case 'post':
                return await apiClient.post(axiosEndpoint, requestData);
            case 'patch':
                return await apiClient.patch(axiosEndpoint, requestData);
            case 'put':
                return await apiClient.put(axiosEndpoint, requestData);
            case 'delete':
                return await apiClient.delete(axiosEndpoint);
            default:
                throw new Error(`Unsupported HTTP method: ${method}`);
        }
    } catch (error:any) {
        console.error('Error making request:', error?.response?.data?.error?.message);
        //throw error;
    }
}


export type QueryOption = {
    q?: string;
    limit?: number;
    offset?:number;
    order?:string
}