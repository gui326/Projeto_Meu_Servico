import axios from "axios";

const api = axios.create({
    baseURL: 'https://localhost:3000',
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
    }
})

export default api;