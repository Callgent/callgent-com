import axios from 'axios';

axios.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status !== 502) {
            return Promise.reject(error.response);
        } else {
            return Promise.reject({ message: 'The server is abnormal, please try again later' });
        }
    }
);

export default axios;
