import axios from "axios";

const api = axios.create({
    baseURL: 'https://52.67.58.32:3000'
})

export default api;