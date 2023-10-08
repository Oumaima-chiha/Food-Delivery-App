import axios from 'axios';

const axiosClient = axios.create();

axiosClient.interceptors.request.use((config) => {
  
    const token = window.localStorage.getItem('token');

    
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default axiosClient;
