import axios from "axios";

const api = axios.create({
    baseURL: 'http://52.67.58.32:3000'
})

export default api;