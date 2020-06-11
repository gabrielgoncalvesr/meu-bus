import axios from 'axios';

const request = axios.create({
    baseURL: `http://192.168.0.148:3333`
})

export default request;