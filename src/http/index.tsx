import axios from "axios";


const http = axios.create({
    baseURL: "https://loja-online-production.up.railway.app/api/"
})

export default http