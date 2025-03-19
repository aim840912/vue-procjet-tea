import axios, { AxiosError, type AxiosInstance, type AxiosResponse, type InternalAxiosRequestConfig } from "axios";
import { ElNotification } from "element-plus";

const service: AxiosInstance = axios.create({
    baseURL: "https://www.demo.com",
    timeout: 5000
})

service.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        return config
    },
    (error: AxiosError) => {
        ElNotification({
            title: 'Error',
            message: 'Request Error' + error.message,
            type: 'error'
        });
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    (response: AxiosResponse) => {
        const res = response.data;
        if (res.code !== 200) {
            ElNotification({
                title: 'Error',
                message: res.message || 'Error',
                type: 'error',
            });
            return Promise.reject(new Error(res.message || 'Error'));
        } else {
            return res
        }
    },
    (error: AxiosError) => {
        ElNotification({
            title: 'Error',
            message: 'Response Error: ' + error.message,
            type: 'error',
        });
        return Promise.reject(error);
    }
)

export default service