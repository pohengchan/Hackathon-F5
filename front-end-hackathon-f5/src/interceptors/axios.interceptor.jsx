import axios from "axios"

export const axiosInterceptor = () => {
    axios.interceptors.request.use((request) => {
        console.log('starting request',request);
        return request; 
    })
}