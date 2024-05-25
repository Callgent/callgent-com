import axioshead from 'axios';

const axios = axioshead.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});
axios.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        console.error('error:', error);
        return error;
    },
);
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return error;
    }
);
export default axios;
