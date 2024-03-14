import axioshead from 'axios';
import { getCookie } from '../cookie';

const axios = axioshead.create({
    timeout: 20 * 1000,
});
axios.interceptors.request.use(
    (config) => {
        const token = getCookie('jtw');
        if (token) {
            config.headers.Authorization = 'Bearer ' + token;
        }
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
            deleteCookie('jwt');
            const lang = getCookie('lang');
            window.location.href = '/' + lang + '/login';
        } else {
            console.error('error:', error);
        }
        return error;
    }
);
export default axios;
