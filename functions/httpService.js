import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_URL;
const token = process.env.NEXT_PUBLIC_TOKEN;

const http = axios.create({
    baseURL,
});

http.interceptors.request.use(
    (config) => {
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default http;
