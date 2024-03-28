import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://192.168.16.4:3000",
    });
export default axiosInstance;