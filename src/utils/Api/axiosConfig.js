import axios from "axios";

const instance = axios.create({
    baseURL: 'http://35.175.147.177/'
});

export default instance;