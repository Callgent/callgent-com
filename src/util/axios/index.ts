import axioshead from 'axios';

const axios = axioshead.create({
    timeout: 20 * 1000,
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
        if (error.response && error.response.status === 401) {
            window.location.href = '/signin';
        } else {
            console.error('error:', error);
        }
        return error;
    }
);
export default axios;
