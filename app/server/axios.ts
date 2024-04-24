
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://192.168.16.6:8080",
    });
    
export default axiosInstance;