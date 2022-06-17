import axios from "axios";

const api = axios.create({
    baseURL: 'https://api-meuservico.online'
})

export default api;