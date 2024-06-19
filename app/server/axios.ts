import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://4.228.159.149:8080",
    });
    
export default axiosInstance;