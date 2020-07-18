import axios from 'axios';
import { API_SERVER_URL, API_SERVER_PORT } from 'react-native-dotenv';

const request = axios.create({
    baseURL: `http://${API_SERVER_URL}:${API_SERVER_PORT}`
});

export default request;