import axios from 'axios';

const api = axios.create({
    baseURL: 'https://fullstack-exemplo-jp-2025.onrender.com/',
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (e) => {
        return Promise.reject(e)
    }
)

export default api;