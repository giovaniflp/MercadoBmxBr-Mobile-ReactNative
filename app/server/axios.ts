import axios from 'axios';
import { useEnvironment } from 'react-native-dotenv';

const { BACKEND_URL } = useEnvironment();

const axiosInstance = axios.create(
    {
        baseURL: BACKEND_URL,
    }
);

export default axiosInstance;
