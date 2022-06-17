import axios from "axios";

const api = axios.create({
    baseURL: 'http://api-meuservico.online'
})

export default api;