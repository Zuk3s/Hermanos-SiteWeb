import axios from "axios";


const http = axios.create({
    baseURL: "https://localhost:8080/api/"
})

export default http