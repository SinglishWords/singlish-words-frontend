import axios from "axios";

const instance = axios.create({
    baseURL: 'http://100.25.26.209/'
});

export const questionsUrl = "api/v1/questions";
export const answersUrl = "api/v1/answers";

export default instance;