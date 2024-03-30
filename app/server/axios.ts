import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://192.168.100.74:3000",
    });
export default axiosInstance;