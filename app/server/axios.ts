
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://192.168.16.5:8080",
    });
    
export default axiosInstance;