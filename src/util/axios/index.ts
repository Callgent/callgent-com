import axioshead from 'axios';

const axios = axioshead.create({

});

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
        if (error.response) {
            return Promise.reject(error.response);
        } else {
            return Promise.reject({ message: 'The server is abnormal, please try again later' });
        }
    }
);

export default axios;
